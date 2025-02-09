import React, { useContext, useEffect, useState } from 'react';
import { assets, JobCategories, JobLocations } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import JobCard from './JobCard';
import { IoFilterSharp } from "react-icons/io5";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { BsGrid3X3GapFill } from "react-icons/bs";

const JobListing = () => {

     const { searchFilter, setsearchFilter, IsSearched, Jobs } = useContext(AppContext);

     const [showFilter, setshowFilter] = useState(false);
     const [loading, setLoading] = useState(false);
     const [view, setview] = useState(1);
     const [currentPage, setcurrentPage] = useState(1);
     const [ItemPerPage, setItemPerPage] = useState(6);

     const totalPages = Math.ceil(Jobs.length / ItemPerPage);

     // Get current page products
     const indexOfLastProduct = currentPage * ItemPerPage;
     const indexOfFirstProduct = indexOfLastProduct - ItemPerPage;

     const [selectedCategories, setSelectedCategories] = useState([]);
     const [selectedLocation, setSelectedLocation] = useState([]);

     const [filteredJobs, setfilteredJobs] = useState(Jobs);

     const handleCategoryChange = (category) => {
          setSelectedCategories(
               prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
          )
     }

     const handleLocationChange = (location) => {
          setSelectedLocation(
               prev => prev.includes(location) ? prev.filter(c => c !== location) : [...prev, location]
          )
     }

     useEffect(() => {

          // Helper function to check if job matches selected category
          const matchesCategory = job =>
               selectedCategories.length === 0 || selectedCategories.includes(job.category);

          // Helper function to check if job matches selected location
          const matchesLocation = job =>
               selectedLocation.length === 0 || selectedLocation.includes(job.location);

          // Helper function to check if job title matches search filter
          const matchesTitle = job =>
               searchFilter.title === "" || job.title.toLowerCase().includes(searchFilter.title.toLowerCase());

          // Helper function to check if job location matches search filter
          const matchesSearchLocation = job =>
               searchFilter.location === "" || job.location.toLowerCase().includes(searchFilter.location.toLowerCase());

          // Step 1: Make a reversed copy of the Jobs array (so newest jobs appear first)
          // Step 2: Use .filter() to check each job based on conditions
          const newFilteredJobs = Jobs.slice().reverse().filter(job =>

               // if the job passes all checks means if all returns true then the job is added to newfiltered jobs other wise not
               matchesCategory(job) &&   // Job must match selected category (or no category is selected)
               matchesLocation(job) &&   // Job must match selected location (or no location is selected)
               matchesTitle(job) &&      // Job must match title search (or title search is empty)
               matchesSearchLocation(job) // Job must match location search (or location search is empty)

          );

          // Step 3: Update the filtered jobs list in state
          setfilteredJobs(newFilteredJobs);

          // Step 4: Reset the current page to the first page whenever filters change
          setcurrentPage(1);

          /*
          // Example Data:
          const Jobs = [
               { id: 1, title: "React Developer", category: "IT", location: "New York" },
               { id: 2, title: "Java Developer", category: "IT", location: "San Francisco" },
               { id: 3, title: "Marketing Manager", category: "Marketing", location: "New York" }
          ];

          // Example Filters:
          const selectedCategories = ["IT"];
          const selectedLocation = ["New York"];
          const searchFilter = { title: "", location: "" };

          // Expected Output:
          // Only Job 1 (React Developer) should be in filteredJobs because:
          // - Category "IT" matches
          // - Location "New York" matches
          // - Title filter is empty (so all titles pass)
          // - Location filter is empty (so all locations pass)
          */

     }, [Jobs, selectedCategories, selectedLocation, searchFilter])

     useEffect(() => {
          setLoading(true);
          const timer = setTimeout(() => setLoading(false), 500); // Simulate network delay
          return () => clearTimeout(timer);
     }, [currentPage]);


     // Handle Next and Prev
     const nextPage = () => {
          if (currentPage < totalPages) setcurrentPage(currentPage + 1);
     };

     const prevPage = () => {
          if (currentPage > 1) setcurrentPage(currentPage - 1);
     };

     // Handle items per page change
     const handleItemsPerPageChange = (e) => {
          setItemPerPage(Number(e.target.value));
          setcurrentPage(1); // Reset to first page when changing items per page
     };

     const maxPageButtons = 5; // Adjust how many page numbers to show

     const getPageNumbers = () => {
          let pages = [];
          const startPage = Math.max(2, currentPage - Math.floor(maxPageButtons / 2));
          const endPage = Math.min(totalPages - 1, startPage + maxPageButtons - 1);

          if (startPage > 2) pages.push("..."); // Ellipsis before middle pages

          for (let i = startPage; i <= endPage; i++) {
               pages.push(i);
          }

          if (endPage < totalPages - 1) pages.push("..."); // Ellipsis after middle pages

          return pages;
     };


     return (
          <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8 max-sm:py-4'>

               {/* Sidebar */}
               <div data-aos="fade-right" data-aos-duration="1000" className='w-full lg:w-1/5 bg-white px-4 '>
                    {
                         IsSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
                              <>
                                   <h3 className='font-medium text-lg mb-4'>Current Search</h3>
                                   <div className='mb-4 text-gray-600 flex gap-1'>
                                        {
                                             searchFilter.title && (
                                                  <span className='inline-flex items-center gap-2.5 rounded px-4 py-2 bg-blue-50 border border-blue-300 '>
                                                       {searchFilter.title}
                                                       <img onClick={()=> setsearchFilter(prev => ({...prev, title : ""}))} className="cursor-pointer" src={assets.cross_icon} alt="" />
                                                  </span>
                                             )
                                        }
                                        {
                                             searchFilter.location && (
                                                  <span className='inline-flex items-center gap-2.5 rounded px-4 py-2 bg-red-50 border border-red-300'>
                                                       {searchFilter.location}
                                                       <img onClick={()=> setsearchFilter(prev => ({...prev, location : ""}))} className="cursor-pointer" src={assets.cross_icon} alt="" />
                                                  </span>
                                             )
                                        }
                                   </div>
                              </>
                         )
                    }

                    <button onClick={() => setshowFilter(!showFilter)} className='px-4 py-1.5 rounded border border-gray-400 lg:hidden'>
                         {
                              showFilter
                                   ? "Close"
                                   : <div className='flex items-center gap-2'>
                                        <IoFilterSharp />
                                        Filter
                                   </div>

                         }
                    </button>


                    <div className={showFilter ? "" : "max-lg:hidden"}>
                         <h4 className='font-medium text-lg py-4'>Search By Categories</h4>
                         <ul className='space-y-4 text-gray-600 pl-2'>
                              { 
                                   JobCategories.map((category, index) => {
                                        return (
                                             <li key={index} className='flex items-center gap-3'>
                                                  <input
                                                       type="checkbox"
                                                       id={category.name}
                                                       className='cursor-pointer'
                                                       onChange={() => handleCategoryChange(category.name)}
                                                       checked={selectedCategories.includes(category.name)}
                                                  />
                                                  <label className='cursor-pointer' htmlFor={category.name}>{category.name}</label>
                                             </li>
                                        )
                                   })
                              }
                         </ul>
                    </div>

                    <div className={showFilter ? "" : "mt-5 max-lg:hidden"}>
                         <h4 className='font-medium text-lg py-4'>Search By Location</h4>
                         <ul className='space-y-4 text-gray-600 pl-2'>
                              {
                                   JobLocations.map((location, index) => {
                                        return (
                                             <li key={index} className='flex items-center gap-3'>
                                                  <input
                                                       type="checkbox"
                                                       id={location}
                                                       className='cursor-pointer'
                                                       onChange={() => handleLocationChange(location)}
                                                       checked={selectedLocation.includes(location)}
                                                  />
                                                  <label className='cursor-pointer' htmlFor={location}>{location}</label>
                                             </li>
                                        )
                                   })
                              }
                         </ul>
                    </div>

               </div>


               {/* Job Listing */}
               <section data-aos="fade-left" data-aos-duration="1000" className='w-full lg:w-4/5 text-gray-800 max-lg:px-4'>

                    <div className='flex justify-between items-center shadow px-3 py-0.5 bg-gray-50 rounded'>
                         <h3 className='font-medium text-[27px] ml-4 py-2 text-gray-800' id='job-list'>Letest Jobs</h3>
                         <div className='flex gap-3 pr-6'>
                              <select name="" id="" className='px-2 mr-2 text-sm border border-gray-300 rounded-full text-gray-700 bg-white focus:border-blue-400 focus:ring-3 focus:ring-blue-200 outline-none'>
                                   <option value="" disabled hidden>Sort By</option>
                                   <option value="">Letest</option>
                                   <option value="">Popular</option>
                              </select>
                              <div onClick={() => setview(1)} className={`p-1.5 shadow ${view === 1 ? "bg-blue-500 text-white" : "hover:bg-gray-200"}  cursor-pointer  rounded text-sm`}>
                                   <BsGrid3X3GapFill />
                              </div>
                              <div onClick={() => setview(2)} className={`p-1.5 shadow ${view === 2 ? "bg-blue-500 text-white" : "hover:bg-gray-200"}  cursor-pointer  rounded text-sm`}>
                                   <IoGrid />
                              </div>
                              <div onClick={() => setview(3)} className={`p-1.5 shadow ${view === 3 ? "bg-blue-500 text-white" : "hover:bg-gray-200"}  cursor-pointer  rounded text-sm`}>
                                   <FaListUl />
                              </div>
                         </div>
                    </div>

                    {/* Job Listing */}
                    {loading ? (
                         <div className='flex items-center justify-center mt-5'>
                              {/* <AiOutlineLoading3Quarters /> */}
                              <p className='h-6 w-6 border-blue-600 border-t-2 border-b-2 border-r-2 border-l-2 border-l-transparent rounded-full animate-spin'></p>
                         </div>
                    ) : (
                         <div
                              className={`
                                   grid gap-4 mt-6
                                   ${view === 1 ? "xl:grid-cols-3 sm:grid-cols-3" : ""}
                                   ${view === 2 ? "xl:grid-cols-2 sm:grid-cols-2" : ""}
                                   ${view === 3 ? "xl:grid-cols-1" : ""}
                              `}
                         >
                              {filteredJobs.slice(indexOfFirstProduct, indexOfLastProduct).map((job, i) => {
                                   return <JobCard key={i} job={job} />
                              })}
                         </div>
                    )}

                    {/* Pagination */}
                    {
                         Jobs.length > 0 && (

                              <div className='flex items-center justify-between space-x-2 mt-10 border border-gray-200 px-4 py-2.5 shadow'>

                                   <div className='flex items-center gap-3 text-gray-500 text-sm'>
                                        <div className='flex items-center'>
                                             item per page
                                             <select className='ml-2 px-1 py-0.5 focus:outline focus:outline-blue-400 rounded border' value={ItemPerPage} onChange={handleItemsPerPageChange} name="" id="">
                                                  {[6, 12, 18, 24].map((num) => (
                                                       <option key={num} value={num}>
                                                            {num}
                                                       </option>
                                                  ))}
                                             </select>
                                        </div>
                                        <span>
                                             Showing {indexOfFirstProduct + 1} - {Math.min(indexOfLastProduct, Jobs.length)} of {Jobs.length}
                                        </span>
                                   </div>

                                   <div className='flex gap-2'>

                                        <button onClick={prevPage} disabled={currentPage === 1} className='disabled:text-gray-400'><FaAngleLeft /></button>

                                        {/* {
                                             Array.from({ length: totalPages }).map((job, i) => {
                                                  return <button key={i} onClick={() => setcurrentPage(i + 1)} className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage === i + 1 ? "bg-blue-100 text-blue-500" : "text-gray-500 hover:bg-gray-100"}`}>{i + 1}</button>
                                             })
                                        } */}

                                        {/* First Page */}
                                        {totalPages >= 1 && (
                                             <button onClick={() => setcurrentPage(1)} className={`w-9 h-9 flex items-center justify-center border border-gray-300 rounded ${currentPage === 1 ? "bg-blue-100 text-blue-500" : "text-gray-500 hover:bg-gray-100"}`}>1</button>
                                        )}

                                        {/* Dynamic Middle Pages */}
                                        {getPageNumbers().map((page, i) => (
                                             <button
                                                  key={i}
                                                  onClick={() => typeof page === "number" && setcurrentPage(page)}
                                                  className={`w-9 h-9 flex items-center justify-center border border-gray-300 rounded ${currentPage === page ? "bg-blue-100 text-blue-500" : "text-gray-500 hover:bg-gray-100"}`}
                                                  disabled={page === "..."}
                                             >
                                                  {page}
                                             </button>
                                        ))}

                                        {/* Last Page */}
                                        {totalPages > 1 && (
                                             <button onClick={() => setcurrentPage(totalPages)} className={`w-9 h-9 flex items-center justify-center border border-gray-300 rounded ${currentPage === totalPages ? "bg-blue-100 text-blue-500" : "text-gray-500 hover:bg-gray-100"}`}>{totalPages}</button>
                                        )}


                                        <button onClick={nextPage} disabled={currentPage === totalPages} className='disabled:text-gray-400'><FaAngleRight /></button>

                                   </div>

                              </div>

                         )
                    }

               </section>

          </div>
     );
}

export default JobListing;
