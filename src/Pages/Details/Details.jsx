import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";
//import swal from '@sweetalert/with-react'
import { AuthContex } from "../../Provider/AuthProvider";



const Details = () => {
    const {user} =useContext(AuthContex)
    const details = useLoaderData()
    const { a_number, application, job_title, post_date, post_name, salary } = details
    console.log(details);

    const handleAddtoApply =()=>{
        const newApply = { a_number, application, job_title, post_date, post_name, salary } 
        console.log(newApply);
        fetch('http://localhost:5001/applyjob',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newApply)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            swal("Good job!", `${user.email}`, "success");
            
              

        })
    }

    return (
        <div>
            <div className=" mx-auto">
                <h2 className=" text-4xl text-center"> Company Name</h2>
                <img className=" object-cover mb-6 mx-auto" src={details?.photo} alt="" />
            </div>
            <div className=" flex justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-3xl">{job_title}</h2>
                <p className=" text-2xl">Posted By : {post_name}</p>
                <p className=" text-xl">Job Posting Date:{post_date}</p>
                <p className=" text-xl">Application Deadline:{application}</p>
                <p className="text-xl">Salary range: {salary}</p>
                <p className=" text-xl">job Applicants Number: {a_number}</p>
                <div className="card-actions justify-center">
                    <button onClick={handleAddtoApply} className="btn btn-primary">Apply now</button>
                </div>
            </div>
        </div>
            </div>
        </div>
    );
};

export default Details;