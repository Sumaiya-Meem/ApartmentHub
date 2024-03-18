import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextProvider } from "../Context/AuthProvider";


// eslint-disable-next-line react/prop-types
const UserPrivate = ({children}) => {
    
     const {user,loading} = useContext(ContextProvider);
    
     const navigate = useNavigate()


     if(loading){
        return <div>Loading...</div>
     }

     if(user){
        return children
     }
     
     return navigate('/');
    
};

export default UserPrivate;