import React from "react";
import { useEffect, useState } from "react";
import { app } from "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

import Google from "../img/google.png";
import Facebook from "../img/facebook.png";
import Github from "../img/github.png";
import Navbar from "../components/Navbar";

function Login() {
  const auth = getAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value };

    setData({ ...data, ...inputs });
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Firebase Authentication : Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={"google"}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" onClick={"facebook"}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={"github"}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input placeholder="Email" name="email" type="email" className="input-fields" onChange={(event) => handleInputs(event)} />
          <input placeholder="Password" name="password" type="password" className="input-fields" onChange={(event) => handleInputs(event)} />
          <button className="login-button" onClick={"loginData"}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
