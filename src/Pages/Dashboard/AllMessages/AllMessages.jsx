import { useEffect, useState } from "react";
import axiosSecure from "../../../Api/auth";
import { BiSolidMessageDots } from "react-icons/bi";
import { ImBin } from "react-icons/im";
import Swal from "sweetalert2";
import useGetMessages from "../../../Hooks/useGetMessages";
import { Helmet } from "react-helmet-async";
import { Disclosure } from "@headlessui/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsBagHeartFill } from "react-icons/bs";


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

                  <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto mt-10 lg:px-28">

                        {AllMessages.map((message) => <div key={message._id} className="mx-auto w-full lg:max-w-xl max-w-md rounded-2xl  bg-white p-2">
                              <div>
                                    <Disclosure>
                                          {({ open }) => (
                                                <>
                                                      <Disclosure.Button className="flex shadow-md w-full justify-between rounded-lg bg-purple-100 lg:px-6 lg:py-5 py-4 px-4 text-left text-xl font-medium text-[#4c2393]  hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 mb-3">
                                                            <BiSolidMessageDots className="text-[#4c2393] mt-2 mr-3" />
                                                            <span>   Message From {message.name}</span>
                                                            <MdOutlineKeyboardArrowDown
                                                                  className={`${open ? 'rotate-180 transform' : ''
                                                                        } h-8 w-8 text-purple-500`} />
                                                      </Disclosure.Button>
                                                      <Disclosure.Panel className="px-4 pb-2 pt-4  text-gray-500">

                                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                                                                  <div className="text-white font-medium py-2 bg-secondary  rounded-md ">
                                                                        <span className="font-semibold">Name : </span>{message.name}
                                                                  </div>
                                                                  <div className="text-white font-medium py-2 bg-secondary  rounded-md ">
                                                                        <span className="font-semibold">Email : </span>{message.email}
                                                                  </div>

                                                                  <div className="text-white font-medium py-2 bg-[#4c2393] rounded-md ">
                                                                        <span className="font-semibold">Company : </span>{message.company}
                                                                  </div>
                                                                  <div className="text-white font-medium py-2 bg-[#4c2393] rounded-md ">
                                                                        <span className="font-semibold"> Number : </span>{message.number}
                                                                  </div>
                                                            </div>

                                                            {/* interest / Message */}
                                                            <div className="text-white font-medium py-2 mt-4 bg-[#2d9322] w-full rounded-md ">
                                                                  <span className="font-semibold"> Interested in :</span>{message.interest}
                                                            </div>

                                                            <div className="text-black px-6 font-medium py-6 mt-4 bg-slate-200 w-full rounded-md ">
                                                                  <span className="font-semibold"> Messages : </span>{message.text}
                                                            </div>
                                                            <div >
                                                                  <button onClick={() => handleDelete(message._id)} className=" bg-[#4c2393] rounded-md py-2 px-4">  < BsBagHeartFill size={20} className="text-white" />
                                                                  </button>

                                                                  <button className="ml-4 mt-4 bg-secondary rounded-md py-2 px-4">  <ImBin size={20} className="text-white" />
                                                                  </button>

                                                            </div>
                                                      </Disclosure.Panel>
                                                </>
                                          )}


                                    </Disclosure>
                              </div>
                        </div>
                        )
                        }
                  </div>
            </div>
      );
};

export default AllMessages;