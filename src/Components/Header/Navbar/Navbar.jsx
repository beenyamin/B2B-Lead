
import { FaList, FaHome } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
      return (
            <div>

                  {/* pc */}

                  <div className="navbar px-8 bg-slate-100 py-2 fixed  z-10 hidden lg:flex md:flex">
                        <div className="navbar-start">
                              <a className="btn btn-ghost text-xl font-MochiyPopOne"> Lead Forge</a>
                        </div>
                        <div className="navbar-center ">
                              <ul className="px-1 space-x-10">
                                    <NavLink className="font-medium text-md hover:text-rose-400">Home</NavLink>
                                    <NavLink className="font-medium text-md hover:text-rose-400">Service</NavLink>
                                    <NavLink className="font-medium text-md hover:text-rose-400">Contact</NavLink>
                              </ul>
                        </div>
                        <div className="navbar-end ">

                              <Link className="bg-rose-400 py-2 rounded-md px-5 hover:bg-lime-500 text-white text-md font-medium">Lets Talk</Link>
                        </div>
                  </div>


                  {/* Mobile */}

                  <div className="drawer lg:hidden md:hidden bg-slate-200 py-2">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content mt-2 flex justify-between px-8">
                              {/* Page content here */}
                              <button className="btn btn-secondary ">Lead Forge</button>
                              <label htmlFor="my-drawer" className=""><FaList size={25} className="ml-5 mt-3" /></label>
                        </div>
                        <div className="drawer-side">
                              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                              <div className="p-4 w-72 min-h-full bg-base-200 text-base-content">
                                    {/* Sidebar content here */}

                                    <div className="ml-10 space-y-2">
                                          <div className="flex hover:text-rose-400">
                                                <FaHome size={15} className="mt-1" />
                                                <NavLink className="font-medium text-md ml-1">Home</NavLink>
                                          </div>
                                          <div className="flex hover:text-rose-400">
                                                <MdWorkHistory size={15} className="mt-1" />
                                                <NavLink className="font-medium text-md ml-1">Service</NavLink>
                                          </div>
                                          <div className="flex hover:text-rose-400">
                                                <FaSquarePhone size={15} className="mt-1" />
                                                <NavLink className="font-medium text-md ml-1">Contact</NavLink>
                                          </div>
                                    </div>

                              </div>
                        </div>
                  </div>

            </div>
      );
};

export default Navbar;