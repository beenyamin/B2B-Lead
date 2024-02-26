import { useState } from "react";
import { TiPlus, TiMinus } from "react-icons/ti";
import Accordion from "../Accordion/Accordion";
import Icons from "../Icons";

const Solution = () => {

      const [accordionOpen, setAccordionOpen] = useState(false);

      return (
            <div className="my-20">
                  <div className="text-center ">
                        <h2 className="lg:text-4xl text-2xl font-bold mb-3 pt-8 ">Solutions and Pricing </h2>
                        <p className="text-[#7A7A7A]">Maximize your prospecting and sales conversions using Accurate <br /> Verified &
                              Relevant data based on your target persona</p>
                  </div>



                  <div className="lg:flex flex-row lg:gap-3 space-y-4 lg:space-y-0 justify-center mx-auto mt-6 lg:px-20">
                        <div className="">
                              <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between py-3 px-5  text-xl bg-rose-400 font-semibold text-white " >
                                    <span>Hand Curated Custom Contact List Building</span>
                                    <div className="ml-8 mt-1 pr-4 ">
                                          {accordionOpen ? <TiMinus /> : <TiPlus />}
                                    </div>
                              </button>
                              <div
                                    className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen
                                          ? "grid-rows-[1fr] opacity-100"
                                          : "grid-rows-[0fr] opacity-0"}`} >
                                    <div className="overflow-hidden">
                                          <h2 className="lg:ml-3 lg:mt-5 text-base font-normal text-black">
                                                Simply click on <span className="font-semibold text-lg text-black">ORDER NOW</span> to access the order form and <br /> enter your requirements and search criteria.
                                                <br />

                                          </h2>

                                          <div className="my-4 text-base font-normal text-black">
                                          🔍 We can search by,
                                          <Icons/>
                                          </div>


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

                  <Accordion/>

                 



            </div>
      );
};

export default Solution;