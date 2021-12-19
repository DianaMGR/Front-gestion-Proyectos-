import Sidebar from "../components/Sidebar";
import React, { useEffect, useState } from 'react';
import {useNavigate,Outlet} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useMutation } from '@apollo/client';
import { REFRESH_TOKEN } from "../graphql/usuarios/auth/mutations";
import { useAuth } from "../context/authContext";

const PrivateLayouts = () => {
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const [loadingAuth, setLoadingAuth] = useState(true);

  
  const [refreshToken, { data: dataMutation, loading: loadingMutation }] =
    useMutation(REFRESH_TOKEN);

  useEffect(() => {
    refreshToken();
  }, [refreshToken]);

  useEffect(() => {
    if (dataMutation) {
      if (dataMutation.refreshToken.token) {
        setToken(dataMutation.refreshToken.token);
      } else {
        setToken(null);
        navigate('/auth/login');
      }
      setLoadingAuth(false);
    }
  }, [dataMutation, setToken, loadingAuth, navigate]);

  if (loadingMutation || loadingAuth) return <div>Cargando...</div>;



   return(   
   <div className="flex w-screen h-screen" >
      
     <div className='flex flex-col lg:flex-row flex-nowrap h-full w-full'> 
       <Sidebar/>
       
       <Outlet />       
      <main className='flex w-full overflow-y-scroll items-center justify-center'>
      
        </main>     
    </div>
    <ToastContainer/>
   </div>
    
   );
};
export default PrivateLayouts;