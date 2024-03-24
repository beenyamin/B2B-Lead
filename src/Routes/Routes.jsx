import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Pages/Error/ErrorPage";
import Blogs from "../Pages/Blogs/Blogs";
import Service from "../Pages/Service/Service";
import DashBoard from "../Layouts/DashBoard/DashBoard";
import Admin from "../Pages/Dashboard/Admin/Admin";
import AllMessages from "../Pages/Dashboard/AllMessages/AllMessages";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
      {
            path: "/",
            element: <Main></Main>,
            errorElement: <ErrorPage />,
            children: [
                  { path: "/", element: <Home /> },
                  {
                        path: "/contact",
                        element:<Contact />
                  },
                  { path: "/service", element: <Service /> },
                  { path: "/blogs", element: <Blogs /> },
                  { path: "/signIn", element: <SignIn /> },
                  { path: "/signUp", element: <SignUp /> },]
      },

      {
            path: "/dashboard",
            element: <PrivateRoutes><DashBoard /></PrivateRoutes>,
            children: [
                  { path: "adminHome", element: <PrivateRoutes><Admin/></PrivateRoutes> },
                  { path: "messages", element: <PrivateRoutes><AllMessages /></PrivateRoutes> },
                  { path: "users", element: <PrivateRoutes><AllUsers /> </PrivateRoutes> },
            ]

      }

]);

