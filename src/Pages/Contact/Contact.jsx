import { IoPerson } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import { RiHomeOfficeFill } from "react-icons/ri";
import { FaSquarePhone } from "react-icons/fa6";
import { PiCheckFatBold } from "react-icons/pi";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axiosSecure from "../../Api/auth";
import Swal from "sweetalert2";


const Contact = () => {
      const {user} = useAuth ();
      const navigate = useNavigate ();
      const location = useLocation ();

      const handleAddMassage = e => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const company = form.company.value;
            const number = form.number.value;
            const interest = form.interest.value;
            const text =form.text.value
            const addNewMassage = { name: name,  company: company, number:number, interest:interest, text:text , email: user?.email }
           console.log(addNewMassage);
            axiosSecure.post('/newMessage', 
            JSON.stringify(addNewMassage), 
            { headers:
                   { 'Content-Type': 'application/json' } })
            .then(({ data }) => {
                if (data.insertedId) {
                  Swal.fire({
                        title: "Message Send!",
                        text: "Please Wait For Response!",
                        icon: "success"
                      });
                  
                    navigate(location?.state || '/');
                }
            })
            .catch(error => console.error('Error sending message:', error));
    
        }

      return (
            <div className="lg:pt-20 pt-10 px-8 ">
                  <Helmet>
                        <title> Lead Forge | Contact </title>
                  </Helmet>
                  <div className="grid grid-cols-1 lg:grid-cols-2 w-full my-20  max-w-[1280px] mx-auto ">
                        <div className="card ">
                              <div className="card-body">
                                    <h2 className="card-title text-3xl font-bold text-[#54595F]">Let us do all the work for you</h2>
                                    <p className="font-normal text-lg text-[#54595F]">Please provide your contact information below and one of our managers will reach out immediately.</p>

                              </div>

                              <form onSubmit={handleAddMassage}>
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:ml-5">


                                    <div className="space-y-3">
                                          <label className="input input-ghost flex items-center gap-2 border-[#4c2393]">
                                                <IoPerson />
                                                <input type="text" name="name" className="" placeholder="Your Name" />
                                          </label>

                                          <label className="input input-ghost flex items-center gap-2 border-[#4c2393]">
                                                <  IoMdMailUnread />
                                                <input type="text" name="email" className="grow" placeholder="Your Email" />
                                          </label>

                                    </div>

                                    <div className="space-y-3">
                                          <label className="input input-ghost flex items-center gap-2 border-[#4c2393]">
                                                < RiHomeOfficeFill />
                                                <input type="text" name="company" className="grow" placeholder="Your Company Name" />
                                          </label>

                                          <label className="input input-ghost flex items-center gap-2 border-[#4c2393] focus:border-[#4c2393]">
                                                < FaSquarePhone />
                                                <input type="number" name="number" className="grow focus:outline-none" placeholder="Your Phone Number" />
                                          </label>

                                    </div>

                              </div>

                              <div className="mt-5 lg:ml-5 ">
                                    <select name="interest" defaultValue="I am interested in.." className="select border-[#4c2393] w-full ">
                                          <option >I am interested in..</option>
                                          <option>Contact List  Building</option>
                                          <option>Find Email Address</option>
                                          <option>Data Appending & Enrichment</option>
                                          <option>Hired Dedicated Research Team</option>
                                    </select>
                              </div>
                              <div className="mt-5 lg:ml-5 ">
                              <textarea name="text" className="textarea border-[#4c2393] w-full" placeholder="Type Your Messages"></textarea>
                              </div>

                              <div className="text-center mt-5">
                                    <button type="submit" className="px-6 py-2 rounded-md text-white font-medium uppercase bg-[#4c2393]">Submit Now</button>
                              </div>

                              </form>
                        </div>

                        <div className="card-body mt-24">
                              <div className="flex text-[#636363] mt-2 ml-2 ">
                                    <PiCheckFatBold size={25} className="mr-2" />
                                    <p className="text-xl font-semibold">Manually researched and hand picked</p>
                              </div>
                              <hr />
                              <div className="flex text-[#636363]  ml-2 ">
                                    <PiCheckFatBold size={25} className="mr-2" />
                                    <p className="text-xl font-semibold">Accurate & Human verified contacts</p>
                              </div>
                              <hr />
                              <div className="flex text-[#636363] ml-2 ">
                                    <PiCheckFatBold size={25} className="mr-2" />
                                    <p className="text-xl font-semibold">
                                          No commitment! Order as your need</p>
                              </div>
                              <hr />

                              <div className="flex text-[#636363] ml-2 ">
                                    <PiCheckFatBold size={25} className="mr-2" />
                                    <p className="text-xl font-semibold">48hrs delivery</p>
                              </div>
                              <hr />

                              <div className="flex text-[#636363]  ml-2 ">
                                    <PiCheckFatBold size={25} className="mr-2" />
                                    <p className="text-xl font-semibold">5x cheaper than Zoom info</p>
                              </div>
                              <hr /> <div className="flex text-[#636363]  ml-2 ">
                                    <PiCheckFatBold size={25} className="mr-2" />
                                    <p className="text-xl font-semibold">Get free 50 leads for test</p>
                              </div>
                              <hr />
                              <div className="flex text-[#636363] ml-2 ">
                                    <PiCheckFatBold size={25} className="mr-2" />
                                    <p className="text-xl font-semibold">Researching hour capabilities</p>
                              </div>
                              <hr />





                        </div>

                  </div>

            </div>
      );
};

export default Contact;