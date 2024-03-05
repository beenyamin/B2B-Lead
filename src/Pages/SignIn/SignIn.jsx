import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGoogleCircle } from 'react-icons/ai';
import toast from "react-hot-toast";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import signInImage from "../../../public/images/Sign in-pana.png";
import { RiEyeFill, RiEyeOffFill, RiLockPasswordFill } from "react-icons/ri";
import { IoMdMailUnread } from "react-icons/io";
import { Helmet } from "react-helmet-async";
import { getToken, saveUser } from "../../Api/utils";

const SignIn = () => {
    const { signIn,signInWithGoogle } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    // console.log(location);
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const from = location?.state?.from?.pathname || '/'
  
   
    const handleSignIn = async event => {
      event.preventDefault()
      const form = event.target
      const email = form.email.value
      const password = form.password.value
  
      try {
     
        const result = await signIn(email, password)
        await getToken(result?.user?.email)
        navigate(from, { replace: true })
        toast.success('Login Successful')
      } catch (err) {
        console.log(err)
        toast.error(err?.message)
      }
    }
  
  
    const handleGoogleSignIn = async () => {
        try {
            const GoogleRegistration = await signInWithGoogle()
            const userSaveDb = await saveUser(GoogleRegistration?.user)
            console.log(userSaveDb);

            await getToken(GoogleRegistration?.user?.email)
            navigate('/')
            toast.success(' SuccessFully Log in With Google')
        
        } catch (error) {
            toast.error(error?.message);
        }
    }
  
    return (
        <div className="mb-20 px-0 lg:px-24 pt-20">
             <Helmet>
                <title> Lead Forge | Sign in </title>
            </Helmet>


            <div className=" mt-10 flex justify-evenly lg:justify-end">
                <div className="">
                    <h2 className="text-gray-400"> New Here? <span className="text- md text-[#4c2393] font-semibold "> <Link to={'/signUp'}>SignUp</Link> </span></h2>
                </div>
            </div>

            <div className=' mt-0 lg:mt-6 grid lg:grid-cols-2 grid-cols-1 lg:px-10'>
                <div>
                    <img src={signInImage} className="w-96 h-96" alt="" />
                </div>

                {/* Form Start */}

                <form onSubmit={handleSignIn} className="w-60  ml-10 lg:w-72">
                    <div>
                        <h2 className="text-2xl font-semibold">Welcome Back ..!</h2>
                        <p className="text-gray-400 ">SignIn to continue</p>

                    </div>

                    <div>
                        <label className="label">
                            <h2>Email</h2>
                        </label>
                        <label className="input input-ghost flex items-center gap-2 border-[#4c2393] focus:border-[#4c2393]">
                            <  IoMdMailUnread />
                            <input
                                type="email"
                                className="grow focus:outline-none w-full"
                                placeholder="Your email"
                                required
                                name="email"
                                 />
                        </label>
                    </div>

                    <div>
                        <label className="label">
                            <h2>Password</h2>
                        </label>
                        <label className="input input-ghost flex items-center gap-2 border-[#4c2393] focus:border-[#4c2393]">
                            <RiLockPasswordFill />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="grow focus:outline-none w-full"
                                placeholder="Password"
                                required
                                name="password"
                            />
                            {showPassword ? (
                                <RiEyeOffFill onClick={handleTogglePassword} />
                            ) : (
                                <RiEyeFill onClick={handleTogglePassword} />
                            )}
                        </label>

                    </div>

                    <div className="flex space-x-3 justify-between mt-4">
                        <button type="submit" className="px-5 py-2 bg-[#4c2393] rounded-full text-white" >Sign in</button>
                        <p className="lg:mt-2 text-gray-300">Forget Password</p>
                    </div>



                    <div className='gird grid-cols-1  '>

                        <div className="text-center">
                            <h2 className="my-3 font-medium">Or SignIn With</h2>

                        </div>

                        <div className=" ml-4 lg:ml-10">
                            <Link> <button onClick={ () => handleGoogleSignIn ()} className=' btn btn-outline text-[#4c2393] hover:bg-[#4c2393]'>
                                <AiFillGoogleCircle className='w-8 h-6'></AiFillGoogleCircle></button></Link>
                            <Link> <button className='btn btn-outline text-[#4c2393] hover:bg-[#4c2393]'>
                                <BsFacebook className='w-8 h-6'></BsFacebook></button></Link>
                            <Link> <button className=' btn btn-outline text-[#4c2393] hover:bg-[#4c2393]'>
                                <AiFillLinkedin className='w-8  h-6'></AiFillLinkedin></button></Link>
                        </div>




                    </div>



                </form>

            </div>


        </div>
    );
};

export default SignIn;

