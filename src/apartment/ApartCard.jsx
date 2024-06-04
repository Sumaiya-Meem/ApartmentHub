/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaSackDollar } from "react-icons/fa6";
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from "../Hooks/useAxiosSecure";
import './Apartment.css'
import { Link } from "react-router-dom";
const ApartCard = ({ apartment }) => {
  const { apartmentImage, apartmentNo, blockName, floorNo, rent,_id} = apartment;
  const axiosSecure = useAxiosSecure();
  const [isAgreed, setIsAgreed] = useState(false);

  const { data: agreementAcceptData = [] } = useQuery({
    queryKey: ['member'],
    queryFn: async () => {
        const res = await axiosSecure.get('/agreementAccept')
        return res.data;
    }
});

// console.log(agreementAcceptData);
useEffect(() => {
  const checkAgreementStatus = () => {
    const agreementExists = agreementAcceptData.some(agreement => agreement.floorNo === floorNo && agreement.apartmentNo === apartmentNo);
    setIsAgreed(agreementExists);
  };

  checkAgreementStatus();
}, [agreementAcceptData, floorNo, apartmentNo]);



  return (
    <div className="">
      <div className="w-[340px] mx-auto overflow-hidden shadow-lg rounded-md">
        <img
          className="w-full h-48 border-[1px] border-black rounded-md"
          src={apartmentImage}
          alt={`Apartment ${apartmentNo}`}
        />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{blockName}-block</div>
          <div className="font-semibold text-xl mb-2">
            Apartment-No: {apartmentNo}
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-700 text-base">Floor: <span className="font-bold">{floorNo}</span></p>
            </div>
            <div className="flex items-center">
              <FaSackDollar className="mr-2 text-red-700" />
              <span className="text-green-800 font-bold">${rent}</span>
              <span className="text-gray-700 ml-2">/ month</span>
            </div>
          </div>
        </div>

        <div className="px-6 py-3 flex  justify-between">
          <Link to={`apartmentDetails/${_id}`}>
          <button className="custom-btn btn-1">View Details</button>
          </Link>
          {
            isAgreed ? 
            
            <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
            Already rented
          </button>
             : 
              <button className="bg-blue-800  text-white font-bold py-2 px-4 rounded-md">
                Agreement
              </button>
            
          }
        </div>
      </div>
    </div>
  );
};

export default ApartCard;
