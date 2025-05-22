import React from "react";
import { AuthContext } from "./AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe; // cleanup
  }, []);

  const userInfo = {
    currentUser,
  };

  return <AuthContext value={userInfo}>{!loading && children}</AuthContext>;
};

export default AuthProvider;
