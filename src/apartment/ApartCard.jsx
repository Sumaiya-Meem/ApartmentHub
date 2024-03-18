import { useContext } from 'react';
import { FaSackDollar } from "react-icons/fa6";
import toast from 'react-hot-toast'
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { ContextProvider } from '../Context/AuthProvider';

// eslint-disable-next-line react/prop-types
const ApartCard = ({ apartment }) => {
    // eslint-disable-next-line react/prop-types
    const { apartmentImage, apartmentNo, blockName, floorNo, rent , id } = apartment;
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(ContextProvider); 
    
    
    

const handleAddApartment = () =>{
    
   
    if(!user?.email){
          return toast.error('You are not login user!')
    }
    
    const today = new Date()
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yy = today.getFullYear();
      
    const apartmentData = {
        floorNo,
        blockName,
        apartmentNo,
        date: `${dd}-${mm}-${yy}`,
        id,
        rent,
        status: 'pending',
        userName: user?.displayName,
        userEmail: user?.email, 
    }
   
    axiosSecure.post(`/apartment`, apartmentData)
    .then(res=> {
        
        if(res?.data?.acknowledged){
            toast.success('Request send successfully')
        }
        if(res?.data?.message){
            toast.error('already added')
        }
        console.log(res.data)
    })
    
}


    return (
        <div>
            <div className="max-w-sm mx-auto  overflow-hidden shadow-lg rounded-md">
                <img className="w-full h-48 object-cover" src={apartmentImage} alt={`Apartment ${apartmentNo}`} />

                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                        {blockName}-block
                    </div>
                    <div className="font-semibold text-xl mb-2">
                        Apartment-No: {apartmentNo}
                    </div>
                    <p className="text-gray-700 text-base">
                        Floor : {floorNo}
                    </p>
                    
                    <div className="flex items-center mt-2">
                        < FaSackDollar  className="mr-2 text-red-700" />
                        <span className="text-green-800 font-bold">${rent}</span>
                        <span className="text-gray-700 ml-2">/ month</span>
                    </div>
                </div>

                <div className="px-6 py-4">
                    <button onClick={ handleAddApartment } className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Agreement
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ApartCard;