import { createContext, useState } from "react";
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

import { useEffect } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import auth from "../firebase/firebase.config";

export const ContextProvider = createContext()

const googleProvider = new GoogleAuthProvider()

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();
    

 
    const createUser = (email, password) =>{
        setLoading(true)
        return  createUserWithEmailAndPassword(auth,email,password);
        
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(()=> {
          const unSubsCriber = onAuthStateChanged(auth, currentUser=> {
               setUser(currentUser);
               
               if(currentUser){
                       
                      const userInfo = {email: currentUser?.email};
                      axiosPublic.post('/jwt', userInfo)
                      .then(res=> {
                            
                            if(res.data.token){
                                   localStorage.setItem('access-token', res.data.token);
                            }
                      })
               }
               else{
                         localStorage.removeItem('access-token');
               }

               setLoading(false);
          });
         
          return()=>{
            return unSubsCriber();
          }
          
    }, [axiosPublic])


const authInfo = {
      createUser,
      signInUser,
      signInGoogle,
      loading,
      user,
      logOutUser
}

    return (
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;