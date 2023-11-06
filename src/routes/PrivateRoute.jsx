/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,isLoading}=useContext(AuthContext)
    if(isLoading){
      return  <h2 className="text-center text-6xl mt-20">loading.....</h2>
    }
    if(user){
return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;