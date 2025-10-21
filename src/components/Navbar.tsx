import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext, AuthContextType } from "../contexts/AuthContext"; 
import { Tooltip } from "react-tooltip";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const { currentUser, signOutUser } = useContext(AuthContext) as AuthContextType;

  const clickHandler = () => {
    signOutUser()
      .then(() => {
    
      })
      .catch(() => {
      
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/groups">All Groups</NavLink>
      </li>
      <li>
        <NavLink to="/createGroup">Create Group</NavLink>
      </li>
      <li>
        <NavLink to="/myGroups">My Groups</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-md sticky top-0 z-10">
      <div className="navbar max-w-6xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="p-2 mr-2 bg-gray-50 border rounded-full border-gray-200 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <Link to="/">
            <h1 className="cursor-pointer text-xl">
              <span className="font-bold">Hobby</span>Hub
            </h1>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {currentUser ? (
          <div className="navbar-end gap-2">
            <ThemeToggle />
            <button onClick={clickHandler} className="btn">
              Logout
            </button>

            <div
              data-tooltip-id="my-tooltip"
              data-tooltip-content={currentUser.displayName}
              className="avatar"
            >
              <div className="w-11 rounded-full border-2 border-gray-300 shadow cursor-pointer">
                <img src={currentUser.photoURL || ""} alt="User avatar" />
              </div>
            </div>
          </div>
        ) : (
          <div className="navbar-end gap-2">
            <ThemeToggle />
            <Link to="/register" className="btn">
              Register
            </Link>
            <Link to="/login" className="btn">
              Login
            </Link>
          </div>
        )}
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Navbar;
