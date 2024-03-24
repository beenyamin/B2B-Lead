import person3 from "../../../public/images/Person3.png";
import person1 from "../../../public/images/Person1.png";
import person2 from "../../../public/images/Person2.png";

const HappyClient = () => {
      return (
            <div className="mt-10 max-w-[1280px] mx-auto">
                  <h2 className='font-bold text-4xl text-center'>Our Happy Clients</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-10 lg:px-14 gap-5">
                        <div>
                              <h2 className="text-center hover:rounded-b-md hover:border-b-[#4c2393] hover:border-b-2 text-md font-medium w-48 ml-20 ">Who Run A Business</h2>
                              <div className=" mt-3 rounded-md shadow-xl">
                                    <img className="w-full rounded-md hover:transition-opacity hover:opacity-70" src={person2} alt="person1" />
                              </div>
                        </div>
                        <div>
                              <h2 className="text-center hover:rounded-b-md hover:border-b-[#4c2393] hover:border-b-2 text-md font-medium w-48 ml-20 ">Who Manage Sales</h2>
                              <div className=" mt-3 rounded-md  shadow-xl">
                                    <img className="w-full rounded-md hover:transition-opacity hover:opacity-70" src={person1} alt="person2" />
                              </div>
                        </div>
                        <div>
                              <h2 className="text-center hover:rounded-b-md hover:border-b-[#4c2393] hover:border-b-2 text-md font-medium w-48 ml-20 ">Who Drive Marketing</h2>
                              <div className=" mt-3 rounded-md shadow-xl">
                                    <img className="w-full rounded-md hover:transition-opacity hover:opacity-70" src={person3} alt="person3" />
                              </div>
                        </div>





                  </div>

            </div>
      );
};

export default HappyClient;