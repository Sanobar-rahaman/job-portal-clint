import { useLoaderData } from "react-router-dom";
import JobCard from "./JobCard";
import { useState } from "react";


const AllJobs = () => {
    const jobs = useLoaderData()
    console.log(jobs);
    const[onStitJob,setOnSiteJob] = useState(jobs)

    const handleOnSiteJob =() =>{
         const siteJob =  onStitJob.filter(job=>job.job_title !==onStitJob.job_title)
         setOnSiteJob(siteJob)
    }

    
    return (
        <div>
            <div className=" flex justify-between">
                <select className=" mb-6 ml-10 text-3xl font-bold" name="" id="">
                    <option onClick={handleOnSiteJob} value="">On-Site-Job</option>
                    <option value="">Remote-Job</option>
                    <option value="">Hybrid</option>
                    <option value="">Part-Time</option>
                </select>
                <div className=" flex gap-4">
                    <input className=" p-2 bg-slate-500" type="text" />
                    <button className=" btn btn-primary p-3">search</button>
                </div>
            </div>
            <h2 className=" text-5xl text-center mb-5">All jobs are here</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    onStitJob.map(job=><JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default AllJobs;