import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { currentUser } = use(AuthContext);
  if (!currentUser) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
