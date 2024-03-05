import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Image404 from "../../../public/images/404.png";


const ErrorPage = () => {
    const navigate = useNavigate ()
    return (
    <div>
       <Helmet>
            <title> New | Error Page </title>
          </Helmet>
        <section className='bg-white'>

        <div className='container flex items-center min-h-screen px-6 py-12 mx-auto'>
          <div className='flex flex-col items-center max-w-sm mx-auto text-center'>
            <div className='p-3 text-sm font-medium text-[#4c2393] rounded-full bg-blue-50 '>
           <img src={Image404} sizes="50%" alt="" />
            
            </div>
            <h1 className='mt-3 text-2xl font-semibold text-gray-800  md:text-3xl'>
              Something Went Wrong!
            </h1>
            <p className='mt-4 text-gray-500 '>404 Page Not Found..!</p>
  
            <div className='flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto'>
              <button
                onClick={() => navigate(-1)}
                className='flex items-center justify-center w-1/2
                 px-5 py-1 text-sm text-white transition-colors duration-200  bg-[#4c2393] border rounded-lg gap-x-2 sm:w-auto   hover:bg-black '
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-5 h-5 rtl:rotate-180 text-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                  />
                </svg>
  
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