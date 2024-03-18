import { useContext } from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import ProfileData from './ProfileData';
import {ContextProvider} from "../../Context/AuthProvider"



const MemberProfile = () => {
    const { user } = useContext(ContextProvider);
    const axiosSecure = useAxiosSecure();

    const {data: memberData = []} = useQuery({
        queryKey: [user?.email,'member'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/member-data/${user?.email}`)
            return res.data;
        }
    })

    

    return (
        <div>
            <div className='mt-12 md:mx-0 mx-3'>
                <div className="max-w-md  mx-auto bg-white rounded-md overflow-hidden shadow-lg">
                    <div className="relative">
                        <div className="bg-blue-900 ">
                            <img className='relative mx-auto top-12 border-4 border-white rounded-full w-32 h-32' src={user?.photoURL} alt="" />
                        </div>
                    </div>
                    <div className="pt-12 pb-5 px-5">
                        <h2 className="text-2xl font-bold mb-2">{user?.displayName}</h2>
                        <p className="text-gray-600 mb-4"></p>
                        <div className="flex items-center mb-4">
                            <FaEnvelope className="text-gray-500 mr-2" />
                            <p className="text-gray-700">{user?.email}</p>
                        </div>
                        <div className="flex items-center">
                            <FaMapMarkerAlt className="text-gray-500 mr-2" />
                            <p className="text-gray-700">Barishal,Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className='w-[80%] mx-auto my-10'>
                    <ProfileData memberData={memberData}></ProfileData>
                </div>
            </div>
        </div>
    );
};

export default MemberProfile;