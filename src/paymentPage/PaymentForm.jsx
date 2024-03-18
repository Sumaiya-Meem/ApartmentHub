import { IoIosSend } from 'react-icons/io';
import { useForm, Controller } from 'react-hook-form'
import { ContextProvider } from '../../auth/AuthProvider';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentForm = () => {
    const { handleSubmit, control } = useForm();
    const { user } = useContext(ContextProvider);
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();


    const { data: memberData = [] } = useQuery({
        queryKey: [user?.email, 'member'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/member-data/${user?.email}`)
            return res.data;
        }
    });





    const onSubmit = (data) => {

        navigate(`/dashboard/payment/${data?.month}`);

    };



    return (
        <div>
            <div className="min-h-screen flex items-center justify-center">
                <form
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input
                            type="text"
                            readOnly
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={user?.email}
                        />
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Floor:</label>
                            <input
                                type="text"
                                readOnly
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={memberData.map(item => item?.floorNo)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Block Name:</label>
                            <input
                                type="text"
                                readOnly
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={memberData.map(item => item?.blockName)}
                            />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Apartment No:</label>
                            <input
                                type="text"
                                value={memberData.map(item => item?.apartmentNo)}
                                readOnly
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Rent:</label>
                            <input
                                type="text"
                                name='rent'
                                readOnly
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={memberData.reduce((current, item) => item?.rent + current, 0)}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Month:</label>
                        <Controller
                            name="month"
                            rules={{ required: 'Please select a month' }}
                            control={control}
                            render={({ field , fieldState}) => (
                                <div>
                                    <select
                                        {...field}
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    >
                                        <option value="january">January</option>
                                        <option value="february">February</option>
                                        <option value="march">March</option>
                                        <option value="april">April</option>
                                        <option value="may">May</option>
                                        <option value="june">June</option>
                                        <option value="july">July</option>
                                        <option value="august">August</option>
                                        <option value="september">September</option>
                                        <option value="october">October</option>
                                        <option value="november">November</option>
                                        <option value="december">December</option>

                                    </select>
                                    {fieldState?.error && (
                                        <p className="text-red-500 text-xs italic">{fieldState.error.message}</p>
                                    )}
                                </div>

                            )}

                        />

                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-between"
                        >
                            <IoIosSend className="mr-2" />
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PaymentForm;