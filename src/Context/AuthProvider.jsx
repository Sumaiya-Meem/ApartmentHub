import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";



export const AuthContext =createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
   

    const [user,setUser]=useState(null)

    const [loading,setLoading]=useState(true)

    // create new user
    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user
    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // find current user

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log("Current User ",currentUser)
            setLoading(false)
          });
          return ()=>{
            return unSubscribe();
          }
    },[])

    // update user profile
    const updateUserProfile =(name,photo)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }
    // google signin
    
     const signInWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
     }
    // logout user 

    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }



    const authInfo={
       user,
       loading,
       createUser,
       signIn,
       logOut,
       updateUserProfile ,
       signInWithGoogle,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;