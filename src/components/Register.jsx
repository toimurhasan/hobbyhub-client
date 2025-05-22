import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const Register = () => {
  const { createUser } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };
  return (
    <div>
      <div className="h-screen flex flex-col justify-center">
        <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-2xl text-center font-semibold">Register</h1>
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="label">Name</label>
              <input type="text" className="input w-full" placeholder="Name" />
              <label className="label">Email</label>
              <input name="email" type="email" className="input w-full" placeholder="Email" />
              <label className="label">Photo</label>
              <input type="text" className="input w-full" placeholder="Photo URL" />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input w-full"
                placeholder="Password"
              />
              <Link to={"/login"} className="link  text-blue-700">
                Login Now
              </Link>
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
