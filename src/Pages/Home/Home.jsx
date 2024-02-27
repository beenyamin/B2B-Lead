
import HappyClient from "../../Components/HappyClient/HappyClient";
import Banner from "../../Components/Header/Banner/Banner";
import HireUs from "../../Components/HireUs/HireUs";
import Reviews from "../../Components/Reviews/Reviews";
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
               <Reviews/>
             
               
            </div>
      );
};

export default Home;