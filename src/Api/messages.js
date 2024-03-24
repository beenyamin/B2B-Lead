import axiosSecure from "./auth"

// getAllMessages from db
export const getAllMessages = async () => {
      const { data } = await axiosSecure('/AllMessage')
      return data;
}
