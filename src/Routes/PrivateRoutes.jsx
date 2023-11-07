import { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AuthContex } from "../Provider/AuthProvider";


const PrivateRoutes = ({children}) => {
    const{user,loading} = useContext(AuthContex)
    if(loading){
        return <span className="loading loading-spinner loading-xs"></span>
        
    }
    if(user){
        return children
    }
    
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;