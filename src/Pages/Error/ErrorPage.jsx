import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Image404 from "../../../public/images/404.png";
import { BsChevronDoubleLeft } from "react-icons/bs";





const ErrorPage = () => {
    const navigate = useNavigate ()
    return (
    <div>
       <Helmet>
            <title> Lead Forge | Error Page </title>
          </Helmet>
        <section className='bg-white'>

        <div className='container flex items-center min-h-screen px-6 py-12 mx-auto'>
          <div className='flex flex-col items-center max-w-sm mx-auto text-center'>
            <div className='p-3 text-sm font-medium text-[#4c2393] rounded-full bg-blue-50 '>
           <img src={Image404} className="w-52 h-52" alt="" />
            
            </div>
            <h1 className='mt-3 text-2xl font-semibold text-gray-800  md:text-3xl'>
              Something Went Wrong!
            </h1>
            <p className='mt-4 text-gray-500 '>404 Page Not Found..!</p>
  
            <div className='flex items-center justify-center mx-auto w-full mt-6 gap-x-3 shrink-0 sm:w-auto'>
              <button
                onClick={() => navigate(-1)}
                className='flex items-center justify-center w-1/2
                 px-5 py-1 text-sm text-white space-x-1 transition-colors duration-200  bg-[#4c2393] border rounded-lg  sm:w-auto   hover:bg-black ' >
                <BsChevronDoubleLeft />
                <span>Go Home</span>
              </button >
  
              <button className="" label={'Go Home'} onClick={() => navigate('/')} />
            </div>
          </div>
        </div>
      </section>

    </div>
    );
};

export default ErrorPage;