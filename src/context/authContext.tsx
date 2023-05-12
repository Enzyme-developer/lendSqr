import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebaseConfig";
import { AuthContextType, Props } from "../types";

export const AuthContext = createContext({} as AuthContextType);

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState({});

  //check auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      setUser(currentUser);

      return () => {
        unsubscribe();
      };
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
