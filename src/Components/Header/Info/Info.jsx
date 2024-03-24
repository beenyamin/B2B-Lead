
import { IoMdMailUnread, IoLogoWhatsapp } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";




import { Link } from "react-router-dom";

const Info = () => {
      return (
            <div>
                  <div className='bg-[#4c2393] fixed z-10 w-full lg:block md:block hidden py-1 '>
                        <div className="flex text-white justify-between max-w-[1280px] mx-auto ">
                              <div className="flex">
                                    <div className='flex'>
                                          <div className="mt-1 ml-8 mr-2">  <MdAddIcCall  /></div>
                                          <h1>99999999999</h1>
                                          <div className="mt-1 ml-8 mr-2">  <IoMdMailUnread /></div>
                                          <h1>fahim@gmail.com</h1>
                                          <div className="mt-1 ml-8 mr-2">  <HiLocationMarker /></div>
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