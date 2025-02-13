import { useEffect, useState } from "react";
import { createContext } from "react";
import { jobsData } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

     const [DarkMode, setDarkMode] = useState(false);

     const [IsLoading, setIsLoading] = useState(false);

     const [searchFilter, setsearchFilter] = useState({
          title: "",
          location: ""
     });

     const [showRecruiterLogin, setshowRecruiterLogin] = useState(false);

     const [Role, setRole] = useState("");
     // const [Role, setRole] = useState("recruiter");

     const [IsSearched, setIsSearched] = useState(false);

     const [Jobs, setJobs] = useState([]);

     const FetchJobsData = async () => {

          setJobs(jobsData);

     }

     useEffect(() => {

          setIsLoading(true);

          FetchJobsData();

          if (localStorage.getItem("JobPortalAuthToken")) {
               setRole("recruiter");
          }else{
               setRole("user");
          }

          setTimeout(() => {
               setIsLoading(false);
          }, 2000);

     }, [])


     const value = {
          searchFilter, setsearchFilter,
          IsSearched, setIsSearched,
          Jobs, setJobs,
          showRecruiterLogin, setshowRecruiterLogin,
          Role, setRole,
          DarkMode, setDarkMode,
          IsLoading, setIsLoading
     }

     return (<AppContext.Provider value={value}>
          {props.children}
     </AppContext.Provider>)

}


