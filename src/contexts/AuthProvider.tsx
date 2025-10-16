import React, { useEffect, useState, ReactNode } from "react";
import { AuthContext, AuthContextType } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const createUser = (email: string, password: string) =>
    createUserWithEmailAndPassword(auth, email, password);

  const signInUser = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

  const signOutUser = () => signOut(auth);

  const githubProvider = new GithubAuthProvider();
  const continueWithGithub = () => signInWithPopup(auth, githubProvider);

  const updateUserInfo = (displayName: string, photoURL: string) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, { displayName, photoURL });
    }
    return Promise.reject("No user is currently signed in.");
  };

  const userInfo: AuthContextType = {
    currentUser,
    createUser,
    signInUser,
    signOutUser,
    continueWithGithub,
    updateUserInfo,
  };

  return <AuthContext.Provider value={userInfo}>{!loading && children}</AuthContext.Provider>;
};

export default AuthProvider;
