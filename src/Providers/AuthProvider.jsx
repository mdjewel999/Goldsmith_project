import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
//   const googleProvider = new GoogleAuthProvider();

  // create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // signIn
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google Sign In
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}

  // logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // sign In With Google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //googleProvider
  const googleProvider = new GoogleAuthProvider();

  
  // useEffect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      setLoading(false);
      if(currentUser && currentUser.email){
        const loggedUser = {
          email: currentUser.email
        }
        fetch('http://localhost:5000/toyBookings', {
          method: 'POST',
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify(loggedUser)
        }) 
        .then(res => res.json())
        .then(data =>{
          console.log('jwt response', data);

          localStorage.setItem('car-access-token', data.token)
        })
      }
      else{
        localStorage.removeItem('car-access-token');
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    signInWithGoogle,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      </AuthContext.Provider>
  );
};

export default AuthProvider;
