import { useLoaderData } from "react-router-dom";
import JobCard from "./JobCard";


const AllJobs = () => {
    const jobs = useLoaderData()
    console.log(jobs);
    return (
        <div>
            <h2 className=" text-5xl text-center">All jobs are here</h2>
            <div>
                {
                    jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default AllJobs;