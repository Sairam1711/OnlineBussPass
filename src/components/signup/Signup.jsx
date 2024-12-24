import React from 'react'
import "./signup.css";
import logo_fill from "../../assest/Svg/Logo-fill.svg";
import Input from "../UI-Utils/Input";
function Signup() {
    return (
      <div className='signup flex coloum'>
   <div className="flex coloum">
        <img className="mt-66" src={logo_fill}></img>
        <h1 className="header2">OnlineBussPass </h1>
      </div>

      <h1 className="login-header">Create a new Account with us! </h1> 
      <Input lable="Email/Phone" placeholder="Enter your email"></Input>
      <Input lable="Full Name" placeholder="Enter your name"></Input>
      <Input lable="password" placeholder="*********" type={"password"}></Input>
      <Input lable="Re-type password" placeholder="*********"></Input>
      <div className="login-footer flex sb">
        <span className="flex ">
          <input className="checkbox" type="checkbox"></input>
          I agree term’s and Conditions
        </span>
       
      </div>
      <button className="button secondary-button">Signup Now</button>
      <span className="login-footer-content">
      Already have an account? Login Now.
      </span>
      </div>
    )
}

export default Signup
