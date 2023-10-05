import { useContext } from "react";
import { AuthContext } from "../../Hooks/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext)
    console.log(user)
  if(user){
    return children;
  }
  return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoutes;