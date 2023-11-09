import { useLoaderData } from "react-router-dom";
import MyJobCard from "./MyJobCard";
import { useContext, useEffect, useState } from "react";
import { AuthContex } from "../../Provider/AuthProvider";


const MyJob = () => {
    const jobs = useLoaderData()
    
    const{user} = useContext(AuthContex)
    console.log(user);
    const[myJob,setMyJob]  = useState([])
    useEffect(()=>{
        const findJob = jobs.filter(job=>job?.email== user?.email )
        setMyJob(findJob)
    },[jobs,user?.email])
    console.log(myJob);
   
    return (
        <div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                   jobs && jobs.map(job=><MyJobCard key={jobs._id} job={job}></MyJobCard>)
                }
            </div>
        </div>
    );
};

export default MyJob;