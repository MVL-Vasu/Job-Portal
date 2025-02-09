import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JobApply from './pages/JobApply';
import Applications from './pages/Applications';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// import RecruiterLogin from './components/Auth/RecruiterLogin';
import RecruiterLogin from './components/Auth/RecruiterLogin';
import { AppContext } from './context/AppContext';
import Dashbord from './pages/Recruiter/Dashbord';
import AddJob from './pages/Recruiter/AddJob';
import ManageJob from './pages/Recruiter/ManageJob';
import ViewApplications from './pages/Recruiter/ViewApplications';
import RecruiterHome from './components/Recruiter/RecruiterHome';
import Notification from './components/Recruiter/Notification';
import Setting from './components/Recruiter/Setting';
import Message from './components/Recruiter/Message';
AOS.init();

const App = () => {

     const { showRecruiterLogin, setshowRecruiterLogin, Role, setRole } = useContext(AppContext);

     return (

          <div>

               {showRecruiterLogin && <RecruiterLogin />}
               {Role === "user" && <Navbar />}


               {Role !== "user"
                    ?
                    <Routes>

                         <Route path="/dashbord" element={<Dashbord />} />

                         <Route path="/dashbord" element={<Dashbord />} >
                              <Route path="home" element={<RecruiterHome />} />
                              <Route path="add-job" element={<AddJob />} />
                              <Route path="manage-job" element={<ManageJob />} />
                              <Route path="view-applications" element={<ViewApplications />} />
                              <Route path="notification" element={<Notification />} />
                              <Route path="message" element={<Message />} />
                              <Route path="setting" element={<Setting />} />
                         </Route>

                    </Routes>
                    :
                    <Routes>
                         <Route path="/" element={<Home />} />
                         <Route path="/apply-job/:id" element={<JobApply />} />
                         <Route path="/applications" element={<Applications />} />
                    </Routes>

               }

               {Role === "user" && <Footer />}

          </div>

     );

}

export default App;
