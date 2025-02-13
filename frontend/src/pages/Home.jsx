import React from 'react';
import Hero from '../components/Hero';
import JobListing from '../components/JobListing';
import AppDownload from '../components/AppDownload';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {

     const location = useLocation();
     const isChildRouteActive = location.pathname !== "/"; // Check if the URL is not exactly "/"

     return (

          <div className='bg-gradient-to-b from-[#F4F7FB] to-[#F8F9FA] '>
               {/* <div className='bg-[#F9F9F9]'> */}
               {/* <div className='bg-white'> */}

               <Navbar />

               {!isChildRouteActive && (
                    <div className='bg-white'>
                         <Hero />
                         <JobListing />
                         <AppDownload />
                    </div>
               )}

               <Outlet />

          </div>

     );

}

export default Home;
