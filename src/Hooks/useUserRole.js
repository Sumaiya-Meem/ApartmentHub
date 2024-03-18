import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { ContextProvider } from "../Context/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useUserRole = () => {
    const {user, loading} = useContext(ContextProvider);
    const axiosSecure = useAxiosSecure();
    
    const {data: userRole} = useQuery({
        queryKey: [user?.email,'userRole'],
        enabled: !loading,
        queryFn: async () => {
             const res = await axiosSecure.get(`/user-role/${user?.email}`)
             return res.data;
        }
    })



    return {userRole}
};

export default useUserRole;