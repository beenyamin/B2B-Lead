import { useEffect, useState } from "react";
import axiosSecure from "../../../Api/auth";
import { BiSolidMessageDots } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";

const AllMessages = () => {

      const [AllMessages, setAllMessages] = useState([])

      useEffect(() => {
            axiosSecure.get('/AllMessage', { withCredentials: true })
                  .then(response => setAllMessages(response.data))
                  .catch(error => console.error('Error fetching data:', error));
      }, [])
      return (
            <div>
                  <div className="mt-10 py-2 text-center">
                        <div className="indicator">
                              <span className="indicator-item badge badge-secondary ">{AllMessages.length}+</span>
                              <button className="text-2xl py-2 lg:px-10 px-4 bg-[#4c2393] shadow-xl rounded-md font-bold text-white ">You Have {AllMessages.length} Messages  </button>
                        </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-20 mt-10 mb-20 lg:max-w-[1400px] mx-auto ">
                        {
                              AllMessages.map((message) => <div key={message._id} className="collapse collapse-plus shadow-lg bg-base-200 lg:px-10 ">
                                    <input type="radio" name="my-accordion-3" />
                                    <div className="collapse-title text-xl font-medium flex justify-between">
                                          <BiSolidMessageDots className="text-[#4c2393] mt-2 mr-3" />

                                          {/* Button */}
                                          Message From {message.name} <button className="btn btn-sm rounded-full"><MdDeleteForever size={20} className="text-pink-600" /></button>
                                    </div>
                                    <div className="collapse-content">
                                          <div className="overflow-hidden mt-4 flex  lg:flex-row flex-col gap-2 ">
                                                <div className="text-white font-medium py-2 bg-pink-500 w-[50%] rounded-md ">
                                                      <span className="font-semibold">Name : </span>{message.name}
                                                </div>
                                                <div className="text-white font-medium py-2 bg-pink-500 w-[50%] rounded-md ">
                                                      <span className="font-semibold">Email : </span>{message.email}
                                                </div>
                                          </div>

                                          <div className="overflow-hidden mt-4 flex  lg:flex-row flex-col gap-2 ">
                                                <div className="text-white font-medium py-2 bg-[#4c2393] w-[50%] rounded-md ">
                                                      <span className="font-semibold">Company : </span>{message.company}
                                                </div>
                                                <div className="text-white font-medium py-2 bg-[#4c2393] w-[50%] rounded-md ">
                                                      <span className="font-semibold"> Number : </span>{message.number}
                                                </div>
                                          </div>
                                          <div className="overflow-hidden mt-4 flex  lg:flex-row flex-col gap-2 ">

                                                <div className="text-white font-medium py-2 bg-[#2d9322] w-full rounded-md ">
                                                      <span className="font-semibold"> Interested in : </span>{message.interest}
                                                </div>
                                          </div>
                                          <div className="overflow-hidden mt-4 flex  lg:flex-row flex-col gap-2 ">

                                                <div className="text-black font-medium py-2 bg-slate-200 w-full rounded-md ">
                                                      <span className="font-semibold"> Messages : </span>{message.text}
                                                </div>
                                          </div>

                                    </div>
                              </div>


                              )
                        }



                  </div>







            </div>
      );
};

export default AllMessages;