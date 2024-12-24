import React from "react";
import "./login.css";
import logo_fill from "../../assest/Svg/Logo-fill.svg";
import Input from "../UI-Utils/Input";
function Login() {
  return (
    <div className="login flex coloum start ">
      <div className="flex coloum">
        <img className="mt-66" src={logo_fill}></img>
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
      <button className="button secondary-button">Login Now</button>
      <span className="login-footer-content">
        I don’t have an account? Signup Now.
      </span>
    </div>
  );
}

export default Login;
