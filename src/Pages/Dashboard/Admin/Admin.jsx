import { IoFlowerOutline } from "react-icons/io5";
import { BiMessageDots } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { useEffect, useState } from "react";
import axiosSecure from "../../../Api/auth";
import { Helmet } from "react-helmet-async";

const Admin = () => {
      const [AllMessages, setAllMessages] = useState([])
      const [AllUsers, setAllUsers] = useState([])
      console.log(AllUsers);
      useEffect(() => {
            axiosSecure.get('/AllMessage', { withCredentials: true })
                  .then(response => setAllMessages(response.data))
                  .catch(error => console.error('Error fetching data:', error));
      }, [])

      useEffect(() => {
            axiosSecure.get('/users', { withCredentials: true })
                  .then(response => setAllUsers(response.data))
                  .catch(error => console.error('Error fetching data:', error));
      }, [])



      return (
            <div>

                  <Helmet>
                        <title> Dashboard | AdminHome </title>
                  </Helmet>

                  {/* Your content goes here */}

                  <div className="flex my-10 justify-center items-center lg:gap-5 w-full mx-auto ">
                        <IoFlowerOutline size={30} className="text-secondary" />
                        <div className="lg:text-3xl text-lg  font-bold ">Welcome to the Dashboard </div>
                        <IoFlowerOutline size={30} className="text-secondary" />
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-52 gap-5 ">

                        <div className="stats shadow w-80 text-[#4c2393]">
                              <div className="stat">
                                    <div className="stat-figure ">
                                          <BiMessageDots size={40} />
                                    </div>
                                    <div className="stat-title">Total Messages</div>
                                    <div className="stat-value ">{AllMessages.length}+</div>
                                    <div className="stat-desc">21% more than last month</div>
                              </div>
                        </div>
                        <div className="stats shadow w-80 ">
                              <div className="stat">
                                    <div className="stat-figure text-secondary">
                                          <FaUsers size={40} />
                                    </div>
                                    <div className="stat-title">Total Users</div>
                                    <div className="stat-value text-secondary"> {AllUsers.length}+</div>
                                    <div className="stat-desc text-secondary">↘︎ From March 10 </div>
                              </div>
                        </div>
                        <div className="stats shadow w-80 ">
                              <div className="stat">
                                    <div className="stat-figure text-secondary">
                                          <div className="avatar online">
                                                <div className="w-16 rounded-full">
                                                      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                                </div>
                                          </div>
                                    </div>
                                    <div className="stat-value">86%</div>
                                    <div className="stat-title">Tasks done</div>
                                    <div className="stat-desc text-secondary">31 tasks remaining</div>
                              </div>
                        </div>


                  </div>




            </div>
      );
};

export default Admin;