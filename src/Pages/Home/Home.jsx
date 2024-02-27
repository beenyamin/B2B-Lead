import Footer from "../../Components/Footer/Footer";
import HappyClient from "../../Components/HappyClient/HappyClient";
import Banner from "../../Components/Header/Banner/Banner";
import HireUs from "../../Components/HireUs/HireUs";
import Solution from "../../Components/Solution/Solution";
import Target from "../../Components/Target/Target";


const Home = () => {
      return (
            <div>            
               <Banner/>
               <HappyClient/>
               <Target/>
               <Solution/>
               <HireUs/>
               <Footer/>
               
            </div>
      );
};

export default Home;