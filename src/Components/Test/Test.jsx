import { Link } from "react-router-dom";
import testImages from "../../../public/images/Screenshot_4.jpg";
const Test = () => {
      return (
            <div>
                  <div className="bg-center bg-cover relative" style={{
                        backgroundImage: `url(${testImages})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center', 
             
                         }}>
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-bl  from-[#4448b9] ..."></div>

                        {/* Content */}
                        <div className=" mx-auto py-36 relative z-10">
                              <div className="text-center">
                                    <p className="lg:text-6xl text-2xl lg:font-semibold font-bold text-white">Place order for free pilot</p>
                                    <Link to='/contact'>
                                          <button className="py-3 px-10 shadow-2xl shadow-white mt-6 font-medium text-2xl border-0 rounded-xl hover:bg-lime-500 bg-[#4c2393] text-white uppercase">Test Us Free</button>
                                    </Link>
                              </div>
                        </div>
                  </div>



            </div>
      );
};

export default Test;