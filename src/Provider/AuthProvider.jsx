import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Config/firebase.config";

const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

      const [user, setUser] = useState(null)
      const [loading, setLoading] = useState(true)
  
      const createUser = (email, password) => {
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password)
      }
  
      const signIn = (email, password) => {
          setLoading(true)
          return signInWithEmailAndPassword(auth, email, password)
      }
  
      const signInWithGoogle = () => {
          setLoading(true)
          return signInWithPopup(auth, googleProvider)
      }
  
      const logOut = () => {
            setLoading(true);
            return signOut(auth);
      };
  
      const updateUserProfile = (name, photo) => {
          return updateProfile(auth.currentUser, {
              displayName: name,
              photoURL: photo,
          })
      }
  
      // onAuthStateChange
      useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, currentUser => {
              setUser(currentUser)
              setLoading(false)
          })
          return () => {
              return unsubscribe()
          }
      }, [])
  
  
  
      const authInfo = {
          user,
          createUser,
          signIn,
          signInWithGoogle,
          logOut,
          updateUserProfile,
          loading,
          setLoading
  
      }

      return (

            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>

      );


};

export default AuthProvider;