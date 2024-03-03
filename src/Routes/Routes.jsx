import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
      {
            path: "/",
            element: <Main></Main>,
            children: [
                  { path: "/",element: <Home />},
                  { path: "/contact",element: <Contact />},
                  { path: "/signIn",element: <SignIn />},
                  { path: "/signUp",element: <SignUp />}
      
      ]
      },
]);

