import {useQuery} from '@tanstack/react-query'
import useAxiosPublic from './useAxiosPublic';

const useApartment = () => {
                 
      const axiosPublic = useAxiosPublic();

      const {data: apartment = [], refetch} = useQuery({
          queryKey: ['apartment'],
          queryFn: async () =>{
                const res = await axiosPublic.get('/apartment')
                return res.data;
          }
      })
    

    return [apartment,refetch];
};

export default useApartment;