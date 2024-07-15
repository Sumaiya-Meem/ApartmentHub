import { useForm } from "react-hook-form"
import { Button } from "flowbite-react";
import toast from 'react-hot-toast';
import useAxiosSecure from "../../Hooks/useAxiosSecure"
import useCoupons from "../../Hooks/useCoupons"

const ManageCoupon = () => {
   const {
        register,
        handleSubmit,
    } = useForm()
   const axiosSecure = useAxiosSecure(); 
   const [coupons, refetch] = useCoupons();
   

    const onSubmit = (data) => {
        
        const couponData = {
             couponCode: data.couponCode,
             discount: data.discount,
             description: data.description,
             available: 'yes',
        };
      axiosSecure.post('/coupon-add', { couponData })
      .then(res=> {
           if(res.data){
            toast.success('coupon added')
            refetch()
           }
           
      })         
        
    };

    const handleDisable = id => {

        axiosSecure.patch(`/coupon/${id}`)
        .then(res=> {
              if(res.data.modifiedCount > 0){

                  toast.success('coupon disabled!!')
                  refetch();
              }
              
        })
    }

    const closeModal = () => {
        document.getElementById('my_modal_5').close();
    };

    return (
        <div className='mt-12'>
            <div className='w-[80%] mx-auto  my-10'>
                <div className="bg-white rounded-lg overflow-auto">
                    <div>
                        <div className="flex justify-center mb-5">
                            <button className="btn text-center text-white rounded font-serif bg-[#646df0] p-2 mt-1" 
                            onClick={() => document.getElementById('my_modal_5').showModal()}>+Add</button >
                        </div>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle w-[600px] rounded-md shadow-md">
                            <div className="modal-box">

                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <input placeholder="coupon code" className="w-[90%] mx-auto p-2 block border rounded bg-gray-200 my-5"  {...register("couponCode")} />

                                    <input 
                                           type='number'
                                           placeholder="discount percentage" 
                                           className="w-[90%] mx-auto p-2 block border rounded bg-gray-200 my-5" {...register ("discount")} />

                                    <input placeholder="coupon description" className="w-[90%] mx-auto p-2 block border rounded bg-gray-200 my-5" {...register("description")} />

                                    <input className="bg-blue-800 ml-2 py-1 px-3 rounded-md text-white font-semibold" type="submit" />
                                </form>

                                <div className="modal-action">
                                    <form method="dialog">
                                        <Button onClick={closeModal} className="btn btn-sm m-2" color="failure">Close</Button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                    <table className="min-w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="py-4 px-6 bg-blue-900 border-r-[1px] border-gray-500 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Coupon code
                                </th>
                                <th className="py-4 px-6 bg-blue-900 border-r-[1px] border-gray-500 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                    Discount percentage
                                </th>
                                <th className="py-4 px-6 bg-blue-900 border-r-[1px] border-gray-500 text-left text-xs font-semibold text-white  uppercase tracking-wider">
                                    Coupon description
                                </th>
                                <th className="py-4 px-6 bg-blue-900  border-gray-500 text-left text-xs font-semibold text-white  uppercase tracking-wider">
                                    Make Unavailable
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {coupons.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                                <td className="py-2 px-3 border-r text-center">{item.couponCode}</td>
                                <td className="py-2 px-3 border-r text-center">{item.discount}%</td>
                                <td className="py-2 px-3 border-r text-center">{(item.description)}</td> 
                                <td className="py-2 px-3 border-r text-center">{
                                    item.available === 'yes'?
                                    <Button onClick={()=>handleDisable(item._id)} color="failure" className="btn btn-sm btn-warning">Disable</Button>:
                                    <p className="text-red-600 font-semibold">Disabled</p>
                                }</td> 
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageCoupon;