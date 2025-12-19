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
import ForgetPassword2 from "./components/Authentication/userAgent/ForgetPassword2";
import JoinAgentLayout from "./layouts/JoinAgentLayout";
import UserInformation from "./pages/agentAuthPages/UserInformation";
import BusinessDetails1 from "./pages/agentAuthPages/BusinessDetails1";
import VarifacationPages from "./pages/agentAuthPages/VarifacationPages";
import ResendPages from "./pages/agentAuthPages/ResendPages";
import SetPasswordPages from "./pages/agentAuthPages/SetPasswordPages";

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
        path: "/home",
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
        element: <UserLogin />,
      },
      {
        path: "user-registation",
        element: <UserRegistation />,
      },
      {
        path: "user-forgetPassword",
        element: <UserForgetPassword />,
      },
      // user-agent
      {
        path: "agent-SingIn",
        element: <SignIn />,
      },

      {
        path: "agent-forget-password",
        element: <ForgetPassword2 />,
      },
    ],
  },
  {
    path: "join-as-agent",
    element: <JoinAgentLayout />,
    children: [
      {
        path: "user-information",
        element: <UserInformation />,
      },
      {
        path: "Business-details",
        element: <BusinessDetails1 />,
      },
      {
        path: "varifacation",
        element: <VarifacationPages />,
      },
      {
        path: "resend-it",
        element: <ResendPages />,
      },
      {
        path: "set-password",
        element: <SetPasswordPages />,
      },
    ],
  },
]);

export default router;
