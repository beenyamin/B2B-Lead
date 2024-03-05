import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Link,  useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AiFillGoogleCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import signUpImage from "../../../public/images/Sign up-bro.png";
import { IoMdMailUnread } from "react-icons/io";
import { RiEyeFill, RiEyeOffFill, RiLockPasswordFill } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import { getToken, saveUser } from "../../Api/utils";

const SignUp = () => {
      const { createUser, signInWithGoogle,} = useAuth();
      const [showPassword, setShowPassword] = useState(false);
      const navigate = useNavigate();

      const handleTogglePassword = () => {
            setShowPassword(!showPassword);
      };

  
      const handleSignUp = async (event) => {
          event.preventDefault();
          const form = event.target;
          const name = form.name.value;
          const email = form.email.value;
          const password = form.password.value;
          console.log(name, email, password);
      
          // Password length check
          if (password.length < 6) {
              toast.error('Password should be at least 6 characters!');
              return;
          } else if (!/(?=.*[A-Z])(?=.*[_.!@$*=-?#])/.test(password)) {
              toast.error("Password Must Be One Uppercase & One Special character");
              return;
          }   
          try {

              const UserCreate = await createUser(email, password);
              console.log(UserCreate);
              const userSaveDb = await saveUser(UserCreate?.user);
              console.log(userSaveDb);
              //token 
              await getToken(UserCreate?.user?.email);
              navigate('/');
              toast.success('SignUp Successful');
          } catch (error) {
              toast.error(error?.message);
          }
      }
      
  
      const handleGoogleSignUp = async () => {
  
          try {
              const GoogleRegister = await signInWithGoogle()
              const userSaveDb = await saveUser(GoogleRegister?.user)
              console.log(userSaveDb);
  
              //token 
              await getToken(GoogleRegister?.user?.email)
              navigate('/')
              toast.success(' SuccessFully SignUp With Google')
          
          } catch (error) {
              toast.error(error?.message);
          }
      }
  

      return (
            <div className="mb-20 px-0 lg:px-24 pt-20 " >
                  <Helmet>
                        <title> Lead Forge | Sign Up </title>
                  </Helmet>
                  <div className=" mt-10 flex justify-between">
                        <div></div>
                        <div className="mr-20">
                              <h2 className="text-gray-400"> Already An User? <span className="text-lg text-[#4c2393]  font-semibold "> <Link to={'/signIn'}>SignIn</Link> </span></h2>
                        </div>
                  </div>



                  <div className=' mt-0 lg:mt-6 grid lg:grid-cols-2 grid-cols-1 lg:px-10'>
                        <div>
                              <img src={signUpImage} className="w-96 h-96" alt="" />
                        </div>

                        {/* Form Start */}

                        <form onSubmit={handleSignUp} className="w-60  ml-10 lg:w-72">

                              <div>
                                    <h2 className="text-2xl font-bold">SignUp Here..!</h2>
                              </div>

                              <div>
                                    <label className="label">
                                          <h2>Name</h2>
                                    </label>
                                    <label className="input input-ghost flex items-center gap-2 border-[#4c2393]">
                                          <IoPerson />
                                          <input type="text"
                                                className="grow focus:outline-none w-full"
                                                required
                                                name="name"
                                                placeholder="Your Name"
                                            

                                          />
                                    </label>
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
                                                required
                                                name="email"
                                                placeholder="Your Email" />
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
                                                placeholder="Create password"
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
                                    <button type="submit" className="px-5 py-2 w-full bg-[#4c2393]  rounded-md text-white" >SignUp</button>

                              </div>


                              <div className='gird grid-cols-1 mt-3 lg:grid-cols-1 '>
                                    <div className="text-center">
                                          <h2 className="mb-3 font-medium">Or SignUp With..</h2>
                                    </div>

                                    <div className=" ml-4 lg:ml-10">
                                          <Link> <button onClick={handleGoogleSignUp} className=' btn btn-outline text-[#4c2393] hover:bg-[#4c2393]'>
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

export default SignUp;