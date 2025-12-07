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
        element: <AgentDetails/>,
      }, 
       {
        path: "blog-details/:id",
        element: <BlogDetails/>,
      }
    ],
  },
]);

export default router;
