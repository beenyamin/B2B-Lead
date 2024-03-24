
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Nav from "./Nav/Nav";
import { Helmet } from "react-helmet-async";
import { FiMail } from "react-icons/fi";
import { PiUsersFill } from "react-icons/pi";
import { RiAdminFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { TfiControlBackward } from "react-icons/tfi";
import { VscSignOut } from "react-icons/vsc";
import { BsFillPersonVcardFill } from "react-icons/bs";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import useAdmin from "../../Hooks/useAdmin";


const Dashboard = () => {
  const { user, logOut } = useAuth()
  const navigate = useNavigate()
  const [isAdmin] = useAdmin()

  const handelSignOut = () => {
    logOut()
      .then(() => {
        toast.success(' Signed Out')
        navigate('/signIn')
      }).catch((error) => {
        toast.error(error)
      });
  }
  return (
    <div className="flex">
      <Helmet>
        <title> Lead Forge | Dashboard</title>
      </Helmet>

      {/* Left side (menu) */}
      <div className="lg:w-2/12 w-3/12  min-h-screen bg-[#4c2393] shadow-2xl text-white " >
        <div className=" space-x-2 ml-5 mt-3 hidden lg:flex">
          <div className="mt-1">
            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
          </div>
          <h2 className="text-xl font-MochiyPopOne">Lead Forge</h2>
        </div>
        {/* Your menu items go here */}
        <ul className="menu  lg:p-4  border-b-2 lg:mt-10 mt-14 ">
          <label className="text-start ml-5 mb-3 lg:flex hidden" >
            MENU <FaAngleDown className="mt-1 lg:ml-2" />
          </label>

          <> <li><NavLink to="/dashboard/adminHome" className=" hover:bg-white hover:text-black "><RiAdminFill className="lg:mt-1 text-3xl lg:text-base font-semibold" /> <span className="hidden lg:block">Admin Home</span></NavLink> </li>
            <li><NavLink to="/dashboard/messages" className="hover:bg-white hover:text-black "><FiMail className="lg:mt-1 text-3xl lg:text-base font-semibold" /> <span className="hidden lg:block">Messages</span> </NavLink> </li>
            <li><NavLink to="/dashboard/users" className="hover:bg-white hover:text-black ">< PiUsersFill className="lg:mt-1 text-3xl lg:text-base font-semibold" /> <span className="hidden lg:block"> Users</span></NavLink> </li> </>




        </ul>
        <ul className="menu lg:p-4 mt-3 ">

          <li><NavLink to="/" className="hover:bg-white hover:text-black "><TfiControlBackward className="lg:mt-1 text-3xl lg:text-base font-semibold" /> <span className="hidden lg:block">Home</span></NavLink> </li>
          <li><NavLink to="/profile" className="hover:bg-white hover:text-black "><BsFillPersonVcardFill className="lg:mt-1 text-3xl lg:text-base font-semibold" /> <span className="hidden lg:block">Profile</span> </NavLink> </li>
          <li><NavLink onClick={handelSignOut} to="/dashboard/payment" className="hover:bg-white hover:text-black ">< VscSignOut className="lg:mt-1 text-3xl lg:text-base font-semibold" /> <span className="hidden lg:block">Sign Out</span></NavLink> </li>
        </ul>

      </div>


      {/* Right side (content) */}
      <div className="flex-grow text-center">
        <Nav />
        <Outlet />

      </div>
    </div>
  );
};

export default Dashboard;