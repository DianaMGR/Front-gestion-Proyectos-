import React, { useEffect } from 'react';
import Input from '../../components/Input';
import { Enum_tipousuario } from '../../utils/enums';
import DropDown from '../../components/Dropdown';
import ButtonLoading from '../../components/ButtonLoading';
import useFormData from '../../hooks/useFormData';
import { Link, useNavigate } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { useAuth } from '../../context/authContext';
import { REGISTRO } from '../../graphql/usuarios/auth/mutations';

const Register = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const { form, formData, updateFormData } = useFormData();

  
  const [registro, { data: dataMutation }] = useMutation(REGISTRO);

  const submitForm = (e) => {
    e.preventDefault();
    registro({ variables: formData });
  };

  useEffect(() => {
    if (dataMutation) {
      if (dataMutation.registro.token) {
        setToken(dataMutation.registro.token);  ////ojo revisar
        navigate('/');
      }
    }
  }, [dataMutation, setToken, navigate]);

  return (
    <div className='flex flex-col h-full w-full items-center justify-center'>
      <h1 className='text-3xl font-bold my-4'>Regístrate</h1>
      <form
        className='flex flex-col'
        onSubmit={submitForm}
        onChange={updateFormData}
        ref={form}
      >
        <div className='grid grid-cols-2 gap-5'>
          <Input label='Nombre:' name='nombre' type='text' required />
          <Input label='Apellido:' name='apellido' type='text' required />
          <Input
            label='Documento:'
            name='identificacion'
            type='text'
            required
          />
          <DropDown
            label='Tipo usuario deseado:'
            name='tipo_usuario'
            required
            options={Enum_tipousuario}
          />
          <Input label='Correo:' name='correo' type='email' required />
          <Input label='Contraseña:' name='password' type='password' required />
        </div>
        <ButtonLoading
          disabled={Object.keys(formData).length === 0}
          loading={false}
          text='Registrarme'
        />
      </form>
      <span>¿Ya tienes una cuenta?</span>
      <Link to='/auth/login'>
        <span className='text-blue-700'>Inicia sesión</span>
      </Link>
    </div>
  );
};

export default Register;
