import { gql } from '@apollo/client';

const GET_USUARIOS = gql`
query Query { 
  Usuarios {
    _id
    nombres
    apellidos
    identificacion
    correo
    estado
    tipo_usuario
  }
}

`;
const GET_USUARIO = gql`
  query Usuario($_id: String!) {
    Usuario(_id: $_id) {
      _id
      nombres
      apellidos
      correo
      estado
      identificacion
      tipo_usuario
   }
  }
  `;  
export { GET_USUARIOS,  GET_USUARIO  };