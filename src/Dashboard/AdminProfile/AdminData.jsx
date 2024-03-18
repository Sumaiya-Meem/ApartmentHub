import { useQuery } from "@tanstack/react-query";
import { FaHome } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { TbHomeOff } from "react-icons/tb";
import useAxiosSecure from "../../Hooks/useAxiosSecure"




const AdminData = () => {
    const axiosSecure = useAxiosSecure();

    const { data: adminData = {} } = useQuery({
        queryKey: ['admin_profile-data'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-profile-data')
            return res.data;
        }
    })

    
    const parRentedRoom = ( adminData.rentedRooms / adminData.allRooms) * 100;
    const availableRoom = parseFloat(parRentedRoom).toFixed(2)

    return (
        <div className="w-[90%] mx-auto mt-10 flex justify-center items-center flex-wrap gap-5">
            <div className="bg-blue-100 py-4 px-7 rounded-md  text-xl text-center text-black">
                    
                    <h1>Rooms</h1>
               
               <div className="flex items-center gap-2">
               <FaHome></FaHome>
               <p className="text-xl font-bold">{adminData?.allRooms}</p>
                </div> 
            </div>
            
            
            <div className="bg-blue-100 py-4 px-7 rounded-md  text-xl text-center text-black">
                    
                    <h1>Members</h1>
               
               <div className="flex items-center gap-2">
               <IoIosPeople></IoIosPeople>
               <p className="text-xl font-bold">{adminData?.members}</p>
                </div> 
            </div>

            <div className="bg-blue-100 py-4 px-7 rounded-md  text-xl text-center text-black ">
               
                    
                    <h1>Users</h1>
           
                <div className="flex items-center gap-2">
                <FaCircleUser></FaCircleUser>
               <p className="text-xl font-bold">{adminData?.users}</p>
                </div> 
            </div>

            <div className="bg-blue-100 py-4 px-7 rounded-md  text-xl text-center text-black ">               
                    <h1>Available</h1>
           
                <div className="flex items-center gap-2">
                <FaHome></FaHome>
                <p className="text-xl font-bold">{parseFloat(100 - availableRoom).toFixed(2)}%</p>
                </div> 
            </div>

            <div className="bg-blue-100 py-4 px-7 rounded-md  text-xl text-center text-black ">               
                    <h1>Unavailable</h1>
           
                <div className="flex items-center gap-2">
                <TbHomeOff></TbHomeOff>
                <p className="text-xl font-bold">{availableRoom}%</p>
                </div> 
            </div>

            
        </div>
    );
};

export default AdminData;