import axiosSecure from "./auth"


// Save user in db
export const saveUser = async user => {
    const currentUser ={
        email:user?.email,
        role:'user',
        status:'Verified',
    }

 const { data } = await axiosSecure.put(`/Users/${user?.email}`, currentUser)
 return data

}

// token from server

export const getToken = async email => {
    const { data } = await axiosSecure.post('/jwt', email)
    console.log('token from server ..!', data);
    return data

}
export const RemoveToken = async () => {
    const { data } = await axiosSecure.get('/logout')
    return data
}


// Get user role
export const getRole = async email => {
  const { data } = await axiosSecure(`/user/${email}`)
  return data.role
}