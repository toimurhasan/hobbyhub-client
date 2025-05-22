import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  // const user = useContext(AuthContext);
  // console.log(user);
  const { currentUser, signOutUser } = use(AuthContext);
  console.log(currentUser?.photoURL);
  const clickHandler = () => {
    signOutUser()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/groups"}>All Groups</NavLink>
      </li>
      <li>
        <NavLink to={"/createGroup"}>Create Group</NavLink>
      </li>
      <li>
        <NavLink to={"/myGroups"}>My Groups</NavLink>
      </li>
    </>
  );

  return (
    <div className=" bg-base-100 shadow-md sticky top-0 z-10">
      <div className="navbar max-w-6xl mx-auto">
        <div className="navbar-start">
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
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="cursor-pointer text-xl">HobbyHub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        {currentUser ? (
          <div className="navbar-end gap-2">
            <button onClick={clickHandler} className="btn">
              Logout
            </button>
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={currentUser.photoURL} />
              </div>
            </div>
          </div>
        ) : (
          <div className="navbar-end gap-2">
            <Link to={"/register"} className="btn">
              Register
            </Link>
            <Link to={"/login"} className="btn">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
