import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Header/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";


const Main = () => {
      return (
            <div className="font-Poppins ">
                 
                  <Navbar/>
                  <Outlet/>
                  <Footer/>
            </div>
      );
};

export default Main;