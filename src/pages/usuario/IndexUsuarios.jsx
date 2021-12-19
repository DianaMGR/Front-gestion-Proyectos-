import React, {useEffect} from 'react'
import {useQuery} from "@apollo/client";
import { GET_USUARIOS } from '../../graphql/usuarios/query';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';


const IndexUsuarios = () => {

    const {data, error, loading} = useQuery(GET_USUARIOS);
    useEffect(() => {
       console.log('servidor', data);
    }, [data]);

    useEffect(() =>{
      if(error){
        toast.error("Error en la consulta de Usuarios");
      }
    },[error]);
    
    if(loading)return <div>Cargando.....</div>;
    return (
      <PrivateRoute roleList={['ADMINISTRADOR']}>
        <div>
         <h2 className='text-3xl font-extrabold text-gray-900'>
         DATOS USUARIOS:
        </h2>
        <table className='tabla'>
          <thead>
            <tr>
              <th>NOMBRES</th>
              <th>APELLIDOS</th>
              <th>IDENTIFICACION</th>
              <th>CORREO</th>
              <th>TIPO USUARIO</th>
              <th>ESTADO</th>
              <th>EDITAR</th>
              
            </tr>
          </thead>
          <tbody>
            {data &&
            data.Usuarios.map((u) => {
                  return (
                    <tr key={u._id}>
                      <td>{u.nombres}</td>
                      <td>{u.apellidos}</td>
                      <td>{u.identificacion}</td>
                      <td>{u.correo}</td>
                      <td>{u.tipo_usuario}</td>
                      <td>{u.estado}</td>
                      <td>
                      <Link to={`/usuarios/editar/${u._id}`}>
                        <i className='fas fa-pen text-yellow-600 hover:text-yellow-400 cursor-pointer' />
                      </Link>
                      </td>
                    </tr>
                  );
                })}
                        
           
          </tbody>
        </table> 
        </div>
      </PrivateRoute>  
    );
};
export default IndexUsuarios;