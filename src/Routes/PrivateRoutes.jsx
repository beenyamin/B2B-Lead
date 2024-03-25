import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import MyLoader from "../Loader/MyLoader";

// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
      const { user, loading } = useAuth();
      const location = useLocation();

      if (loading) {
        
            // return <div className="pt-20 text-center  py-80"><span className="loading loading-ring loading-lg"></span></div> 
            return <div className="pt-20"><MyLoader /></div> 
      }
      if (user) {
            return children;
      }
      return <Navigate state={location.pathname} to={'/'}></Navigate>
};

export default PrivateRoutes;