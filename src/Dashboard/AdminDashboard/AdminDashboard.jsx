import { useQuery } from "@tanstack/react-query";
import { TbHomeHand } from "react-icons/tb";
import { FaCircleUser } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { TbHomeOff } from "react-icons/tb";
import { TbHomeCheck } from "react-icons/tb";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const AdminDashboard = () => {
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
        <div className="w-full bg-blue-100 gap-5 p-5">
            <h1 className="text-[#012970] text-[24px] font-medium">Dashboard</h1>
            <p className="text-[#899bbd]">Home / <span className="text-[#51678f] font-medium">Dashboard</span> </p>

            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white w-[286px] h-[158px] py-4 px-7 rounded-md mt-5  text-black">
                    
                    <h1 className="text-[#012970] font-[500] mb-3 text-xl font-serif">Rooms</h1>
               
               <div className="flex items-center gap-2">
               <div className="bg-blue-100 p-5 rounded-[50%]"><TbHomeHand className="text-3xl text-blue-500"></TbHomeHand></div>
               <p className="text-[28px] font-bold text-[#012970] ">{adminData?.allRooms}</p>
                </div> 
            </div>
            
            <div className="bg-white w-[286px] h-[158px] py-4 px-7 rounded-md mt-5  text-black">
                    
                    <h1 className="text-[#012970] font-[500] mb-3 text-xl font-serif">Members</h1>
               
               <div className="flex items-center gap-2">
               <div className="bg-blue-100 p-5 rounded-[50%]"><IoIosPeople className="text-3xl text-blue-500"></IoIosPeople></div>
               <p className="text-[28px] font-bold text-[#012970] ">{adminData?.members}</p>
                </div> 
            </div>

            <div className="bg-white w-[286px] h-[158px] py-4 px-7 rounded-md mt-5  text-black">
                    
                    <h1 className="text-[#012970] font-[500] mb-3 text-xl font-serif">Users</h1>
               
               <div className="flex items-center gap-2">
               <div className="bg-blue-100 p-5 rounded-[50%]"><FaCircleUser className="text-3xl text-blue-500"></FaCircleUser></div>
               <p className="text-[28px] font-bold text-[#012970] ">{adminData?.users}</p>
                </div> 
            </div>

            <div className="bg-white w-[286px] h-[158px] py-4 px-7 rounded-md mt-5  text-black">
                    
                    <h1 className="text-[#012970] font-[500] mb-3 text-xl font-serif">Available</h1>
               
               <div className="flex items-center gap-2">
               <div className="bg-blue-100 p-5 rounded-[50%]"><TbHomeCheck className="text-3xl text-blue-500"></TbHomeCheck></div>
               <p className="text-[28px] font-bold text-[#012970] ">{parseFloat(100 - availableRoom).toFixed(2)}%</p>
                </div> 
            </div>

            <div className="bg-white w-[286px] h-[158px] py-4 px-7 rounded-md mt-5  text-black">
                    
                    <h1 className="text-[#012970] font-[500] mb-3 text-xl font-serif">Unavailable</h1>
               
               <div className="flex items-center gap-2">
               <div className="bg-blue-100 p-5 rounded-[50%]"><TbHomeOff className="text-3xl text-blue-500"></TbHomeOff></div>
               <p className="text-[28px] font-bold text-[#012970] ">{availableRoom}%</p>
                </div> 
            </div>

            </div>

            
        </div>
    );
};

export default AdminDashboard;