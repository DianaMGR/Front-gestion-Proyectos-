import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import {UserContext} from './context/userContext';
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Index from './pages/Index';
import PrivateLayouts from './Layout/PrivateLayout';
import IndexUsuarios from './pages/usuario/IndexUsuarios';
import './styles/tabla.css';
import './styles/global.css';
import EditarUsuario from './pages/usuario/editar';
import AuthLayout from './Layout/AuthLayout';
import Registro from './pages/auth/registro';
import Login from './pages/auth/login';
import { AuthContext } from './context/authContext';
import jwt_decode from 'jwt-decode';


const httpLink = createHttpLink({
  uri: 'https://gestion-proyectoss.herokuapp.com/graphql', 
});

const authLink = setContext((_, { headers }) => {
  const token = JSON.parse(localStorage.getItem('token'));
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const client = new ApolloClient({
 cache: new InMemoryCache(),
 link: authLink.concat(httpLink),
})
function App() {
    const [userData, setUserData] = useState({});
    const [authToken, setAuthToken] = useState('');

    const setToken = (token) => {
    setAuthToken(token);
    if (token) {
      localStorage.setItem('token', JSON.stringify(token)); 
    } else {
      localStorage.removeItem('token');
    }
  };
  useEffect(() => {
    if (authToken) {
      const decoded = jwt_decode(authToken);
      setUserData({
        _id: decoded._id,
        nombres: decoded.nombres,
        apellidos: decoded.apellidos,
        identificacion: decoded.identificacion,
        correo: decoded.correo,
        tipo_usuaro: decoded.tipo_usuaro,
        
      });
    }
  }, [authToken]);

  return (
    <ApolloProvider client={client}>
    <AuthContext.Provider value= {{authToken, setAuthToken, setToken}}>
    <UserContext.Provider value={{ userData, setUserData }}>  
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PrivateLayouts />}> 
        <Route path=' ' element={<Index />}/>
        <Route path='/usuarios' element={<IndexUsuarios/>}/>
        <Route path='/usuarios/editar/:_id' element={<EditarUsuario/>}/>
        <Route path='/proyectos' element={<IndexProyectos />} /> 
        <Route path='/proyectos/nuevo' element={<NuevoProyecto />} />
      </Route >
      <Route path='/auth' element={<AuthLayout />}>
        <Route path='registro' element={<Registro />} />
        <Route path='login' element={<Login />} />
        </Route>
     </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    </AuthContext.Provider >
    </ApolloProvider>
  );
}

export default App;
