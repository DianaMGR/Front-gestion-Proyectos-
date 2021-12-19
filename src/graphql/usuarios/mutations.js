import { gql } from '@apollo/client';

const EDITAR_USUARIO = gql`
  mutation EditarUsuario(
    $_id: ID!
    $nombres: String!
    $apellidos: String!
    $identificacion: String!
    $correo: String!
    $estado: Enum_EstadoUsuario
  ) {
    editarUsuario(
      _id: $_id
      nombres: $nombres
      apellidos: $apellidos
      identificacion: $identificacion
      correo: $correo
      estado: $estado
    ) {
      _id
      nombres
      apellidos
      identificacion
      correo
      estado
      
    }
  }
`;


export { EDITAR_USUARIO };
