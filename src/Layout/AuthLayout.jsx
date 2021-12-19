import ImagenLogo from '../components/ImagenLogo';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';



const AuthLayout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-purple-200 py-2 px-4 sm:px-6 lg:px-8'>
    <nav className='bg-re-200 items-left'>
    
    </nav>
    
      <div className='w-full flex items-start'>
      
        <Link to='/'>
          <i className='fas fa-home cursor-pointer ' />
        </Link>
      </div>
      <div className='max-w-md w-full'>
      <ImagenLogo /> 
        <Outlet/>
      </div>
    </div>
  );
};

export default AuthLayout;
