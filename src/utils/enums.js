const Enum_EstadoUsuario = {
    PENDIENTE: 'Pendiente',
    AUTORIZADO: 'Autorizado',
    NO_AUTORIZADO: 'No autorizado',
  };
  const  Enum_tipousuario={
    ESTUDIANTE:'Estudiante',
    LIDER:'Lider',
    ADMINISTRADOR:'Administrador',
};
const Enum_Estado_Proyecto={
  ACTIVO:'Activo',
  INACTIVO:'Inactivo',
};
const Enum_Fase_Proyecto={
  INICIADO:'Iniciado',
  EN_PROCESO:'En proceso',
  TERMINADO:'Terminado',
  NULA:'Nula',
};
const Enum_Tipo_Objetivo={
  GENERAL:'General',
  ESPECIFICO:'Especifico'
          
  };
const Enum_Estado_Inscripcion={
  ACEPTADA:'Aceptada',
  RECHAZADA:'Rechazada',
  PENDIENTE:'Pendiente',
  
  }        


  export {  Enum_EstadoUsuario,
     Enum_tipousuario, 
     Enum_Estado_Inscripcion, 
     Enum_Tipo_Objetivo, 
     Enum_Estado_Proyecto, 
     Enum_Fase_Proyecto };