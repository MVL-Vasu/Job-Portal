import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { FaBell } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { AppContext } from '../../context/AppContext';
import { BsMoonStarsFill } from "react-icons/bs";



const Navbar = () => {

     // const { DarkMode, setDarkMode } = useContext(AppContext);
     const [DarkMode, setDarkMode] = useState(false);
     const [OpenMenu, setOpenMenu] = useState(false);
     const [OpenNotificationbox, setOpenNotificationbox] = useState(false);

     const handleModeChange = () => {
          setDarkMode(!DarkMode);
          if (document.documentElement.classList.contains("dark")) {
               document.documentElement.classList.remove("dark")
          } else {
               document.documentElement.classList.add("dark")
          }
     }

     return (

          <div className='shadow bg-gray-800 dark:bg-black text-white py-3 max-sm:py-3'>

               <div className='container flex justify-between items-center px-0 2xl:px-20 mx-auto'>

                    <img className='max-sm:h-6' src={assets.light_logo} alt="" />

                    <div className='flex items-center gap-5'>


                         <button
                              onClick={handleModeChange}
                              className='text-white bg-white/10 hover:text-white  hover:outline-2   hover:outline-white  duration-100 rounded-full h-8 w-8 flex items-center justify-center'
                         >
                              <BsMoonStarsFill className={`absolute duration-500 ${DarkMode ? " scale-100 opacity-100 rotate-360" : "opacity-0 rotate-180"}`} />
                              <MdWbSunny className={`absolute duration-500 ${!DarkMode ? "scale-100 opacity-100 rotate-0" : "opacity-0 rotate-180"}`} />
                         </button>

                         <div className='relative'>

                              <button
                                   onBlur={() => setOpenNotificationbox(false)} onClick={() => { OpenNotificationbox ? setOpenNotificationbox(false) : setOpenNotificationbox(true) }}
                                   className='text-gray-400  bg-white/10 hover:text-white focus:text-white hover:outline-2 focus:outline-2 focus:outline-offset-1 hover:outline-white focus:outline-white duration-100 rounded-full h-8 w-8 flex items-center justify-center'
                              ><FaBell /></button>

                              <div className={`${!OpenNotificationbox ? "scale-75 opacity-0" : "scale-100 opacity-100"} absolute w-[200px] right-0 top-[45px] bg-white text-black shadow origin-top-right duration-300 rounded py-1`}>
                                   <ul className='text-gray-800'>
                                        <li className='hover:bg-gray-100 text-sm flex items-center cursor-pointer px-4 py-2'>
                                             <img src={assets.profile_icon} className='h-4 mr-2' alt="" />
                                             My Profile
                                        </li>

                                        <li className='hover:bg-gray-100 text-sm flex items-center cursor-pointer px-4 py-2'>
                                             <img src={assets.setting_icon} className='h-4 mr-2' alt="" />
                                             Setting
                                        </li>

                                        <li className='hover:bg-gray-100 text-sm flex items-center cursor-pointer px-4 py-2'>
                                             <img src={"https://img.icons8.com/?size=100&id=0nJEXu0vsXkr&format=png&color=000000"} className='h-4 mr-2' alt="" />
                                             Sign Out
                                        </li>

                                   </ul>
                              </div>

                         </div>

                         <p className='font-semibold'>Hi, Vasu</p>

                         <div className='relative group flex items-center'>

                              <button onBlur={() => setOpenMenu(false)} onClick={() => { OpenMenu ? setOpenMenu(false) : setOpenMenu(true) }} className='h-9 outline-2 outline-white overflow-hidden rounded-full focus:outline-2 focus:outline-offset-2'>
                                   <img className='h-full  ' src={assets.profile_img} alt="" />
                              </button>

                              <div className={`${!OpenMenu ? "scale-75 opacity-0 pointer-events-auto" : "scale-100 opacity-100"} absolute pointer-events-none w-[200px] right-0 z-30 top-[45px] bg-white text-black shadow origin-top-right duration-300 rounded py-1`}>
                                   <ul className='text-gray-800'>
                                        <li className='hover:bg-gray-100 text-sm flex items-center cursor-pointer px-4 py-2'>
                                             <img src={assets.profile_icon} className='h-4 mr-2' alt="" />
                                             My Profile
                                        </li>

                                        <li className='hover:bg-gray-100 text-sm flex items-center cursor-pointer px-4 py-2'>
                                             <img src={assets.setting_icon} className='h-4 mr-2' alt="" />
                                             Setting
                                        </li>

                                        <li className='hover:bg-gray-100 text-sm flex items-center cursor-pointer px-4 py-2'>
                                             <img src={"https://img.icons8.com/?size=100&id=0nJEXu0vsXkr&format=png&color=000000"} className='h-4 mr-2' alt="" />
                                             Sign Out
                                        </li>

                                   </ul>
                              </div>

                         </div>


                    </div>

               </div>

          </div>

     );

}

export default Navbar;
