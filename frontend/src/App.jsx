import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Recruiter/Navbar';
import Home from './pages/Home';
import JobApply from './pages/JobApply';
import Applications from './pages/Applications';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// import RecruiterLogin from './components/Auth/RecruiterLogin';
import RecruiterLogin from './components/Auth/RecruiterLogin';
import { AppContext } from './context/AppContext';
import RecruiterPage from './pages/Recruiter/RecruiterPage';
import AddJob from './pages/Recruiter/AddJob';
import ManageJob from './pages/Recruiter/ManageJob';
import ViewApplications from './pages/Recruiter/ViewApplications';
import RecruiterHome from './components/Recruiter/RecruiterHome';
import Notification from './components/Recruiter/Notification';
import Setting from './components/Recruiter/Setting';
import Message from './components/Recruiter/Message';
import SmallLoader from './components/SmallLoader';
import Loader from './components/Loader/Loader';
import ProtectedRoute from './context/ProtectedRoutes';


AOS.init();

const App = () => {

     const { showRecruiterLogin, setshowRecruiterLogin, IsLoading, setIsLoading, Role, setRole } = useContext(AppContext);

     // useEffect(() => {

     //      setIsLoading(true);

     //      if (localStorage.getItem("JobPortalAuthToken")) {
     //           setRole("recruiter");
     //      }

     //      setTimeout(() => {
     //           setIsLoading(false);
     //      }, 2000);

     // }, [])

     useEffect(() => {
          if (IsLoading) {
               document.body.style.overflow = "hidden"; // Disable scrolling
          } else {
               document.body.style.overflowY = "auto"; // Enable scrolling when loading is done
          }
     }, [IsLoading])

     return (

          <div>

               {/* <SmallLoader/> */}
               {IsLoading && <Loader />}
               
               <Navbar/>

               {showRecruiterLogin && <RecruiterLogin />}
               {/* {Role === "user" && <Navbar />} */}

               {/* {Role !== "user"
                    ? */}
               <Routes>

                    {/* <Route path="/dashbord" element={<Dashbord />} /> */}

                    <Route path="/recruiter" element={
                         <ProtectedRoute roles={['recruiter']} >
                              <RecruiterPage />
                         </ProtectedRoute>
                    } >
                         <Route path="" element={<RecruiterHome />} />
                         <Route path="add-job" element={<AddJob />} />
                         <Route path="manage-job" element={<ManageJob />} />
                         <Route path="view-applications" element={<ViewApplications />} />
                         <Route path="notification" element={<Notification />} />
                         <Route path="message" element={<Message />} />
                         <Route path="setting" element={<Setting />} />
                    </Route>

                    <Route path="/" element={
                         <ProtectedRoute roles={['user']} >
                              <Home />
                         </ProtectedRoute>
                    } >
                         <Route path="apply-job/:id" element={<JobApply />} />
                         <Route path="applications" element={<Applications />} />
                    </Route>

                    <Route path="*" element={
                         <div className='flex justify-center items-center flex-col min-h-[80vh]'>
                              <h1 className='text-[150px] text-blue-500'>404</h1>
                              <p className='font-bold'>PAGE NOT FOUND</p>
                         </div>
                    } />

               </Routes>
               {/* : */}
               {/* <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/apply-job/:id" element={<JobApply />} />
                    <Route path="/applications" element={<Applications />} />
               </Routes> */}

               {/* } */}

               {Role === "user" && <Footer />}

          </div>

     );

}

export default App;
