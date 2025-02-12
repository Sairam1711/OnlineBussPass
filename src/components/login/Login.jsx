import React from "react";
import "./login.css";
import logo_fill from "../../assest/Svg/Logo-fill.svg";
import Input from "../UI-Utils/Input";
import { useNavigate } from "react-router-dom";
import { path } from "../../constant";
function Login() {
  const navigate =useNavigate()

  return (
    <div className="login flex flex-col items-center justify-start ">
      <div className="flex flex-col items-center justify-between w-[90vw] h-[80vh] ">
      <div className="flex flex-col items-center justify-start ">
        <img className="mt-6 w-10" src={logo_fill}></img>
        <h1 className="header2">OnlineBussPass </h1>
      </div>

      <h1 className="login-header">welcome </h1> 
      <Input lable="Email/Phone" placeholder="Enter your email"></Input>
      <Input lable="password" placeholder="*********" type={"password"}></Input>
      <div className="login-footer flex sb">
        <span className="flex ">
          <input className="checkbox" type="checkbox"></input>
          Remember Me
        </span>
        <span>Forgot Password</span>
      </div>
      <button onClick={()=>{
        navigate(path.dashbord)
      }} className="button secondary-button">Login Now</button>
      <span className="login-footer-content">
        I don’t have an account? Signup Now.
      </span>
      </div>
    </div>
  );
}

export default Login;
