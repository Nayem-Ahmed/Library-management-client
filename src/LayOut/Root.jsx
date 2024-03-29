import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Navbar></Navbar>
            <div className='pt-6 min-h-[calc(100vh-58px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;