
import { Helmet } from "react-helmet-async";
import HappyClient from "../../Components/HappyClient/HappyClient";
import Banner from "../../Components/Header/Banner/Banner";
import HireUs from "../../Components/HireUs/HireUs";
import Reviews from "../../Components/Reviews/Reviews";
import Solution from "../../Components/Solution/Solution";
import Target from "../../Components/Target/Target";
import Test from "../../Components/Test/Test";


const Home = () => {
      return (
            <div>
                  <Helmet>
                        <title> Lead Forge | Home </title>
                  </Helmet>
                  <Banner />
                  <HappyClient />
                  <Target />
                  <Solution />
                  <HireUs />
                  <Reviews />
                  <Test/>


            </div>
      );
};

export default Home;