import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
      {
            path: "/",
            element: <Main></Main>,
            children: [
                  { path: "/",element: <Home />},
                  { path: "/contact",
                  element: <PrivateRoutes><Contact /></PrivateRoutes>},
                  { path: "/service",element: <SignIn />},
                  { path: "/blogs",element: <SignUp /> },
                  { path: "/signIn",element: <SignIn />},
                  { path: "/signUp",element: <SignUp /> }
      
      ]
      },
]);

