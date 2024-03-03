import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { auth } from "../Config/firebase.config";

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {

      const [user, setUser] = useState(null);
      const [isLoading, setIsLoading] = useState(true);

      const createUser = (email, password) => {
            setIsLoading(true);
            return createUserWithEmailAndPassword(auth, email, password);
      };

      const login = (email, password) => {
            setIsLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
      };

      const googleLogin = () => {
            return signInWithPopup(auth, googleProvider);
      };

      const logOut = () => {
            setIsLoading(true);
            return signOut(auth);
      };


      const handleUpdateProfile = (name, photo) => {
            return updateProfile(auth.currentUser, {
                  displayName: name, photoURL: photo
            })

      }


      useEffect(() => {
            const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
                  const userEmail = currentUser?.email || user?.email;
                  const LoggedUser = { email: userEmail };

                  setUser(currentUser);
                  setIsLoading(false);
                  if (currentUser) {

                        axios.post('http://localhost:5000/jwt', LoggedUser,
                              { withCredentials: true })
                              .then(res => {
                                    console.log('token response', res.data);

                              })

                  }
                  else {
                        axios.post('http://localhost:5000/logout', LoggedUser, {
                              withCredentials: true
                        })
                              .then(res => {
                                    console.log(res.data);

                              })

                  }


            });

            return () => {
                  return unSubsCribe();
            };

      }, []);

      const authInfo = {
            createUser,
            login,
            user,
            isLoading,
            logOut,
            googleLogin,
            handleUpdateProfile


      };

      return (

            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>

      );


};

export default AuthProvider;