/* eslint-disable react/prop-types */
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import app from "../config/firebase.config";



 export const AuthContext = createContext(null)
 const auth=getAuth(app)

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const loginUser=(email,password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const createUser=(email,password)=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setIsLoading(true)
        return signOut(auth)
    }
useEffect(()=>{
  const unSubscribe=  onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    
        setIsLoading(false)
    })

return ()=>{
    return unSubscribe()
}
},[])

    const authIfno = {
        logOut,
        createUser,
    isLoading,
        user,
        loginUser
    }
    return (
        <AuthContext.Provider value={authIfno}>
{children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;