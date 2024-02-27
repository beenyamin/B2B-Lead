import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar/Navbar";
import Info from "../../Components/Header/Info/Info";
import Footer from "../../Components/Footer/Footer";


const Main = () => {
      return (
            <div className="font-Poppins">
                     {/* <Info/> */}
                  <Navbar/>
                  <Outlet/>
                  <Footer/>
            </div>
      );
};

export default Main;