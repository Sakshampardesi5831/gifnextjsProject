import {useContext,createContext,useEffect,useState} from 'react';
import {onAuthStateChanged,signOut as authSignout} from "firebase/auth"
import { auth } from './firebase';
const AuthUserContext=createContext({
    authUser:null,
    isLoading:false
});
const clear=()=>{
    setauthUser(null);
    setisLoading(false);
}
export default function useFirebaseAuth(){
    const [authUser,setauthUser]=useState([]);
    const [isLoading,setisLoading]=useState(true);
    // console.log(authUser,isLoading);
    const authStateChange= async (user)=>{
       setisLoading(true);
       if(!user){
         clear();
         return;
       }
       setauthUser({
        uid:user.uid,
        email:user.email,
        username:user.displayName,
       })
       setisLoading(false);
      
    }
    const signOut=()=>{
        authSignout(auth).then(function(){
              clear();
        })
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,authStateChange);
       return ()=>unsubscribe();
    },[])
    return ({authUser,setauthUser,isLoading,signOut});
}

 export const  AuthUserProvider=({children})=>{
    const auth=useFirebaseAuth();
     return (
        <AuthUserContext.Provider value={auth}>
            {children}
        </AuthUserContext.Provider>
     )
 }

export  const useAuth=()=> useContext(AuthUserContext);
