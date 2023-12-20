import React, { Fragment, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/router";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Register = () => {
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const [username, setUsername] = useState([]);
  const [email, setEmail] = useState([]);
  const [password, setPassword] = useState([]);
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !password || !username) return;
    try {
      let createdUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(createdUser);
      let updateName = await updateProfile(auth.currentUser, {
        displayName: username,
      });
      router.push("/homepage");
    } catch (error) {
      console.log(error);
    }
  };
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
  return (
    <Fragment>
      <div className="main_container">
        <div className="main_container_login_Wrapper">
          <div className="main_container_login-heading">
            <h1>Register your account</h1>
          </div>
          {/* <div className="main_container_login_GOOGLE_BUTTON">
            <button onClick={signInGoogle}>
              {" "}
              <span>
                <FcGoogle />
              </span>{" "}
              LOGIN WITH GOOGLE
            </button>
          </div> */}
          <div className="main_container_login_form-container">
            <form id="form-container">
              <label>Enter your fullName</label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
                type="text"
                placeholder="enter your Full Name"
              />
              <label>Enter your Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="enter your Email"
              />
              <label>Enter your password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="text"
                placeholder="enter your Password"
              />
              <button onClick={submitHandler}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
