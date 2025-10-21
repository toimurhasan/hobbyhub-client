
import { createContext } from "react";
import { User } from "firebase/auth";

export interface AuthContextType {
  currentUser: User | null;
  createUser: (email: string, password: string) => Promise<any>;
  signInUser: (email: string, password: string) => Promise<any>;
  signOutUser: () => Promise<void>;
  continueWithGithub: () => Promise<any>;
  updateUserInfo: (displayName: string, photoURL: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | null>(null);
