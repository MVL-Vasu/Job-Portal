import { useEffect, useState } from "react";
import { createContext } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

     const [DarkMode, setDarkMode] = useState(false);

     const [searchFilter, setsearchFilter] = useState({
          title: "",
          location: ""
     });

     const [showRecruiterLogin, setshowRecruiterLogin] = useState(false);

     const [Role, setRole] = useState("user");
     // const [Role, setRole] = useState("recruiter");

     const [IsSearched, setIsSearched] = useState(false);

     const [Jobs, setJobs] = useState([]);

     const FetchJobsData = async () => {

          setJobs(jobsData);

     }

     useEffect(() => {

          FetchJobsData();

     }, [])


     const value = {
          searchFilter, setsearchFilter,
          IsSearched, setIsSearched,
          Jobs, setJobs,
          showRecruiterLogin, setshowRecruiterLogin,
          Role, setRole,
          DarkMode, setDarkMode
     }

     return (<AppContext.Provider value={value}>
          {props.children}
     </AppContext.Provider>)

}


