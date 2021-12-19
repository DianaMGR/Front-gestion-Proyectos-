import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import React from 'react'
import {Outlet} from 'react-router-dom';

const PublicLayout = () => {
    return (
        <div className='flex flex-col justify-between h-screen'>
            <Navbar />
            <main className="h-full overflow-y-scroll bg-blue-400"><Outlet/></main>
            <Footer />
        </div>
    );
};

export default PublicLayout