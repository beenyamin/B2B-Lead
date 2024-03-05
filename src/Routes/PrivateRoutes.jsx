import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import MyLoader from "../Loader/MyLoader";


// eslint-disable-next-line react/prop-types
const PrivateRoutes = ({ children }) => {
      const { user, loading } = useAuth();
      const location = useLocation();

      if (loading) {
            // return <MyLoader />
            return <div><span className="loading loading-ring loading-lg"></span></div> 
      }
      if (user) {
            return children;
      }
      return <Navigate state={location.pathname} to={'/signIn'}></Navigate>
};

export default PrivateRoutes;