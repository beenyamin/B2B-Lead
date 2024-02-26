import HappyClient from "../../Components/HappyClient/HappyClient";
import Banner from "../../Components/Header/Banner/Banner";
import Info from "../../Components/Header/Info/Info";
import Navbar from "../../Components/Header/Navbar/Navbar";
import Solution from "../../Components/Solution/Solution";
import Target from "../../Components/Target/Target";


const Home = () => {
      return (
            <div>
                <Info/>
               <Navbar/>
               <Banner/>
               <HappyClient/>
               <Target/>
               <Solution/>
               
            </div>
      );
};

export default Home;