import { useQuery } from "@tanstack/react-query";
import { TbHomeHand } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import { TbHomeCheck } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Chart from "react-apexcharts";

const AdminDashboard = () => {
  const axiosSecure = useAxiosSecure();

  const { data: adminData = {} } = useQuery({
    queryKey: ["admin_profile-data"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-profile-data");
      return res.data;
    },
  });

  const allRooms = adminData?.allRooms || 0;
  const parRentedRoom = parseInt(adminData?.rentedRooms);
  const availableRoom = allRooms - parRentedRoom;

  return (
    <div className="w-full">
      <div className="bg-[#272738]">
        <input type="text" />
      </div>
      <div className="bg-[#17171E] lg:p-4">
        <h1 className="text-[#c9c8c8] text-[24px] font-medium">Dashboard</h1>
        <p className="text-[#6a7a97]">
          Home / <span className="text-[#6a7a97] font-medium">Dashboard</span>{" "}
        </p>

        <div className="flex flex-col md:flex-row items-center ">
        <div className="flex-1 grid grid-cols-1  md:grid-cols-2 gap-4">
          <div className="bg-[#6a73fa] w-[230px] h-[140px] p-4  rounded-md mt-5  text-black flex items-center  gap-2">
            <div className="bg-black text-white p-5 rounded-[50%]">
              <TbHomeHand className="text-3xl text-white"></TbHomeHand>
            </div>
            <div className="">
              <h1 className="text-white font-[500]  text-xl font-serif">
                Flats
              </h1>
              <p className="text-[22px] font-bold text-white">
                {adminData?.allRooms}
              </p>
            </div>
          </div>

          <div className="bg-[#FFAA16] w-[230px] h-[140px] p-4  rounded-md mt-5  text-black flex items-center  gap-2">
          <div className="bg-black text-white p-5 rounded-[50%]">
                <IoIosPeople className="text-3xl text-white"></IoIosPeople>
              </div>
              <div className="">
              <h1 className="text-white font-[500]  text-xl font-serif">
              Members
              </h1>
              <p className="text-[22px] font-bold text-white">
              {adminData?.members}
              </p>
            </div>
          </div>


          <div className="bg-[#673BB7] w-[230px] h-[140px] p-4  rounded-md mt-5  text-black flex items-center  gap-2">

          <div className="bg-black text-white p-5 rounded-[50%]">
                <FaUserFriends className="text-3xl text-white "></FaUserFriends>
              </div>
              <div className="">
              <h1 className="text-white font-[500]  text-xl font-serif">
              Users
              </h1>
              <p className="text-[22px] font-bold text-white">
              {adminData?.users}
              </p>
            </div>
          </div>

          <div className="bg-[#d64848] w-[230px] h-[140px] p-4  rounded-md mt-5  text-black flex items-center  gap-2">
          <div className="bg-black text-white p-5 rounded-[50%]">
                <TbHomeCheck className="text-3xl text-white"></TbHomeCheck>
              </div>
              <div className="">
              <h1 className="text-white font-[500]  text-xl font-serif">
              Available Flats
              </h1>
              <p className="text-[22px] font-bold text-white">
              {availableRoom}
              </p>
            </div> 

          </div>
        </div>
          <div className="bg-[#272738] h-[320px] flex-1 mt-4">
            <Chart
              type="donut"
              width={400}
              height={350}
              series={[
                parseFloat(adminData?.allRooms),
                parseFloat(adminData?.users),
                parseFloat(adminData?.members),
                parseFloat(availableRoom),
                parseFloat(100 - availableRoom),
              ]}
              options={{
                labels: [
                  "All Flat",
                  "Users",
                  "Members",
                  "Available Flat",
                  "Unavailable",
                ],
                tooltip: {
                  y: {
                    formatter: (val) => {
                      return `${val}%`;
                    },
                  },
                },
                title: {
                  text: "Website Traffic",
                  style:{
                    color:"#fff",
                  }
                },
                colors: ["#009f4d", "#f48924", "#0085ad", "#004b79", "#fd5c63"],
                legend:{
                    labels:{
                        colors: ["#f5f5f5", "#f5f5f5", "#f5f5f5", "#f5f5f5", "#f5f5f5"],
                    }
                }
              }}
            />
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default AdminDashboard;
