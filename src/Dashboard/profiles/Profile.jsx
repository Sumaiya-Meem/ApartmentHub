import { useContext } from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { MdAdminPanelSettings } from "react-icons/md";
import { ContextProvider } from '../../Context/AuthProvider';
import useUserRole from '../../Hooks/useUserRole';


const Profile = () => {
    const { user } = useContext(ContextProvider);
    const { userRole } = useUserRole();
    const role = userRole?.role

    return (
        <div className='mt-12 md:mx-0 mx-3'>
            <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg">
                <div className="relative">
                    <div className="bg-blue-950 ">
                        <img className='relative mx-auto top-12 border-4 border-white rounded-full w-32 h-32' src={user?.photoURL} alt="" />
                    </div>
                </div>
                <div className="pt-12 pb-5 px-5">
                    <h2 className="text-2xl font-bold mb-2">{user?.displayName}</h2>
                    <div className="flex items-center mb-4">
                            <MdAdminPanelSettings className="text-gray-500 mr-2 text-xl" />
                            <p className="text-gray-700 uppercase font-bold">{role}</p>
                        </div>
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
            <div className="bg-white rounded-lg overflow-auto shadow-lg">
                <table className="min-w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="py-4 px-6 bg-blue-900 border-r-[1px] border-gray-500  text-xs font-semibold text-white uppercase tracking-wider">
                                Agreement Accept Date
                            </th>
                            <th className="py-4 px-6 bg-blue-900 border-r-[1px] border-gray-500  text-xs font-semibold text-white uppercase tracking-wider">
                                Building
                            </th>
                            <th className="py-4 px-6 bg-blue-900 border-r-[1px] border-gray-500  text-xs font-semibold text-white uppercase tracking-wider">
                                Floor
                            </th>
                            <th className="py-4 px-6 bg-blue-900 border-r-[1px] border-gray-500  text-xs font-semibold text-white uppercase tracking-wider">
                                Room No
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>     
                                <td className="py-2 px-6">none</td>
                                <td className="py-2 px-6">none</td>
                                <td className="py-2 px-6">none</td>
                                <td className="py-2 px-6">none</td>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
};

export default Profile;