
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


const Nav = () => {
  const { user } = useAuth()

  return (
    <div className="navbar bg-slate-200 shadow-md h-20  ">
      <div className="flex-1 ">

      </div>
      <div className="flex-none mr-10 pb-4">

        {/* Notify */}
        <div className="dropdown dropdown-end">
        <span className="relative flex h-3 w-3 pt-4 z-10 ">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
          <div tabIndex={0} role="button" className="btn w-12 h-6 rounded-full ">
            <Link to='messages' >
              <IoMdNotificationsOutline className="h-7 w-7 " />
            </Link>


          </div>

          <div className="mt-3 z-[1] card card-compact dropdown-content w-20 lg:w-52 bg-base-100 shadow">
          </div>
        </div>

        <h2 className="text-slate-600 mr-2 font-medium">{user?.displayName}</h2>
        <h2></h2>

        {/* Menu DropDown */}
        <div className="dropdown flex gap-2 dropdown-end shadow btn-ghost btn mt-3" tabIndex={0} role="button">
          <div className="">
            {/* <img alt="" className="rounded-full w-10 h-10" src={user?.photoURL} /> */}
            <img src={user.photoURL || 'https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} className="inline-block h-7 ring-1 ring-[#4c2393] w-7 ml-2 rounded-full" alt="" />
            {/* <img alt="" className="rounded-full w-9 h-9" src="https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /> */}
          </div>
          <div className="">
            <FiChevronDown size={20} />
          </div>

          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-40 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to='/profile'  className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li><a>Settings</a></li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;