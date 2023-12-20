import React, { Fragment, useEffect } from 'react'
import { useState } from 'react';
import { auth } from "@/firebase/firebase";
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/router';
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useAuth } from '@/firebase/auth';
const Login = () => {
  const provider = new GoogleAuthProvider();
  const [email,setEmail]=useState(null);
    const [password,setPassword]=useState(null);
    const {authUser,isLoading}=useAuth();
    console.log(authUser,isLoading);
    const signInGoogle = async (e) => {
      e.preventDefault();
      try {
          const googleUser = await signInWithPopup(auth, provider);
          console.log(googleUser);
          router.push("/homepage");
      } catch (error) {
          console.error("error occured",error);
      }
      
    };
    const submitHandler= async (e)=>{
        e.preventDefault();
        if(!email || !password)return;
        try {
          const user=await signInWithEmailAndPassword(auth,email,password);
          console.log(user);
        } catch (error) {
          console.error(error);
        }
    } 
    const router=useRouter();
  //   useEffect(() => {
  //     if (!isLoading && authUser) {
  //         router.push("/");
  //     }
  // }, [authUser, isLoading]);
  return (
    <Fragment>
     <div className='main_container'>
       <div className='main_container_login_Wrapper'>
          <div className='main_container_login-heading'>
              <h1>Login into your account</h1>
          </div>
          <div className="main_container_login_GOOGLE_BUTTON">
            <button onClick={signInGoogle}>
              <span>
                <FcGoogle />
              </span>
              LOGIN WITH GOOGLE
            </button>
          </div>
          <div className='main_container_login_form-container'>
              <form >
                 <label >Enter your Email</label>
                 <input type="email" required onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='enter your email' />
                 <label >Enter your password</label>
                 <input type="text" onChange={(e)=>setPassword(e.target.value)} value={password} required placeholder='enter your password'/>
                 <button onClick={submitHandler} >submit</button>
              </form>
          </div>
       </div>
     </div>
    </Fragment>
  )
}

export default Login