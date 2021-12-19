import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import {useQuery, useMutation} from "@apollo/client";
import Input from '../../components/Input';
import ButtonLoading from '../../components/ButtonLoading';
import DropDown from '../../components/Dropdown';
import { Enum_EstadoUsuario } from '../../utils/enums';
import { GET_USUARIO } from '../../graphql/usuarios/query';
import { Link } from 'react-router-dom';
import useFormData from '../../hooks/useFormData';
import { toast } from 'react-toastify';
import { EDITAR_USUARIO } from '../../graphql/usuarios/mutations';

const Editar = () => {

  const { form, formData, updateFormData } = useFormData(null);
    const { _id } = useParams();

    const {data:queryData, 
          error:queryError, 
          loading:queryLoading } 
          = useQuery(GET_USUARIO, {variables:{ _id },
    });

    const [editarUsuario,
      {data:mutationData,loading:mutationLoading, error:mutationError}] = useMutation(EDITAR_USUARIO);

     const submitForm = (e) => {
      e.preventDefault();
      console.log(formData); 
      editarUsuario({
        variables: { _id, ...formData},
      });
    };

  useEffect(() =>{  
    if (mutationData) {
      toast.success('Usuario modificando Exitosamente');
    }
    
    },[mutationData]);

  useEffect(() =>{
    if (mutationError) {
      toast.error('Error modificando Usuario');
    }
    
    },[queryError]);

    useEffect(() =>{
      if (queryError) {
        toast.error('Error consultando Usuario');
      }
      },[queryError, mutationError]);

  if (queryLoading) return <div>Cargando.....</div>;
    return (
        <div className='flew flex-col w-full h-full items-center justify-center p-10'>
      <Link to='/usuarios'>
        <i className='fas fa-arrow-left text-gray-600 cursor-pointer font-bold text-xl hover:text-gray-900' />
      </Link>
      <h1 className='m-4 text-3xl text-gray-800 font-bold text-center'>
        Editar Usuario
      </h1>
      <form
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
        className='flex flex-col items-center justify-center'
      >
        <Input
          label='Nombres:'
          type='text'
          name='nombres'
          defaultValue={queryData.Usuario.nombres}
          required={true}
        />
        <Input
          label='Apellidos:'
          type='text'
          name='apellidos'
          defaultValue={queryData.Usuario.apellidos}
          required={true}
        />
        
        <Input
          label='Identificación:'
          type='text'
          name='identificacion'
          defaultValue={queryData.Usuario.identificacion}
          required={true}
        />
        <Input
          label='Correo :'
          type='email'
          name='correo'
          defaultValue={queryData.Usuario.correo}
          required={true}
        />
        <DropDown
          label='Estado Usuario:'
          name='estado'
          defaultValue={queryData.Usuario.estado}
          required={true}
          options={Enum_EstadoUsuario}
        />
        <span>Tipo de Usuario:{queryData.Usuario.tipo_usuario}</span>
        <ButtonLoading
          disabled={Object.keys(formData).length === 0}
          loading={mutationLoading}
          text='Aceptar'
       />
      </form>
    </div>
    );
};

export default Editar;