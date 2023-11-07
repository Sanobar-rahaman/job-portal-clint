import axios from "axios";
import {  useContext, useEffect, useState } from "react";

import swal from "sweetalert";
import { AuthContex } from "../../Provider/AuthProvider";


const ApplyJobs = () => {
    const{user} =useContext(AuthContex)
    const[apply,setApply] = useState([])

    // const url ='http://localhost:5001/applyjob'
    const url =`http://localhost:5001/applyjob?email${user?.email}`
    // console.log(url);

    useEffect(()=>{
        axios.get(url,{withCredentials:true})
        .then(res=>{
            setApply(res.data)
        })
    })

    const handleDelete = (id) =>{
        // console.log(id);
        fetch(`http://localhost:5001/deletejob/${id}`,{
            method:"DELETE",

        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                swal("Are you sure you want to delete this?", {
                    buttons: ["Oh noez!", "Aww yiss!"],
                  });
                //   const remaing = job.filter(de=>de._id !==id)
                //   setJob(remaing)
                const remaing = apply.filter(da=>da._id !==id)
                setApply(remaing)
            }
        })
        // cookie('token', token, {
        //     httpOnly: true,
        //     secure: process.env.NODE_ENV === 'production', 
        //     sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',

        // })

    }

    return (
        <div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    apply.map(jobs =>
                        <div key={jobs._id} className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                
                                <h2 className="card-title text-3xl">{jobs.job_title}</h2>
                                <p className=" text-2xl">Posted By : {jobs.post_name}</p>
                                <p className=" text-xl">Job Posting Date:{jobs.post_date}</p>
                                <p className=" text-xl">Application Deadline:{jobs.application}</p>
                                <p className="text-xl">Salary rangea: {jobs.salary}</p>
                                <p className=" text-xl">job Applicants Number: {jobs.a_number}</p>
                                <div className="card-actions justify-center">
                                    <button onClick={()=>handleDelete(jobs._id)} className="btn btn-primary">delete</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ApplyJobs;