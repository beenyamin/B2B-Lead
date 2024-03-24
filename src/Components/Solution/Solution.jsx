import { useState } from "react";
import { TiPlus, TiMinus } from "react-icons/ti";
import Accordion from "../Accordion/Accordion";
import Icons from "../Icons";
import { Link } from "react-router-dom";

const Solution = () => {

      const [accordionOpen, setAccordionOpen] = useState(false);

      return (
            <div className="my-28">
                  <div className="text-center ">
                        <h2 className="lg:text-4xl text-2xl font-bold mb-3  ">Solutions and Pricing </h2>
                        <p className="text-[#7A7A7A]">Maximize your prospecting and sales conversions using Accurate <br /> Verified &
                              Relevant data based on your target persona</p>
                  </div>



                  <div className="lg:flex flex-row lg:gap-3 space-y-4 lg:space-y-0 justify-center mx-auto mt-6 lg:px-16">
                        <div className="">
                              <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between py-3 px-4 lg:mr-2 text-base lg:text-xl bg-[#4c2393] font-semibold text-white " >
                                    <span className="">Hand Curated Custom Contact List Building</span>
                                    <div className="mt-4 px-3 ">
                                          {accordionOpen ? <TiMinus /> : <TiPlus />}
                                    </div>
                              </button>
                              <div
                                    className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen
                                          ? "grid-rows-[1fr] opacity-100"
                                          : "grid-rows-[0fr] opacity-0"}`} >
                                    <div className="overflow-hidden">
                                          <h2 className="ml-3  mt-5 text-base font-normal text-black">
                                                Simply click on <span className="font-semibold text-lg text-black">ORDER NOW</span> to access the order form and <br /> enter your requirements and search criteria.
                                                <br />

                                          </h2>

                                          <div className="my-4 ml-7 text-base font-normal text-black">
                                          🔍 We can search by,
                                          <Icons/>
                                          </div>


                                    </div>
                              </div>
                        </div>

                        <div>
                             <Link to="/contact"> <button className="bg-[#ed1588] text-xl py-3 px-16 w-full font-semibold text-white">30¢ Per Contact</button> </Link>
                        </div>
                        <div>
                             <Link to="/contact"> <button className="bg-[#2d9322] text-xl py-3 w-full px-10 font-semibold text-white uppercase ">Order now</button></Link>
                        </div>

                  </div>

                  <Accordion/>

                 



            </div>
      );
};

export default Solution;