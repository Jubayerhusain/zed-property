import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Property from "./pages/Property";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Agents from "./pages/Agents";
import AgentDetails from "./pages/AgentDetails";
import BlogDetails from "./pages/BlogDetails";
import PropertyDetails from "./pages/PropertyDetails";
import SignIn from "./components/Authentication/userAgent/SignIn";
import UserLogin from "./pages/userAuthPages/UserLogin";
import UserRegistation from "./pages/userAuthPages/UserRegistation";
import UserForgetPassword from "./pages/userAuthPages/UserForgetPassword";
import SignUp from "./components/Authentication/userAgent/SignUp";
import ForgetPassword2 from "./components/Authentication/userAgent/ForgetPassword2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "property",
        element: <Property />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "agents",
        element: <Agents />,
      },
      {
        path: "agent-details/:id",
        element: <AgentDetails />,
      },
      {
        path: "blog-details/:id",
        element: <BlogDetails />,
      },
      {
        path: "property-details/:id",
        element: <PropertyDetails />,
      },
      //  user authentication routes 
        {
        path: "user-login",
        element: <UserLogin /> ,
      },
        {
        path: "user-registation",
        element: <UserRegistation/> ,
      }, 
       {
        path: "/user-forgetPassword",
        element: <UserForgetPassword/> ,
      },
      // user-agent 
       {
        path: "agent-SingIn",
        element: <SignIn/> ,
      },
       {
        path: "agent-singup",
        element: <SignUp/> ,
      },
       {
        path: "agent-forget-password",
        element: <ForgetPassword2/> ,
      }
      
    ],
  },
]);

export default router;
