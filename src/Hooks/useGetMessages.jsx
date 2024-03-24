import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import axiosSecure from "../Api/auth";


const useGetMessages = () => {
        //tan stack Query
        const {user} = useAuth ();

        const  { refetch, data: message = [] } = useQuery ({       
            queryKey: ['message' , user?.email],
            queryFn: async () => {
                const res = await axiosSecure.get(`/AllMessage?email=${user.email}`)
                return res.data;

            }
            
        })

        return [message, refetch]
};

export default useGetMessages;



