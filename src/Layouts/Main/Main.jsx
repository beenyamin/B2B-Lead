import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar/Navbar";
import Info from "../../Components/Header/Info/Info";


const Main = () => {
      return (
            <div className="font-Poppins">
                     <Info/>
                  <Navbar/>
                  <Outlet/>
            </div>
      );
};

export default Main;