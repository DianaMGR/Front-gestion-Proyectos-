import { gql } from '@apollo/client';

const REGISTRO = gql`
  mutation Registro(
    $nombres: String!
    $apellidos: String!
    $identificacion: String!
    $correo: String!
    $tipo_usuario: Enum_tipo_usuario!
    $password: String!
  ) {
    registro(
      nombres: $nombre
      apellidos: $apellido
      identificacion: $identificacion
      correo: $correo
      tipo_usuario: $tipo_usuario
      password: $password
    ) 
    {
        token
        error
    }  
    
  }
`;
const LOGIN = gql`
  mutation Login($correo: String!, $password: String!) {
    login(correo: $correo, password: $password) {
      token
      error
    }
  }
`;

const REFRESH_TOKEN = gql`
  mutation RefreshToken {
    refreshToken {
      token
      error
    }
  }
`;
export {REGISTRO, LOGIN, REFRESH_TOKEN};