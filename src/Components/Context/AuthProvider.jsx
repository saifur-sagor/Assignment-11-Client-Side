import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // create user
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google signIn
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // signOut

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // update profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);
  const authInfo = {
    registerUser,
    signInUser,
    googleSignIn,
    logOut,
    updateUserProfile,
    user,
    setUser,
    loading,
    setLoading,
  };
  console.log("auth");

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
