import React  from 'react';
import { Link, } from 'react-router-dom';
import ImagenLogo from './ImagenLogo';
import useActiveRoute from '../hooks/useActiveRoute';


const Sidebar = () => {
    return (
       
        <nav className="hidden lg:flex lg:w-72 border border-gray-300 h-full flex-col bg-gray-400 p-4 sidebar">
          <Link to='/admin'>
          <ImagenLogo />
          </Link>
            <div className='my-4'>
                <Ruta icono ='fa-solid fa-users ' ruta='/admin/profile' nombre='Perfiles'/>
                <Ruta icono ='fas fa-home ' ruta='' nombre='Inicio'/>
                <Ruta icono ='fas fa-users ' ruta='/usuarios' nombre='Gestion Usuarios'/>
                <Ruta  icono ='fas fa-file-invoice' ruta='/proyectos' nombre='Gestion Proyectos'/>
                <Ruta icono ='fas fa-chalkboard-teacher' ruta='/admin/inscripcion' nombre='Gestion Inscripcion'/>
                <Ruta icono ='fas fa-chart-line' ruta='/admin/avances' nombre='Gestion de Avances'/>
            </div>
            <button > Cerrar Sesion</button>
        </nav>   
           );
        };
    const Ruta = ({ icono, ruta, nombre}) =>{
       const isActive = useActiveRoute(ruta);
       return(
        <Link to={ruta}>
        <button 
        className={`p-1 my-2 bg-${
        isActive ? 'indigo':'gray'
        }-700 hover:bg-indigo-900 flex w-full items-center text-white rounded-md`}
            >
            <i className={`${icono} w-10`} />
            {nombre}
            </button> 
        </Link>
    
    );
};

export default Sidebar;
