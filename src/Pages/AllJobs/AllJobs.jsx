import { useLoaderData } from "react-router-dom";
import JobCard from "./JobCard";


const AllJobs = () => {
    const jobs = useLoaderData()
    console.log(jobs);
    
    return (
        <div>
            <h2 className=" text-5xl text-center mb-5">All jobs are here</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default AllJobs;