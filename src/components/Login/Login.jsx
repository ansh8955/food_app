import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Login.css";
import { auth } from "../../Config/index";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Login = () => {
  const { currentUser, setLogin } = useAuth();
  const navigate = useNavigate();
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const users = JSON.parse(localStorage.getItem("users")) || []; // Retrieve users from local storage
  //   const user = users.find(user => user.email === email && user.password === password); // Find user with matching credentials
  //   if (user) {
  //     alert("Login Successful");
  //   } else {
  //     alert("Invalid Credentials");
  //   }
  // };

  // const handleSignup = (e) => {
  //   e.preventDefault();
  //   const users = JSON.parse(localStorage.getItem("users")) || []; // Retrieve users from local storage
  //   const newUser = { name, email, password };
  //   users.push(newUser); // Add new user to the list
  //   localStorage.setItem("users", JSON.stringify(users)); // Save updated user list to local storage
  //   alert("Signup Successful");
  // };

  async function handleSignup() {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("User signed up:", userCredential.user);

      navigate("/");
      setLogin(false);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  }

  async function handleLogin(e) {
    try {
      e.preventDefault();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed in:", userCredential.user.uid);
      navigate("/cart");
      setLogin(false);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  }

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-title">
          <h2>{state}</h2>
          <img
            onClick={() => {
              setLogin(false);
              navigate("/");
            }}
            src={assets.cross_icon}
            alt="close"
          />
        </div>
        <div className="login-input">
          {state === "Login" ? null : (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button onClick={state === "SignUp" ? handleSignup : handleLogin}>
          {state === "SignUp" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms and policy</p>
        </div>
        {state === "Login" ? (
          <p>
            \/ Create a new Account{" "}
            <span onClick={() => setState("SignUp")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account{" "}
            <span onClick={() => setState("Login")}>Login here</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
