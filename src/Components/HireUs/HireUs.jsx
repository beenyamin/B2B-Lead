import { FaRegCheckSquare } from "react-icons/fa";


const HireUs = () => {
      return (
        <div className="bg-slate-200 py-10">
        <div className="text-center text-black">
            <h2 className="lg:text-4xl text-2xl font-bold mb-3 pt-8">Why Hire Us</h2>
            <p className="text-[#747474] text-lg">8 Reasons that make us Premium and Friendly</p>
        </div>
    
        <div className="lg:grid lg:grid-cols-2 lg:px-10 mt-10">
            <div className="mb-6 lg:mb-0">
                <div className="flex text-[#636363]">
                    <FaRegCheckSquare size={40} className="mt-1 mr-3 lg:ml-0 ml-3" />
                    <p className="lg:text-xl lg:px-0 px-3 text-base font-semibold">Get build human verified current data in real time. No outdated, stale or pre-made data.</p>
                </div>
            </div>
            <div className="mb-6 lg:mb-0">
                <div className="flex text-[#636363]">
                    <FaRegCheckSquare size={35} className=" mt-1 mr-3 lg:ml-0 ml-3" />
                    <p className="lg:text-xl lg:px-0 px-3 text-base font-semibold">No Yearly or Monthly commitment! Order, Get and Pay as your need.</p>
                </div>
            </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:px-10 mt-10">
            <div className="mb-6 lg:mb-0">
                <div className="flex text-[#636363]">
                    <FaRegCheckSquare size={35} className=" mt-1 mr-3 lg:ml-0 ml-3" />
                    <p className="lg:text-xl lg:px-0 px-3 text-base font-semibold">Save 30-50% list building cost than others but get better quality in 48 hours.</p>
                </div>
            </div>
            <div className="mb-6 lg:mb-0">
                <div className="flex text-[#636363]">
                    <FaRegCheckSquare size={30} className=" mt-1 mr-3 lg:ml-0 ml-3" />
                    <p className="lg:text-xl lg:px-0 px-3 text-base font-semibold">Ask unlimited revise on your list to insure highest quality.</p>
                </div>
            </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:px-10 mt-10">
            <div className="mb-6 lg:mb-0">
                <div className="flex text-[#636363]">
                    <FaRegCheckSquare size={35} className="mt-1 mr-3 lg:ml-0 ml-3" />
                    <p className="lg:text-xl lg:px-0 px-3 text-base font-semibold">No stress, No boring work to identify & validate leads. Save a few hours a day!</p>
                </div>
            </div>
            <div className="mb-6 lg:mb-0">
                <div className="flex text-[#636363]">
                    <FaRegCheckSquare size={30} className="mt-1 mr-3 lg:ml-0 ml-3" />
                    <p className="lg:text-xl lg:px-0 px-3 text-base font-semibold">Get FREE 50 leads for trial! No sign up or credit card needed.</p>
                </div>
            </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:px-10 mt-10">
            <div className="mb-6 lg:mb-0">
                <div className="flex text-[#636363]">
                    <FaRegCheckSquare size={30} className="mt-1 mr-3 lg:ml-0 ml-3" />
                    <p className="lg:text-xl lg:px-0 px-3 text-base font-semibold">100% data accuracy with at least 95% email deliverability guarantee.</p>
                </div>
            </div>
            <div className="mb-6 lg:mb-0">
                <div className="flex text-[#636363]">
                    <FaRegCheckSquare size={30} className="mt-1 mr-3 lg:ml-0 ml-3" />
                    <p className="lg:text-xl lg:px-0 px-3 text-base font-semibold">Get $20 affiliate commission for your each referral.</p>
                </div>
            </div>
        </div>
    
       
    
    </div>
    
      );
};

export default HireUs;