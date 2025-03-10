import React from 'react';
import { assets } from '../assets/assets';
import { useUser } from '@clerk/clerk-react';
import { FaPlus } from 'react-icons/fa';

const Profile = () => {

     const { user } = useUser();

     return (

          <div className='bg-light-bg dark:bg-dark-primary text-black dark:text-white p-8 px-20 min-h-[700px]'>

               <div className='bg-white w-full min-h-[200px] rounded-2xl overflow-hidden shadow'>

                    {/* <div className=" w-full h-[200px] bg-gradient-to-tl from-gray-500 via-gray-400 to-gray-500" ></div> */}
                    <div
                         style={{
                              background: `linear-gradient(180deg, #161c2d00 0%, #161c2d80 25%, #161c2dbf 50%, #161c2d 100%),url(${assets.banner})`,
                              backgroundPosition: "0 15%",
                              backgroundSize: "cover",
                         }}
                         className='h-[250px]'>
                         {/* <img className='w-full h-full' src="https://replay.software/updates/images/sleeve-2-2-backdrop.jpg" alt="" /> */}
                         {/* <img className='w-full object-center' src={assets.banner} alt="" /> */}
                    </div>
                    {/* <div className="h-[200px]" >
                         
                         <div className='h-20 relative'>
                              <div className="absolute -top-20 left-10 w-40 h-40 ">
                                   <div className='relative rounded-full overflow-hidden group'>

                                        <img className='border-4 border-white rounded-full' src={user?.imageUrl} alt="" />
                                        <label htmlFor='profile-image' className='group-hover:bg-black/40 cursor-pointer group-hover:opacity-100 opacity-0 flex flex-col gap-3 items-center justify-center duration-300 rounded-full absolute w-full h-full top-0 leading-0 z-10'>
                                             <FaPlus className='text-white text-3xl'/>
                                             <p className='font-semibold text-white'>Add Photo</p>
                                        </label>
                                        <input type="file" className='hidden' id='profile-image' />
                                   </div>
                              </div>
                         </div>
                         <div className='px-10 py-2'>
                              <h2 className="font-semibold text-xl" >{user?.fullName}</h2>
                         </div>
                    </div> */}

                    {/* <div className="flex px-8 w-full">
                         <div className='flex -translate-y-1/3 flex-col items-center gap-2'>
                              <div className='w-full max-h-40 overflow-hidden '>
                                   <img className='border-4 border-white w-40 rounded-full' src={user?.imageUrl} alt="" />
                              </div>
                              <h2>Vasu Mandaviya</h2>
                         </div>
                         <div className='w-full h-[200px] '>

                         </div>
                    </div> */}

                    <div className="h-[200px] flex " >

                         <div className=' flex flex-col ml-4'>

                              <div className='h-20 relative'>
                                   <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-40 h-40 ">
                                        <div className='relative rounded-full overflow-hidden group'>

                                             <img className='border-4 border-white rounded-full' src={user?.imageUrl} alt="" />
                                             <label htmlFor='profile-image' className='group-hover:bg-black/40 cursor-pointer group-hover:opacity-100 opacity-0 flex flex-col gap-3 items-center justify-center duration-300 rounded-full absolute w-full h-full top-0 leading-0 z-10'>
                                                  <FaPlus className='text-white text-3xl' />
                                                  <p className='font-semibold text-white'>Add Photo</p>
                                             </label>
                                             <input type="file" className='hidden' id='profile-image' />
                                        </div>
                                   </div>
                              </div>

                              <div className='px-10 py-2'>
                                   <h2 className="font-semibold text-nowrap text-xl" >{user?.fullName}</h2>
                                   <p></p>
                              </div>

                         </div>

                         <div className='w-full border h-[200px]'></div>

                    </div>

               </div>

          </div>

     );
}

export default Profile;
