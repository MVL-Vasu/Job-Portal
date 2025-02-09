import React, { useContext, useEffect, useRef } from 'react';
import { assets } from '../assets/assets';
import { AppContext } from '../context/AppContext';

const Hero = () => {

     const { searchFilter, setsearchFilter, IsSearched, setIsSearched } = useContext(AppContext);

     const TitleRef = useRef(null);
     const LocationRef = useRef(null);

     const onSearch = () =>{
          setsearchFilter({
               title : TitleRef.current.value,
               location : LocationRef.current.value
          })
          setIsSearched(true);
          console.log({
               title : TitleRef.current.value,
               location : LocationRef.current.value
          })
     }

     return (

          <div className='container 2xl:px-20 mx-auto my-10 max-sm:my-6'>

               <div data-aos="fade-in" data-aos-once="true" data-aos-duration="1000" className='bg-gradient-to-r from-purple-800 to-purple-950 text-secondary py-30 max-sm:py-6 text-center mx-2 rounded-xl'>
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-medium mb-4">Over 10,00+ Jobs to Apply</h2>
                    <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">Your Next Big Career Move Starts Right Here - Explore the Best Job Opportunities and Take the First Step Toward Your Future!</p>
                    <div className='flex justify-between items-center bg-white max-w-2xl max-sm:max-w-xs rounded text-gray-600 pl-3 p-1 max-sm:p-0.5 max-sm:pl-2 mx-auto sm:mx-auto'>
                         <div className='flex items-center'>
                              <img className='max-sm:h-3.5' src={assets.search_icon} alt="" />
                              <input
                                   ref={TitleRef}
                                   type="text"
                                   placeholder="Search for Jobs"
                                   className="max-sm:text-xs p-2 max-sm:py-1 rounded-full outline-none w-full"
                              />
                         </div>
                         <div className='flex items-center'>
                              <img className='max-sm:h-3.5' src={assets.location_icon} alt="" />
                              <input
                                   ref={LocationRef}
                                   type="text"
                                   placeholder="Location"
                                   className="max-sm:text-xs p-2 rounded-full outline-none w-full"
                              />
                         </div>
                         <button onClick={onSearch} className="bg-primary hover:bg-primary-hover text-secondary rounded px-6 max-sm:px-4 py-2 max-sm:py-1 ">Search</button>
                    </div>
               </div>

               <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 max-sm:p-2 rounded-md flex'>
                    <div className='flex items-center gap-10 lg:gap-16 max-sm:gap-5 flex-wrap justify-center'>
                         <p className='font-medium max-sm:text-sm'>Trusted By</p>
                         <img className='h-6 max-sm:h-4' src={assets.microsoft_logo} alt="" />
                         <img className='h-6 max-sm:h-4' src={assets.walmart_logo} alt="" />
                         <img className='h-6 max-sm:h-4' src={assets.accenture_logo} alt="" />
                         <img className='h-6 max-sm:h-4' src={assets.samsung_logo} alt="" />
                         <img className='h-6 max-sm:h-4' src={assets.amazon_logo} alt="" />
                         <img className='h-6 max-sm:h-4' src={assets.adobe_logo} alt="" />
                    </div>
               </div>

          </div>

     );

}

export default Hero;
