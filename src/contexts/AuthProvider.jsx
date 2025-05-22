import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe; // cleanup
  }, []);
  const userInfo = {};
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
