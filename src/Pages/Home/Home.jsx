import HappyClient from "../../Components/HappyClient/HappyClient";
import Banner from "../../Components/Header/Banner/Banner";
import Info from "../../Components/Header/Info/Info";
import Navbar from "../../Components/Header/Navbar/Navbar";


const Home = () => {
      return (
            <div>
                <Info/>
               <Navbar/>
               <Banner/>
               <HappyClient/>
               
            </div>
      );
};

export default Home;