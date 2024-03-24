
import { FaAddressBook, FaHome } from "react-icons/fa";
import { PiListFill } from "react-icons/pi";
import { MdWorkHistory } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { BsList } from "react-icons/bs";
import { BiSolidDashboard } from "react-icons/bi";
import { IoLogOut } from "react-icons/io5";
import Info from "../Info/Info";


const Navbar = () => {

      const { user, logOut } = useAuth();
      const navigate = useNavigate();
      const handelLogout = () => {
            logOut()
                  .then(() => {
                        toast.success(' Logged out')
                        navigate('/signIn')
                  }).catch((error) => {
                        toast.error(error)
                  });
      }

      const handleClick = (event) => {
            event.preventDefault();
            const solutionSection = document.getElementById('solution');
            solutionSection.scrollIntoView({ behavior: 'smooth' });
          };




      const navLink = <>

            <ul className="space-x-6">
                  <NavLink to="/" className={({ isActive, isPending }) =>
                        isPending ? "pending " : isActive ? "font-medium text-[#4c2393] rounded px-2 border-b-[#4c2393] border-b-2 " : "font-medium hover:border-b-2 hover:text-rose-400 hover:border-b-rose-400 rounded px-2 "}>Home
                  </NavLink>
                  
                  <a  href="#solution" onClick={handleClick}  
                        className="font-medium hover:border-b-2 hover:text-rose-400 hover:border-b-rose-400 rounded px-2">Service
                  </a>

                  <NavLink to="/contact" className={({ isActive, isPending }) =>
                        isPending ? "pending " : isActive ? "font-medium text-[#4c2393] rounded px-2 border-b-[#4c2393] border-b-2 " : "font-medium hover:border-b-2 hover:text-rose-400 hover:border-b-rose-400 rounded px-2 "}>Contact
                        Us </NavLink>


                  <NavLink to="/blogs" className={({ isActive, isPending }) =>
                        isPending ? "pending " : isActive ? "font-medium text-[#4c2393] rounded px-2 border-b-[#4c2393] border-b-2 " : "font-medium hover:border-b-2 hover:text-rose-400 hover:border-b-rose-400 rounded px-2 "}>Blogs
                  </NavLink>



            </ul>
      </>



      return (
            <div>

                  <Info />
                  {/* pc */}
                  <div className="navbar  bg-slate-100 py-2 fixed bg-opacity-90 z-10 hidden lg:flex md:flex mt-8 ">

                        <div className="max-w-[1280px] mx-auto space-x-80">
                              <div className="flex font-MochiyPopOne text-xl">
                                    <h2>Lead</h2> <h2>Forge</h2>
                              </div>
                              <div className="navbar-center ">
                                    {navLink}
                              </div>

                              <div className="navbar-end">
                                    {user?.email === 'admin@mail.com' ? (
                                          // Render admin features
                                          <div className="dropdown dropdown-end border border-[#4c2393] rounded-full">
                                                <label tabIndex={0} className="flex cursor-pointer">
                                                <BsList className=" text-[#4c2393] mt-1 ml-2" size={20} />
                                                      {/* Your admin interface elements here */}
                                                      <img src={user.photoURL || 'https://www.svgrepo.com/show/338049/profile-user-avatar-person-people-man-account.svg'} className="inline-block h-7 ring-1 ring-[#4c2393] w-7 ml-2 rounded-full" alt="" />
                                                </label>
                                                <ul tabIndex={0} className="mt-6 z-[1] p-4 shadow menu menu-sm dropdown-content bg-slate-100 opacity-35 rounded-box w-60 text-xl font-medium">
                                                      <li> <Link to='/profile'>Profile</Link>  </li>
                                                      <li> <Link to='/dashboard'>Admin Dashboard</Link> </li>
                                                      <li>  <Link onClick={handelLogout}>Log Out</Link> </li>
                                                </ul>
                                          </div>
                                    ) : (
                                          // Render regular user features
                                          user ? (
                                                <div className="dropdown dropdown-end border border-[#4c2393] rounded-full">
                                                      <label tabIndex={0} className="flex cursor-pointer">
                                                      <BsList className=" text-[#4c2393] mt-1 ml-2" size={20} />
                                                            <img src={user.photoURL || 'https://www.svgrepo.com/show/338049/profile-user-avatar-person-people-man-account.svg'} className="inline-block h-7 ring-1 ring-[#4c2393] w-7 ml-2 rounded-full" alt="" />
                                                      </label>
                                                      <ul tabIndex={0} className="mt-6 z-[1] p-4 shadow menu menu-sm dropdown-content bg-slate-100 opacity-35 rounded-box w-60 text-xl font-medium">
                                                            <li>
                                                                  <Link to='/profile'>Profile</Link>
                                                            </li>
                                                            <li>
                                                                  <Link onClick={handelLogout}>Log Out</Link>
                                                            </li>
                                                      </ul>
                                                </div>
                                          ) : (
                                                <Link to='/signIn' className="bg-[#4c2393] py-2 rounded-md px-5 hover:bg-lime-500 text-white text-md font-medium">Sign in</Link>
                                          )
                                    )}
                              </div>


                        </div>
                  </div>


                  {/* Mobile */}

                  <div className="drawer lg:hidden md:hidden bg-slate-100 bg-opacity-50  py-4 fixed z-10">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content mt-2 flex justify-between px-8">
                              {/* Page content here */}
                              <div className="flex ">
                                    <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
                                    <h2 className="text-2xl font-MochiyPopOne ml-2">Lead Forge</h2>
                              </div>
                              <label htmlFor="my-drawer" className=""><PiListFill t size={30} className="text-[#4c2393]" /></label>
                        </div>
                        <div className="drawer-side">
                              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                              <div className="p-4 w-52 min-h-full bg-base-200 text-base-content">
                                    {/* Sidebar content here */}

                                    <div className=" border border-b-2 mt-5 border-b-[#4c2393] p-3 rounded space-y-2 ">


                                          <NavLink to="/" className={({ isActive, isPending }) =>
                                                isPending ? "pending " : isActive ? " flex font-medium text-rose-400  px-2  " : "font-medium flex hover:text-rose-400  rounded px-2 "}>  <FaHome size={15} className="mt-1 mr-2" /> Home
                                          </NavLink>
                                          <NavLink to="/Contact" className={({ isActive, isPending }) =>
                                                isPending ? "pending " : isActive ? " flex font-medium text-rose-400  px-2  " : "font-medium flex  px-2 "}>  <FaSquarePhone size={15} className="mt-1 mr-2" /> Contact
                                          </NavLink>
                                          <NavLink to="/service" className={({ isActive, isPending }) =>
                                                isPending ? "pending " : isActive ? " flex font-medium text-rose-400  px-2 " : "font-medium flex hover:border-b-2   px-2 "}>  <MdWorkHistory size={15} className="mt-1 mr-2" /> Service
                                          </NavLink>

                                          <NavLink to="/blogs" className={({ isActive, isPending }) =>
                                                isPending ? "pending " : isActive ? " flex font-medium text-rose-400  px-2  " : "font-medium flex   rounded px-2 "}>  <FaHome size={15} className="mt-1 mr-2" /> Blogs
                                          </NavLink>


                                    </div>

                                    <div className=" mt-5 p-3 space-y-2">
                                          <NavLink to="/profile" className={({ isActive, isPending }) =>
                                                isPending ? "pending " : isActive ? " flex font-medium text-rose-400 px-2 " : "font-medium flex hover:border-b-2   px-2 "}>  <FaAddressBook size={15} className="mt-1 mr-2" /> Profile
                                          </NavLink>

                                          <NavLink to="/dashboard" className={({ isActive, isPending }) =>
                                                isPending ? "pending " : isActive ? " flex font-medium text-rose-400  px-2  " : "font-medium flex   rounded px-2 "}>  <BiSolidDashboard size={15} className="mt-1 mr-2" />Dashboard
                                          </NavLink>
                                          <NavLink onClick={handelLogout} to="/sigIn" className={({ isActive, isPending }) =>
                                                isPending ? "pending " : isActive ? " flex font-medium text-rose-400  px-2  " : "font-medium flex  rounded px-2 "}>  <IoLogOut size={18} className="mt-1 mr-2" />Logout
                                          </NavLink>

                                    </div>

                              </div>
                        </div>
                  </div>

            </div>
      );
};

export default Navbar;