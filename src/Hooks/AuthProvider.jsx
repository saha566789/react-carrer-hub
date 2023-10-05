import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, 
    GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from './firebase.config'




export const AuthContext = createContext(null);
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
  const [user,setUser] = useState()


    const googleSignIn = () =>{
        
        return signInWithPopup(auth,googleProvider)
    }
   
    const signUp = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log("state changed")
         setUser(currentUser)
        })
        return (()=>{
         return   unsubscribe()
        })
     },[])

      const logout = () =>{
        return signOut(auth);
      }


    const AuthInfo = {
        googleSignIn,
        signUp,
        signIn,
        user,
        logout
    }
    return (
       <AuthContext.Provider value={AuthInfo}>
           {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;