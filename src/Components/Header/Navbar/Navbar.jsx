
import { FaList } from "react-icons/fa";

const Navbar = () => {
      return (
            <div>

                  {/* pc */}

                  <div className="navbar bg-base-100 hidden lg:block">
                        <div className="navbar-start">
                              <a className="btn btn-ghost text-xl">daisyUI</a>
                        </div>
                        <div className="navbar-center ">
                              <ul className="menu menu-horizontal px-1">
                                    <li><a>Item 1</a></li>
                                    <li>
                                          <details>
                                                <summary>Parent</summary>
                                                <ul className="p-2">
                                                      <li><a>Submenu 1</a></li>
                                                      <li><a>Submenu 2</a></li>
                                                </ul>
                                          </details>
                                    </li>
                                    <li><a>Item 3</a></li>
                              </ul>
                        </div>
                        <div className="navbar-end">
                              <a className="btn">Button</a>
                        </div>
                  </div>


                  {/* Mobile */}

                  <div className="drawer lg:hidden">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content mt-5 flex justify-between px-8">
                              {/* Page content here */}
                              <button className="btn btn-accent ">B2bLeadForge</button>
                              <label htmlFor="my-drawer" className=""><FaList size={25} className="ml-5 mt-3"/></label>
                        </div>
                        <div className="drawer-side">
                              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                              <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                    {/* Sidebar content here */}
                                    <li><a>Sidebar Item 1</a></li>
                                    <li><a>Sidebar Item 2</a></li>

                              </ul>
                        </div>
                  </div>

            </div>
      );
};

export default Navbar;