import React, { ReactNode, FC } from "react";
import { AuthContext, AuthContextType } from "../contexts/AuthContext";
import { Navigate, useLocation } from "react-router"; // ✅ react-router-dom for web
import { useContext } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const location = useLocation();
  const { currentUser } = useContext(AuthContext) as AuthContextType;

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
