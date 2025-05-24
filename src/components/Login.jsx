import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { signInUser, continueWithGithub } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then(() => {
        toast.success("Login Successful.");
        navigate(location?.state || "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(errorCode);
      });
  };
  const handleGithubLogin = () => {
    continueWithGithub()
      .then(() => {
        toast.success("Continue with github successful");
        // console.log(currentUser);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        toast.error(errorCode);
      });
  };
  return (
    <div className="h-[70vh] flex flex-col justify-center">
      <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl text-center font-semibold">Login</h1>
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label">Email</label>
            <input
              required
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              required
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
            />
            <Link to={"/register"} className="link  text-blue-700">
              Register Now
            </Link>
            <button type="submit" className="btn bg-gray-600 hover:bg-gray-500 text-white mt-4">
              Login
            </button>
          </form>
          <div className="divider my-2">OR</div>
          <button onClick={handleGithubLogin} className="btn btn-neutral">
            <svg
              aria-label="GitHub logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
              ></path>
            </svg>
            Login with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
