import React from "react";
import { Links, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { Link } from "lucide-react";

const Navbar = () => {
  const linkCenter = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-semibold text-[#0BC147] hover:text-[#03b33d]"
              : "text-lg hover:text-[#0BC147] hover:underline"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/property"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-semibold text-[#0BC147] hover:text-[#03b33d]"
              : "text-lg hover:text-[#0BC147] hover:underline"
          }
        >
          Property
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/agents"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-semibold text-[#0BC147] hover:text-[#03b33d]"
              : "text-lg hover:text-[#0BC147] hover:underline"
          }
        >
          Agent
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-semibold  text-[#0BC147] hover:text-[#03b33d]"
              : "text-lg hover:text-[#0BC147] hover:underline"
          }
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-semibold text-[#0BC147] hover:text-[#03b33d]"
              : "text-lg hover:text-[#0BC147] hover:underline"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-lg font-semibold text-[#0BC147] hover:text-[#03b33d]"
              : "text-lg  hover:text-[#0BC147] hover:underline"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-white max-w-[1440px] mx-auto py-5">
        <div className="navbar-start">
          <a className="">
            <img src={logo} alt="Logo" className="h-10" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{linkCenter}</ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="1"
              className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-1 right-0 w-52 p-2 ml-0 shadow"
            >
              {linkCenter}
              <NavLink to={"agent-SingIn"} className="btn border-[#63e32d] rounded-lg mb-2">
                Join As Agent
              </NavLink>
              <NavLink to={"user-login"} className="btn rounded-lg bg-gradient-to-b from-[#63e32d] to-[#aff50a] text-white">
                Log In
              </NavLink>
            </ul>
          </div>
          <NavLink to={"agent-SingIn"} className="btn border-[#63e32d] rounded-lg sm:block pt-2 hidden">
            Join As Agent
          </NavLink>
          <NavLink to={"user-login"}  className="btn rounded-lg bg-gradient-to-b from-[#63e32d] pt-2 to-[#aff50a] text-white sm:block hidden">
            Log In
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
