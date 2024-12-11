import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png"
const Login = () => {
  const [signUpState,setSignUpState] = useState("Login");
  return (
    <div className="login-signup">
      <img src={logo} alt="logo" />
      <div className="form">
        <h2>{signUpState}</h2>
        {
          signUpState==="Login"?
          <div></div> :<div className="fields">
          <i className="user icon"></i>
          <input type="text" placeholder="Enter Name" />
        </div>
        }
        <div className="fields">
          <i className="mail icon"></i>
          <input type="email" placeholder="Enter Email" />
        </div>
        <div className="fields">
          <i className="key icon"></i>
          <input type="password" placeholder="Enter Password" />
        </div>
        <div className="fields buttons">
          <button type="submit" className={`ui button ${signUpState==="Login"?"red":"gray"}`}>Sign Up</button>
          <button type="submit" className={`ui button ${signUpState==="Sign Up"?"red":"gray"}`}>Login</button>
        </div>
        <div className="user-options">
         {
          signUpState==="Login"?
          <p>
          Don't have account<span onClick={()=>{
            setSignUpState("Sign Up")
          }}>Sign Up</span>
        </p>:
        <p>
          Already have account<span onClick={()=> {
            setSignUpState("Login")
          }}>Login</span>
        </p>
         }
        </div>
      </div>
    </div>
  );
};

export default Login;
