import { useContext } from 'react';
import swal from 'sweetalert';
import { AuthContex } from '../../Provider/AuthProvider';



const AddJobs = () => {
    const{user} = useContext(AuthContex)
    const handleSubmit = e =>{
        e.preventDefault()
        const form  = e.target
        const post_name = form.post_name.value 
        const  job_title = form.job_title.value 
        const post_date = form.post_date.value
        const application = form.application.value
        const salary = form.salary.value
        const a_number = form.a_number.value
        console.log(post_name,job_title,post_date,application,salary,a_number);
        const newJobs = {post_name,job_title,post_date,application,salary,a_number}
         
        fetch('http://localhost:5001/alljobs',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newJobs)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                swal("Data SuccessFully Send to dataBase");
            }
            
        })



    }
    return (
        <div>
            <h2 className="text-5xl text-center"> Add New Jobs</h2>
            <form onSubmit={handleSubmit}>
                {/* frist row */}
            <div className="flex">
                    <div className="form-control md: w-1/2">
                        <label className="label">
                            <span className="label-text">Posted by</span>
                        </label>
                        <label className="input-group">
                            <span>Name</span>
                            <input type="text" name="post_name" defaultValue={user?.displayName} placeholder="Posted By" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-3">
                        <label className="label">
                            <span className="label-text">job-Title</span>
                        </label>
                        <label className="input-group">
                            <span>type</span>
                            <input type="text" name="job_title" placeholder="job-Title" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* second row */}
                <div className="flex">
                    <div className="form-control md: w-1/2">
                        <label className="label">
                            <span className="label-text">Job Posting Date</span>
                        </label>
                        <label className="input-group">
                            <span>Date</span>
                            <input type="date" name="post_date" placeholder="Job Posting Date" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-3">
                        <label className="label">
                            <span className="label-text">Application Deadline</span>
                        </label>
                        <label className="input-group">
                            <span>Date</span>
                            <input type="date" name="application" placeholder="Application Deadline" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* 3rd row */}
                <div className="flex">
                    <div className="form-control md: w-1/2">
                        <label className="label">
                            <span className="label-text"> Salary range</span>
                        </label>
                        <label className="input-group">
                            <span>Salary</span>
                            <input type="text" name="salary" placeholder=" Salary range" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-3">
                        <label className="label">
                            <span className="label-text">Job Applicants Number</span>
                        </label>
                        <label className="input-group">
                            <span>Date</span>
                            <input type="text" name="a_number" placeholder="Job Applicants Number" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input className=" btn btn-primary w-full mt-8" type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default AddJobs;