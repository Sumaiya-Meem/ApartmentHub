import { useQuery } from "@tanstack/react-query";
import toast from 'react-hot-toast';
import useAxiosSecure from "../../Hooks/useAxiosSecure"


const ManegeMember = () => {
     const axiosSecure = useAxiosSecure();
     
     const {data: members = [], refetch} = useQuery({
        queryKey: ['all-member'],
        queryFn: async () => {
               const res = await axiosSecure.get('/all-member')
               return res.data;
        }
     })

     const handleRemoveMember = id => {
          axiosSecure.patch(`/remove-member/${id}`)
          .then(res=> {
                 if(res.data.acknowledged){
                    toast.success('member remove successfully')
                    refetch()
                 }
                 
          })  
     }
     

    return (
        <div className="w-[90%] mx-auto my-10">
            <div className="bg-white rounded-lg overflow-auto shadow-lg">
                <table className="min-w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="py-4 px-6 text-center bg-blue-900 border-r-[1px] border-gray-500  text-xs font-semibold text-white uppercase tracking-wider">
                            Member name
                            </th>
                            <th className="py-4 px-6 text-center bg-blue-900 border-r-[1px] border-gray-500  text-xs font-semibold text-white uppercase tracking-wider">
                            Member Email
                            </th>
                            <th className="py-4 px-6 text-center bg-blue-900  border-gray-500  text-xs font-semibold text-white uppercase tracking-wider">
                            Remove
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {members?.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                                <td className="py-2 px-3 border-r text-center">{item?.name}</td>
                                <td className="py-2 px-3 border-r text-center">{item?.email}</td>
                                <td className="py-2 px-3 border-r text-center"><button onClick={()=>handleRemoveMember(item._id)} className="btn btn-sm btn-warning">Remove</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManegeMember;