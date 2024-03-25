import { useEffect, useState } from "react";
import axiosSecure from "../../../Api/auth";
import { BiSolidMessageDots } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import useGetMessages from "../../../Hooks/useGetMessages";
import { Helmet } from "react-helmet-async";

const AllMessages = () => {
      const [message, refetch] = useGetMessages();
      const [AllMessages, setAllMessages] = useState([]);
      const [messages, setMessages] = useState([]);

      useEffect(() => {
            axiosSecure.get('/AllMessage', { withCredentials: true })
                  .then(response => {
                        setAllMessages(response.data);
                        setMessages(response.data); 
                  })
                  .catch(error => console.error('Error fetching data:', error));
      }, []);

      const handleDelete = id => {
           
            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
            }).then(result => {
                  if (result.isConfirmed) {
                        axiosSecure
                              .delete(`/AllMessage/${id}`)
                              .then(res => {
                                    if (res.data.deletedCount > 0) {
                                          refetch();
                                          Swal.fire({
                                                title: "Deleted!",
                                                text: "Your file has been deleted.",
                                                icon: "success"
                                          });
                                    }
                                    setMessages(messages.filter(msg => msg._id !== id));
                              })
                              .catch(error => {
                                    console.error("Error deleting message:", error);
                              });
                  } else {
                        refetch();
                  }
            });
      };


      return (
            <div>
                  <Helmet>
                        <title> Dashboard | Messages </title>
                  </Helmet>
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
                                          Message From {message.name}
                                          <div>

                                          </div>
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

                                                <div >
                                                      <button onClick={() => handleDelete(message._id)} className=" bg-pink-500 rounded-md py-2 px-4">  <MdDeleteForever size={25} className="text-white" />
                                                      </button>

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