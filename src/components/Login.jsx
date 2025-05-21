import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center">
      <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl text-center font-semibold">Login</h1>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input w-full" placeholder="Email" />
            <label className="label">Password</label>
            <input type="password" className="input w-full" placeholder="Password" />
            <Link to={"/register"}>
              <a className="link  text-blue-700">Register Now</a>
            </Link>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
