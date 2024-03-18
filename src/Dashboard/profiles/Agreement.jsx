import { useQuery } from "@tanstack/react-query";
import { FaCheckCircle } from "react-icons/fa";
import toast from 'react-hot-toast';
import useAxiosSecure from "../../Hooks/useAxiosSecure"

const Agreement = () => {
    const axiosSecure = useAxiosSecure();

    const { data: agreementData = [], refetch } = useQuery({
        queryKey: ['cart-apartment'],
        queryFn: async () => {
            const res = await axiosSecure.get('/cart-apartment')
            return res.data;
        }
    });

    const handleDelete = id => {

        axiosSecure.patch(`/update-reject/${id}`)
            .then(res => {
                console.log(res.data);
                refetch();
            })
    };


    const handleConfirm = roomData => {
        const today = new Date()
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yy = today.getFullYear();
        const acceptDate = `${dd}-${mm}-${yy}`;
        roomData.acceptDate = acceptDate;
        
        axiosSecure.post('/update-confirm', { roomData })
            .then(res => {
                if (res.data) {
                    toast.success('confirm accepted member')
                    refetch()
                    console.log(res.data)
                }
            })
    }


    return (
        <div className='w-[90%] mx-auto my-10'>
            <div className="bg-white rounded-lg overflow-auto shadow-lg">
                <table className="min-w-full">
                    <thead>
                        <tr className="border-b">

                            <th className="py-4 px-6 bg-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                User Name
                            </th>
                            <th className="py-4 px-6 bg-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                User Email
                            </th>
                            <th className="py-4 px-6 bg-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Floor No
                            </th>
                            <th className="py-4 px-6 bg-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Block Name
                            </th>
                            <th className="py-4 px-6 bg-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Room No
                            </th>
                            <th className="py-4 px-6 bg-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Rent
                            </th>
                            <th className="py-4 px-6 bg-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Agreement Request Date
                            </th>
                            <th className="py-4 px-6 bg-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                Accept/Reject
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {agreementData.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                                <td className="py-1 border-r text-center px-1">{index + 1}. {item.userName}</td>
                                <td className="py-1 border-r text-center px-1">{item.userEmail}</td>
                                <td className="py-1 border-r text-center px-1">{item.floorNo}</td>
                                <td className="py-1 border-r text-center px-1">{item.blockName}</td>
                                <td className="py-1 border-r text-center px-1">{item.apartmentNo}</td>
                                <td className="py-1 border-r text-center px-1">{item.rent}</td>
                                <td className="py-1 border-r text-center px-1">{item.date}</td>
                                {
                                    item.status === 'pending' ?
                                        <>
                                            <td className="py-1 border-r flex gap-2 text-center px-1">
                                                <button onClick={() => handleConfirm(item)} className="bg-green-500 text-white px-2 py-1 rounded-full">
                                                    Accept
                                                </button>
                                                <button onClick={() => handleDelete(item._id)} className="bg-red-500 text-white px-2 py-1 rounded-full">
                                                    Reject
                                                </button>
                                            </td>
                                        </> : <td className="flex justify-center items-center gap-1 pt-2 ">Checked <FaCheckCircle></FaCheckCircle></td>
                                }


                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Agreement;