
import { IoMdNotificationsOutline } from "react-icons/io";
import useAuth from "../../../Hooks/useAuth";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";


const Nav = () => {
  const { user} = useAuth()

  return (
    <div className="navbar bg-slate-200 shadow-md">
      <div className="flex-1 ">
 
      </div>
      <div className="flex-none">

{/* Notify */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn w-12 h-6 rounded-full mr-5">
            <div className="indicator">
              <IoMdNotificationsOutline className="h-7 w-7" />
              <span className="badge bg-red-500 border-0 rounded-full badge-xs indicator-item"></span>
            </div>
          </div>

          <div className="mt-3 z-[1] card card-compact dropdown-content w-20 lg:w-52 bg-base-100 shadow">
          </div>
        </div>
        
        <h2 className="text-slate-600 mr-2 font-medium">{user?.displayName}</h2>
        <h2></h2>

{/* Menu DropDown */}
        <div className="dropdown flex gap-2 dropdown-end shadow btn-ghost btn" tabIndex={0} role="button">
          <div className="">
            {/* <img alt="" className="rounded-full w-10 h-10" src={user?.photoURL} /> */}
            <img alt="" className="rounded-full w-9 h-9"src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  />
          </div>
          <div  className="">
            <FiChevronDown size={20} />
          </div>

          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-40 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a  className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;