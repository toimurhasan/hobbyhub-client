import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const userInfo = "hello world";
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
