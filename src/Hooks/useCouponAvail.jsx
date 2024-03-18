import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useCouponAvail = () => {
     const axiosSecure = useAxiosPublic()

    const {data: coupons = []} = useQuery({
        queryKey: ['coupons-available'],
        queryFn: async()=> {
               const res = await axiosSecure.get('/coupons-available')
               return res.data;
        }
  })

    return [coupons]
};

export default useCouponAvail;