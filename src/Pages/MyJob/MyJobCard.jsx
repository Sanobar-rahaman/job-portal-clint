

const MyJobCard = ({job}) => {
    const {_id,a_number,application,job_title,post_date,post_name,salary} =job

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                {/* <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                <div className="card-body">
                    <h2 className="card-title text-3xl">{job_title}</h2>
                    <p className=" text-2xl">Posted By : {post_name}</p>
                    <p className=" text-xl">Job Posting Date:{post_date}</p>
                    <p className=" text-xl">Application Deadline:{application}</p>
                    <p className="text-xl">Salary rangea: {salary}</p>
                    <p className=" text-xl">job Applicants Number: {a_number}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default MyJobCard;