import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextProvider } from "../auth/AuthProvider";
import useUserRole from "../hooks/useUserRole";

// eslint-disable-next-line react/prop-types
const AdminPrivate = ({children}) => {
    const {userRole} = useUserRole();
    const {user,loading} = useContext(ContextProvider);
     const role = userRole?.role;
     const navigate = useNavigate()


     if(loading){
        return <div>Loading...</div>
     }

     if(user && role === 'admin'){
        return children
     }
     
     return navigate('/');
};

export default AdminPrivate;