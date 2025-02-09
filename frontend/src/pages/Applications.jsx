import React from 'react';
import { useState } from 'react';
import { assets, jobsApplied } from '../assets/assets';
import { AiOutlineDownload } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { SlSizeFullscreen } from "react-icons/sl";
import moment from 'moment/moment';


const Applications = () => {

     const [IsEdit, setIsEdit] = useState(false);
     const [Resume, setResume] = useState();

     return (

          <div className='container min-h-[65vh] px-4 2xl:px-20 mx-auto my-10 '>

               <h2 className='text-xl font-semibold'>Your Resume</h2>

               <div className='flex gap-2 mb-6 mt-3'>
                    {
                         IsEdit
                              ? <>

                                   <label className='flex items-center' htmlFor="resumeUpload">
                                        <p className='cursor-pointer bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2 '>Select Resume</p>
                                        <input id='resumeUpload' onChange={(e) => setResume(e.target.files[0])} accept='application/pdf' type="file" hidden />
                                        <img className='cursor-pointer' src={assets.profile_upload_icon} alt="" />
                                   </label>
                                   <button className='bg-green-100 border border-green-400 rounded-lg px-4 py-2'>Save</button>

                              </>
                              : <div className='flex flex-col w-full gap-2'>

                                   <div className='flex justify-between items-center shadow border border-neutral-200 rounded-sm px-4 py-4 bg-stone-50 w-full'>

                                        <div className='flex items-center justify-center gap-3'>

                                             <img className='w-9' src={assets.pdf_icon} alt="" />
                                             <div className='flex flex-col justify-center '>
                                                  <a href="./sample-corporate-resume.pdf" target='_blank'>
                                                       <p className='font-semibold'>Final Resume.pdf</p>
                                                  </a>
                                                  <span className='font-light text-gray-500 text-[14px]'>Uploaded on Jan 30, 2025</span>
                                             </div>

                                        </div>

                                        <div className='flex items-center gap-3'>
                                             <a href="./sample-corporate-resume.pdf" target='_blank'>
                                                  <button data-content="view" className='tool-trip bg-gray-100 rounded-full p-3 hover:bg-primary hover:text-white text-primary duration-200 '><SlSizeFullscreen /></button>
                                             </a>
                                             <a href="./sample-corporate-resume.pdf" download="resume.pdf" >
                                                  <button data-content="download" className='tool-trip bg-gray-100 rounded-full p-3 hover:bg-primary hover:text-white text-primary duration-200'><AiOutlineDownload /></button>
                                             </a>
                                             <button data-content="delete" className='tool-trip bg-gray-100 rounded-full p-3 hover:bg-primary hover:text-white text-primary duration-200'><RiDeleteBinLine /></button>
                                        </div>

                                   </div>

                                   <button onClick={() => setIsEdit(true)} className='text-gray-500 border border-gray-300 rounded-lg px-4 py-2 hover:bg-primary hover:text-white duration-200'>Edit</button>

                              </div>
                    }

               </div>

               <h2 className='text-2xl font-semibold mb-4'>Jobs Applied</h2>

               <div className='rounded-lg border-2 border-gray-300 overflow-hidden'>

                    <table className=' w-full bg-white text-stone-600 '>

                         <thead>
                              <tr>
                                   <th className='py-4 px-8 border-b border-b-gray-300 text-left'>Company</th>
                                   <th className='py-4 px-4 border-b border-b-gray-300 text-left'>Job Title</th>
                                   <th className='py-4 px-4 border-b border-b-gray-300 text-left'>Location</th>
                                   <th className='py-4 px-4 border-b border-b-gray-300 text-left'>Date</th>
                                   <th className='py-4 px-4 border-b border-b-gray-300 text-left'>Status</th>
                              </tr>
                         </thead>

                         <tbody>
                              {
                                   jobsApplied.map((job, i) => {
                                        return true ? (
                                             <tr>
                                                  <td className='py-3 px-6 flex items-center gap-4 border-b border-b-gray-300 text-neutral-800'><img className='w-8 h-8' src={job.logo} alt="" />{job.company}</td>
                                                  <td className='py-2 px-4 border-b border-b-gray-300 '>{job.title}</td>
                                                  <td className='py-2 px-4 border-b border-b-gray-300 '>{job.location}</td>
                                                  <td className='py-2 px-4 border-b border-b-gray-300 '>{moment(job.date).format("ll")}</td>
                                                  <td className='py-2 px-4 border-b border-b-gray-300 '>
                                                       <span className={`px-4 py-1.5 block w-[80%] text-center rounded-full ${job.status === "Accepted" ? "bg-green-100" : job.status === "Rejected" ? "bg-red-100" : "bg-blue-100"}`} >{job.status}</span>
                                                  </td>
                                             </tr>
                                        ) : (null)
                                   })
                              }
                         </tbody>

                    </table>

               </div>

          </div>

     );

}

export default Applications;
