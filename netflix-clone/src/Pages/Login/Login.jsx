import React, { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png"
import { login, signup } from "../../firebase";
import { toast } from "react-toastify";


const Login = () => {
  const [signUpState,setSignUpState] = useState("Login");
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const user_auth = async (e) => {
    e.preventDefault()
    if (signUpState === "Login"){
      await login(email,password)
    }
    else{
      await signup(name,email,password);
    }
  }

  return (
    <div className="login-signup">
      <img src={logo} alt="logo" />
      <div className="form">
        <h2>{signUpState}</h2>
        {
          signUpState==="Login"?
          <div></div> :<div className="fields">
          <i className="user icon"></i>
          <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        }
        <div className="fields">
          <i className="mail icon"></i>
          <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="fields">
          <i className="key icon"></i>
          <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="fields buttons">
          <button type="submit" onClick={user_auth} className={`ui button ${signUpState==="Login"?"red":"primary"}`}>{signUpState}</button>
          {/* <button type="submit" className={`ui button ${signUpState==="Sign Up"?"red":"gray"}`}>Login</button> */}
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
