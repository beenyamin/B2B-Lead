
import { FaPeopleGroup  } from "react-icons/fa6";
import { FaSearchengin } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";
import { Link } from "react-router-dom";




const Target = () => {
      return (
            <div className="bg-slate-200 py-10">
                  <div className="text-center ">
                        <h2 className="lg:text-4xl text-2xl font-bold mb-3 pt-8 ">Let us find all the targeted data for You </h2>
                        <p className="text-[#747474] text-lg">Our super expert research team targets and finds your most qualified <br /> prospects and validate  with prior technology by hands.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10 lg:px-14">

                        <div className="card w-96">
                              <div className="card-body ">
                                    <div className="">
                                          < FaPeopleGroup size={90} color="" className="border-[#0f0e0e] hover:border-[#F33A6A] hover:text-[#F33A6A] items-center justify-center mx-auto mb-4  border-4 rounded-full p-4" />
                                          <h2 className="text-center">
                                                <span className="text-lg font-semibold">Step 1 :</span> Click on the <span className="text-lg font-semibold"> ORDER NOW</span>  button and fill out the order form with your search criteria and requirements
                                          </h2>
                                    </div>
                              </div>
                        </div>
                        <div className="card w-96">
                              <div className="card-body ">
                                    <div className="">
                                          < FaSearchengin size={90}  className="border-[#0f0e0e] hover:border-[#F33A6A] hover:text-[#F33A6A] items-center justify-center mx-auto mb-4  border-4 rounded-full p-4" />
                                          <h2 className="text-center">
                                                <span className="text-lg font-semibold">Step 2 :</span> Within next 12 hours, we start researching, identifying, and validating your ideal and qualified contacts
                                          </h2>
                                    </div>
                              </div>
                        </div>
                        <div className="card w-96">
                              <div className="card-body ">
                                    <div className="">
                                          < MdFormatListBulleted size={90} color="" className="border-[#0f0e0e] hover:border-[#F33A6A] hover:text-[#F33A6A] items-center justify-center mx-auto mb-4  border-4 rounded-full p-4" />
                                          <h2 className="text-center">
                                                <span className="text-lg font-semibold">Step 3 :</span> Receive your data list within 48 hours of ordering with all the prospect details you are looking
                                          </h2>
                                    </div>
                              </div>
                        </div>


                  </div>

                  <div className="text-center pt-8">
                  <Link to=''> <button className="py-3 shadow px-7 font-medium text-2xl border-0 rounded-xl hover:bg-lime-500 bg-[#4c2393] text-white">GET STARTED</button></Link>
                  </div>

            </div>
      );
};

export default Target;