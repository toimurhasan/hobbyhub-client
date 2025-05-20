import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
      <div className="h-screen flex flex-col justify-center">
        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl text-center font-semibold">Register</h1>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" className="input w-full" placeholder="Name" />
              <label className="label">Email</label>
              <input type="email" className="input w-full" placeholder="Email" />
              <label className="label">Photo</label>
              <input type="text" className="input w-full" placeholder="Photo URL" />
              <label className="label">Password</label>
              <input type="password" className="input w-full" placeholder="Password" />
              <Link to={"/login"}>
                <a className="link  text-blue-700">Login Now</a>
              </Link>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
