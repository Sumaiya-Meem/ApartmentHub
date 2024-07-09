import { useQuery } from "@tanstack/react-query";
import { TbHomeHand } from "react-icons/tb";
import { IoIosPeople } from "react-icons/io";
import { TbHomeCheck } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Chart from "react-apexcharts";
import { IoSearch } from "react-icons/io5"
import './AdminDashboard.css'
import { useContext, useEffect, useState } from "react";
import { ContextProvider } from "../../Context/AuthProvider";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(ContextProvider);
  const [apartments, setApartments] = useState([]);
  const [currentPage, setCurrentPage] = useState(0)
  const [result, setResult] = useState(10);
  const [perPage, setParPage] = useState(5);

  const numberOfPages = Math.ceil(result / perPage);

  const arrOFPages = [...Array(numberOfPages).keys()]

  useEffect(() => {
    axiosSecure.get(`/apartment?page=${currentPage}&size=${perPage}`)
        .then(res => {         
            setApartments(res.data)            
        })

}, [axiosSecure, currentPage, perPage])



useEffect(() => {
    fetch('http://localhost:5000/apartment-count')
        .then(res => res.json())
        .then(data => setResult(data.result))
}, [])

const handleSelectPage = (page) => {
    setParPage(parseInt(page.target.value))
    setCurrentPage(0)

}

const handlePrevPage = () => {
    if (currentPage > 0) {
        setCurrentPage(currentPage - 1)

    }
}
const handleNextPage = () => {
    if ((numberOfPages - 1) > currentPage) {
        setCurrentPage(currentPage + 1)

    }

}

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
       <div className="flex justify-between items-center px-2 py-3">
          <div className="relative">
          <input type="text"  className="bg-[#17171E] border-none rounded-3xl input-search w-[350px]" placeholder="Search"/>
         <IoSearch className="top-3 left-1 absolute text-[#a7a6a6] text-lg ml-1"></IoSearch>
          </div>
          <div className="lg:mt-2 flex items-center justify-evenly gap-3">
               <FaSun className="text-xl text-[#6a73fa]"></FaSun>
               <IoMdNotificationsOutline className="text-2xl text-[#6a73fa]"></IoMdNotificationsOutline>
            <img src={user?.photoURL} alt="" className="rounded-[50%] h-[40px] w-[40px]" />
            
          </div>
       </div>

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
                Apartments
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


          <div className=" bg-[#d64848] w-[230px] h-[140px] p-4  rounded-md mt-5  text-black flex items-center  gap-2">

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

          <div className="bg-[#673BB7] w-[230px] h-[140px] p-4  rounded-md mt-5  text-black flex items-center  gap-2">
          <div className="bg-black text-white p-5 rounded-[50%]">
                <TbHomeCheck className="text-3xl text-white"></TbHomeCheck>
              </div>
              <div className="">
              <h1 className="text-white font-[500]  text-xl font-serif">
              Available Apartment
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
       
        
        <div className="bg-[#272738]  mt-7 py-4 px-2">
        <div className="flex justify-between ">
            <h1 className="ml-3 text-xl text-[#d6d6d6] font-medium">All Apartments</h1>

            <Link to="/dashboard/addApartment">
            <button className="text-[#e6e6e6] bg-[#6a73fa] p-2 rounded-sm mr-4">+ Add new</button>
            </Link>
        </div>
        <div className="h-[1px] bg-[#464646] my-4"></div>
        {/* showing apartment data number */}
        <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
            <h1 className="text-[#aeaeae] ml-3">Show</h1>
            <select className="bg-[#272738] border-[#414141] text-white" value={perPage} onChange={handleSelectPage} id="">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>

                    </select>
        </div>
        <div className="mr-14">
            <p className="text-[#afafaf] font-[500]">Showing 1 to {perPage} of {result} entries</p>
        </div>
        </div>
        {/* apartment data table */}
        <div className="overflow-x-auto mt-5">
        <table className="min-w-full">
                    <thead>
                        <tr className="border-b border-[#858585]">
                            <th className="py-4 px-6 text-center  text-sm font-semibold text-white uppercase tracking-wider">
                                Image
                            </th>
                            <th className="py-4 px-6 text-center  text-sm font-semibold text-white uppercase tracking-wider">
                                Apartment No
                            </th>
                            <th className="py-4 px-6 text-center  text-sm font-semibold text-white uppercase tracking-wider">
                                Block No
                            </th>
                            <th className="py-4 px-6 text-center   text-sm font-semibold text-white uppercase tracking-wider">
                                Floor No
                            </th>
                            <th className="py-4 px-6 text-center   text-sm font-semibold text-white uppercase tracking-wider">
                                Rent
                            </th>
                            <th className="py-4 px-6 text-center   text-sm font-semibold text-white uppercase tracking-wider">
                            Action
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        
                    {apartments.map((item, index) => (
                            <tr key={index} className="border-b border-[#6e6e6e] text-white">
                                <td className="py-2 px-3  text-center">
                                    <img src={item.apartmentImage} alt=""  className="w-[50px] h-[50px] rounded-sm"/>
                                </td>
                                <td className="py-2 px-3  text-center">{item.apartmentNo}</td>
                                <td className="py-2 px-3 text-center">{item.blockName}</td>
                                <td className="py-2 px-3  text-center">{item.floorNo}</td>  
                                <td className="py-2 px-3  text-center">{item.rent}</td> 
                                <td className="py-2 px-3  text-center">
                                    <div className="flex items-center justify-center gap-2">
                                        <div><MdEdit className="bg-[#6a73fa] w-[23px] h-[22px] p-[2px]  rounded-[4px]"></MdEdit></div>
                                    <MdDelete className="bg-[#d64848] w-[23px] h-[22px] p-[2px] rounded-[4px]"></MdDelete></div>
                                    </td> 
                            </tr>
                        ))}
                     
                    </tbody>
        </table>
                
                <div className='flex justify-end mr-10 mt-7'>

                    <button className="btn-circle " onClick={handlePrevPage}>
                        <p className="text-white bg-[#9999994d] py-1 px-[4px] rounded-md">Previous</p>
                    </button>

                    {
                        arrOFPages.map(page => <button className={`text-[#6a73fa] mx-1 bg-[#3b3b50] px-2 font-medium rounded-md ${page === currentPage ? ' bg-[#6a73fa] text-white' : ''}`}
                            onClick={() => setCurrentPage(page)}
                            key={page}>{page}</button>)
                    }
                    
                    <button className="mr-3" onClick={handleNextPage}><p className="text-white bg-[#9999994d] py-1 px-[5px]  rounded-md">Next</p></button>
                </div>
    </div>
      </div>


      </div>
    </div>
  );
};

export default AdminDashboard;
