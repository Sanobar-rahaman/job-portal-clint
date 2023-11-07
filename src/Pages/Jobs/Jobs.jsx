import { useLoaderData } from "react-router-dom";
import JobCard from "./JobCard";


const Jobs = () => {
    const jobs = useLoaderData()
    
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {
                    jobs.map(job=><JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default Jobs;