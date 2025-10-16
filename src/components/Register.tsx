import React, { useContext, useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate, Location } from "react-router"; // ✅ react-router-dom
import { AuthContext, AuthContextType } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const Register: React.FC = () => {
  const navigate = useNavigate();

  // ✅ Use useContext and cast to AuthContextType
  const { createUser, updateUserInfo } = useContext(AuthContext) as AuthContextType;

  const [password, setPassword] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

  // ✅ Handle live password validation
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setIsValid(passwordRegex.test(value));
  };

  // ✅ Handle form submit
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const passwordValue = (form.elements.namedItem("password") as HTMLInputElement).value;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const photo = (form.elements.namedItem("photo") as HTMLInputElement).value;

    createUser(email, passwordValue)
      .then(() => {
        updateUserInfo(name, photo)
          .then(() => {
            toast.success("Register Successful");
            // ✅ No location typing issues: navigate to root
            navigate("/");
          })
          .catch((error: { code: string }) => {
            toast.error(error.code);
          });
      })
      .catch((error: { code: string }) => {
        toast.error(error.code);
      });
  };

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-2xl text-center font-semibold">Register</h1>

          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label">Name</label>
            <input required name="name" type="text" className="input w-full" placeholder="Name" />

            <label className="label">Email</label>
            <input required name="email" type="email" className="input w-full" placeholder="Email" />

            <label className="label">Photo</label>
            <input required name="photo" type="text" className="input w-full" placeholder="Photo URL" />

            <label className="label">Password</label>
            <input
              onChange={handleChange}
              value={password}
              required
              name="password"
              type="password"
              className="input w-full"
              placeholder="Password"
            />

            <Link to="/login" className="link text-blue-700">
              Login Now
            </Link>

            <button type="submit" className="btn btn-neutral mt-4" disabled={!isValid}>
              Register
            </button>

            {!isValid && (
              <p className="text-xs text-red-600 mt-4">
                Password must be at least 6 characters and include both uppercase and lowercase letters.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
