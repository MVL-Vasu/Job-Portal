import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {

     const { openSignIn } = useClerk();
     const { user } = useUser();

     const {showRecruiterLogin, setshowRecruiterLogin} = useContext(AppContext);

     return (
          <div className="shadow py-3 max-sm:py-3">
               <div className='container flex justify-between items-center px-4 2xl:px-20 mx-auto'>
                    <img className='max-sm:h-6' src={assets.logo} alt="" />
                    {
                         user
                              ? <div className='flex items-center gap-3'>
                                   <Link to={"/applications"}>Applied Jobs</Link>
                                   <p> | </p>
                                   <p className='max-sm:hidden'>Hi, {user.firstName + " " + user.lastName}</p>
                                   <UserButton />
                              </div>
                              : <div className='flex gap-4 max-sm:text-xs'>
                                   <button onClick={()=> setshowRecruiterLogin(true)} className='text-gray-600'>Recruiter Login</button>
                                   <button onClick={(e) => openSignIn()} className='rounded-full bg-primary hover:bg-blue-700 px-6 sm:px-9 py-2 text-white '>Login</button>
                              </div>
                    }

               </div>
          </div>
     );
}

export default Navbar;
