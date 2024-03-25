import { useEffect, useState } from "react";
import axiosSecure from "../../../Api/auth";
import { MdDeleteForever } from "react-icons/md";
import { Helmet } from "react-helmet-async";


const AllUsers = () => {
      
      const [AllUsers, setAllUsers] = useState([])
      console.log(AllUsers);
      useEffect(() => {
            axiosSecure.get('/users', { withCredentials: true })
                  .then(response => setAllUsers(response.data))
                  .catch(error => console.error('Error fetching data😥', error));
      }, [])

      return (
            <div>
                  <Helmet>
                        <title> Dashboard | Users </title>
                  </Helmet>

                  <div className="mt-10 py-2 text-center">
                        <div className="indicator">
                              <span className="indicator-item badge badge-secondary ">{AllUsers.length}+</span>
                              <button className="text-2xl py-2 lg:px-10 px-4 bg-[#4c2393] shadow-xl rounded-md font-bold text-white "> Total Valid Users {AllUsers.length}  </button>
                        </div>
                  </div>

                  <div className="overflow-x-auto lg:px-20 my-10">
                        <table className="table">
                              {/* head */}
                              <thead>
                                    <tr className="text-lg font-normal">
                                          <th>Num</th>
                                          <th>Id</th>
                                          <th>Email</th>
                                          <th>Role</th>
                                          <th>Action</th>

                                          <th></th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {/* row 1 */}

                                    {
                                          AllUsers.map((user, index) => <tr key={user._id}>
                                                <th>
                                                      {index + 1}
                                                </th>
                                                <td>
                                                      <div className="flex items-center gap-3">
                                                           
                                                            <div>
                                                                  <div className="font-bold">{user?._id}</div>

                                                            </div>
                                                      </div>
                                                </td>
                                                <td>
                                                      {user?.email}
                                                      <br />
                                                </td>
                                                <td>{user?.role}</td>
                                                <th>
                                                <button className="btn  rounded-full"><MdDeleteForever size={30} className="text-pink-600" /></button>
                                                </th>
                                          </tr>



                                          )
                                    }


                              </tbody>
                              {/* foot */}


                        </table>
                  </div>


            </div>

      );
};

export default AllUsers;