import { useState } from "react";
import { TiMinus, TiPlus } from "react-icons/ti";
import { Link } from "react-router-dom";


const Accordion = () => {  
      const [Accordion , setAccordion] = useState (false)
      return (
            <div>
                   <div className="lg:flex flex-row lg:gap-3 space-y-4 lg:space-y-0 justify-center mx-auto mt-2 lg:px-16">
                        <div className="">
                              <button onClick={() => setAccordion(!Accordion)}  className="flex justify-between py-3 lg:px-8  lg:text-xl bg-[#4c2393] font-semibold text-white " >
                                    <span className="lg:ml-3 ml-3">Hire Dedicated Research Team</span>
                                    <div className="justify-end mt-2 px-24 lg:mt-1 pr-4 ">
                                          {Accordion ? <TiMinus className="" /> : <TiPlus className="" />}
                                    </div>
                              </button>
                              <div
                                    className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${Accordion
                                          ? "grid-rows-[1fr] opacity-100"
                                          : "grid-rows-[0fr] opacity-0"}`} >
                                    <div className="overflow-hidden">
                                          <h2 className="ml-3 mt-5 text-base font-normal text-black">
                                                Simply click on the <span className="font-semibold text-lg text-black">CONTACT US</span>  button & let us <br /> know your requirements.

                                                <br />

                                                <p  className="pt-3">
                                                ☛ We will provide dedicate highly skilled expert team <br /> in  any size with project managing & QA person.  
                                                </p>


                                          </h2>

                                    </div>
                              </div>
                        </div>

                        <div>
                             <Link to="/contact"> <button className="bg-[#ed1588] text-xl py-3 lg:px-10 w-full font-semibold text-white ">Contact us for Quote</button></Link>
                        </div>
                        <div>
                             <Link to="/contact"> <button className="bg-[#2d9322] text-xl  w-full py-3 lg:px-10 font-semibold text-white uppercase ">Contact us</button></Link>
                        </div>

                  </div>
            </div>
      );
};

export default Accordion;