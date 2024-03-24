import { Helmet } from "react-helmet-async";
import Lottie from "react-lottie";
import BlogAnimation from "../../../public/Coming soon.json";


const Blogs = () => {

      const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: BlogAnimation,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };



      return (
            <div className="">
                   <Helmet>
                        <title> Lead Forge | Blogs </title>
                  </Helmet>
                  
                  <div className="h-screen w-full mx-auto ">
                  <div className="lg:pt-52 ">
                <Lottie options={defaultOptions}
                    height={400}
                    width={400} />
                </div>


                  </div>



            </div>
      );
};

export default Blogs;