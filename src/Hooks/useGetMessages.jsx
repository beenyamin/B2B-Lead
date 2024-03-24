import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../Api/auth";


const useGetMessages = () => {
      const axios = axiosSecure()
      const {data: getAllMessages = [] , isPending: loading , refetch} = useQuery ({
            queryKey: ['getMessages'],
            queryFn: async () => {
                  const res = await axios.get('/AllMessage')
                  return res.data ;
            }
      })
      return [getAllMessages , loading , refetch]
};

export default useGetMessages;



