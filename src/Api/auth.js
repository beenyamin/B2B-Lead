import axios from "axios";

const axiosSecure = axios.create({
    baseURL:'https://lead-forge-server.vercel.app',
    withCredentials:true,
})
export default axiosSecure ;