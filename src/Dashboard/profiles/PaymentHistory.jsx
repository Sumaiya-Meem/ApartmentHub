import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { ContextProvider } from "../../Context/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user, loading } = useContext(ContextProvider);
    const axiosSecure = useAxiosSecure();
    const [payment,setPayment] = useState([]); 

    const {data = []} = useQuery({
        queryKey: ['all-payment'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/all-payment/${user?.email}`)
            setPayment(res.data)
            return res.data;
        }
    });

    
    

    const handleSubmit = e => {
        e.preventDefault()
        const remaining = payment.filter(item=> item.month === e.target.month.value);
        setPayment(remaining);
        
       
    }

   

    return (
        <div className="w-[90%] mx-auto my-10">
            <div className=" w-[40%] mx-auto">
                <form className="flex justify-center my-5" onSubmit={handleSubmit}>
                    <input className="bg-gray-200 py-2 rounded-l-full px-5 w-full" name="month" placeholder="Month Name" type="text" />
                    <input className="bg-blue-800 py-2 px-2 rounded-r-full text-white" type="submit" value='Search' />
                </form>

            </div>

            <div className="bg-blue-200 rounded-lg overflow-auto shadow-lg">
                <table className="min-w-full ">
                    <thead className="">
                        <tr className="border-b">
                            <th className="py-4 px-6 text-center bg-blue-900 border-r-[1px] border-gray-500  text-sm font-semibold text-white uppercase tracking-wider">
                                email
                            </th>
                            <th className="py-4 px-6 text-center bg-blue-900 border-r-[1px] border-gray-500  text-sm font-semibold text-white uppercase tracking-wider">
                                rent
                            </th>
                            <th className="py-4 px-6 text-center bg-blue-900 border-r-[1px] border-gray-500  text-sm font-semibold text-white uppercase tracking-wider">
                                transactionId
                            </th>
                            <th className="py-4 px-6 text-center bg-blue-900 border-r-[1px] border-gray-500  text-sm font-semibold text-white uppercase tracking-wider">
                                month
                            </th>
                            <th className="py-4 px-6 text-center bg-blue-900 border-r-[1px] border-gray-500  text-sm font-semibold text-white uppercase tracking-wider">
                                date
                            </th>
                            <th className="py-4 px-6 text-center bg-blue-900 border-r-[1px] border-gray-500  text-sm font-semibold text-white uppercase tracking-wider">
                                apartmentNo
                            </th>
                            <th className="py-4 px-6 text-center bg-blue-900 border-r-[1px] border-gray-500  text-sm font-semibold text-white uppercase tracking-wider">
                                blockName
                            </th>
                            <th className="py-4 px-6 text-center bg-blue-900 border-r-[1px] border-gray-500  text-sm font-semibold text-white uppercase tracking-wider">
                                floor
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {payment?.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                                <td className="py-2 px-3 border-r text-center">{item?.email}</td>
                                <td className="py-2 px-3 border-r text-center">{item?.rent}</td>
                                <td className="py-2 px-3 border-r text-center">{item?.transactionId}</td>
                                <td className="py-2 px-3 border-r text-center">{item?.month}</td>
                                <td className="py-2 px-3 border-r text-center">{item?.date}</td>
                                <td className="py-2 px-3 border-r text-center">{item?.apartmentNo?.map(item => item).join(',')}</td>
                                <td className="py-2 px-3 border-r text-center">{item?.blockName?.map(item => item).join(',')}</td>
                                <td className="py-2 px-3 border-r text-center">{item?.floor?.map(item => item).join(',')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;