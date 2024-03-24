import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMailUnread, IoLogoWhatsapp } from "react-icons/io";


const Footer = () => {
      return (
            <div className=" bg-[#4c2393] text-white ">

                  <div className="footer p-10 py-20 max-w-[1280px] mx-auto ">

                        <aside className="lg:ml-20">
                              <div className="flex my-3 ">
                                    <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                                    <h2 className="text-2xl font-MochiyPopOne ml-3 mt-1">Lead Forge</h2>
                              </div>
                              <p>We help digital marketing agencies <br /> & small-medium businesses with <br /> their lead generation activities.</p>
                        </aside>
                        <nav>
                              <h6 className="footer-title text-white">Our Services</h6>
                              <a className="link link-hover"> Lead Lister Building</a>
                              <a className="link link-hover">Cold Email</a>
                              <a className="link link-hover">Email Campaign</a>
                              <a className="link link-hover">LinkedIn Campaign</a>

                        </nav>
                        <nav>
                              <h6 className="footer-title">Important Link</h6>
                              <a className="link link-hover">About us</a>
                              <a className="link link-hover">Contact</a>
                              <a className="link link-hover">Jobs</a>
                              <a className="link link-hover">Press kit</a>
                        </nav>
                        <nav>
                              <h6 className="footer-title ml-1">Contact Us </h6>

                              <div className=" flex"> <BiSolidPhoneCall className="mt-1 text-lg" />
                                    <h1 className="ml-1 mt-1">+99999999999</h1>
                              </div>
                              <div className=" flex"> <IoLogoWhatsapp className="mt-1 text-lg" />
                                    <h1 className="ml-1 mt-1">+8801704040404</h1>
                              </div>

                              <div className=" flex"> <IoMdMailUnread className="mt-1 text-lg" />
                                    <h1 className="ml-1 mt-1">fahim@gmail.com</h1>
                              </div>
                        </nav>
                  </div>

                  <div className="footer footer-center border  p-4 bg-[#4c2393] text-white">
                        <aside>     
                              <p>Copyright © 2024 - All right reserved by Lead Forge</p>
                        </aside>
                  </div>


            </div>
      );
};

export default Footer;