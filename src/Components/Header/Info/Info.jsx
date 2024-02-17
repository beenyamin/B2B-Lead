import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMailUnread, IoLogoWhatsapp } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

import { Link } from "react-router-dom";

const Info = () => {
      return (
            <div>
                  <div className='bg-rose-400 hidden md:block lg:block  py-1'>
                        <div className="flex text-white justify-between ">
                              <div className="flex">
                                    <div className='flex space-x-2'>
                                          <div className="mt-1 ml-8">  <BiSolidPhoneCall /></div>
                                          <h1>99999999999</h1>
                                          <div className="mt-1 ml-8">  <IoMdMailUnread /></div>
                                          <h1>fahim@gmail.com</h1>
                                          <div className="mt-1 ml-8">  <HiLocationMarker /></div>
                                          <h1>Bogura , Bangladesh</h1>
                                    </div>

                                  

                                   
                              </div>

                              <div className='space-x-2 mr-6 '>
                                    <Link>
                                          <div className="flex">
                                                <div className="pt-1 ml-6">  <IoLogoWhatsapp size={20} /></div>
                                                <div className="pt-1 ml-6">  <FaLinkedin size={20} /></div>
                                                <div className="pt-1 ml-6">  <FaFacebookSquare size={20} /></div>
                                          </div>

                                    </Link>


                              </div>


                        </div>

                  </div>
            </div>
      );
};

export default Info;