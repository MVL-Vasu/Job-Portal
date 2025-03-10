import { useEffect, useState } from "react";
import { createContext } from "react";
import { jobsData } from "../assets/assets";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react"

export const AppContext = createContext();

export const AppContextProvider = (props) => {

     const { getToken } = useAuth();

     const [userData, setuserData] = useState("");

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

          // setJobs(jobsData);

          fetch("http://localhost:3001/api/job/get-all-jobs", {
               method: "POST"
          })
               .then((res) => res.json())
               .then((data) => setJobs(data.jobs))

          if (localStorage.getItem("JobPortalAuthToken")) {
               setRole("recruiter");
          } else {
               setRole("user");
          }

     }

     const FetchUserData = async () => {

          try {

               const token = await getToken();
               if (token) {

                    const response = await axios.post(
                         "http://localhost:3001/api/users/userData",
                         { data: "example data" },
                         {
                              headers: {
                                   Authorization: `Bearer ${token}`
                              }
                         }
                    )

                    if (response.data.success) {
                         setuserData(response.data.userData)
                    }
               }


          } catch (err) {

               console.error(err);
               toast.error("Error")

          }

     };


     useEffect(() => {

          setIsLoading(true);

          FetchJobsData();

          FetchUserData();

          // setTimeout(() => {
          // setIsLoading(false);
          // }, 2000);

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


