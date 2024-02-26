import { useState } from "react";
import { TiMinus, TiPlus } from "react-icons/ti";


const Accordion = () => {  
      const [Accordion , setAccordion] = useState (false)
      return (
            <div>
                   <div className="lg:flex flex-row lg:gap-3 space-y-4 lg:space-y-0 justify-center mx-auto mt-2 lg:px-20">
                        <div className="">
                              <button onClick={() => setAccordion(!Accordion)}
                                    className="flex justify-between py-3 px-5  text-xl bg-rose-400 font-semibold text-white " >
                                    <span>Hire Dedicated Research Team</span>
                                    <div className="ml-40 mt-1 pr-4 ">
                                          {Accordion ? <TiMinus /> : <TiPlus />}
                                    </div>
                              </button>
                              <div
                                    className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${Accordion
                                          ? "grid-rows-[1fr] opacity-100"
                                          : "grid-rows-[0fr] opacity-0"}`} >
                                    <div className="overflow-hidden">
                                          <h2 className="lg:ml-3 lg:mt-5 text-base font-normal text-black">
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
                              <button className="bg-[#4c2393] text-xl py-3 px-10 font-semibold text-white ">30¢ Per Contact</button>
                        </div>
                        <div>
                              <button className="bg-[#2d9322] text-xl py-3 px-10 font-semibold text-white uppercase ">Order now</button>
                        </div>

                  </div>
            </div>
      );
};

export default Accordion;