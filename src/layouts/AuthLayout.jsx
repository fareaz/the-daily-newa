import React from 'react';
import NavBar from '../Componenets/NavBar';
import { Outlet } from 'react-router';


const AuthLayout = () => {
    return (
        <div className=' bg-base-200 min-h-screen py-5'>
            <header className="w-11/12 mx-auto">
             <NavBar ></NavBar></header>
             
             <main className='w-11/12 mx-auto' >
                <Outlet></Outlet>
             </main>
           
        </div>
    );
};

export default AuthLayout;