import React, { useState } from "react";
import "./login.css";
import logo_fill from "../../assest/Svg/Logo-fill.svg";
import Input from "../UI-Utils/Input";
import { useNavigate } from "react-router-dom";
import { path } from "../../constant";
import authService from "../../utils/services/authService";

function Login() {
  const navigate = useNavigate();

  // State to store input values and errors
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validate form inputs
  const validateForm = () => {
    let errors = {};
    if (!formData.email) {
      errors.email = "Email/Phone is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validateForm()) {
      const { success, data, error }= await authService.signIn(formData)
      if(success){
        navigate(path.dashbord);
      }else{
        alert(error)
      }
    
    }
  };

  return (
    <div className="login flex flex-col items-center justify-start">
      <div className="flex flex-col items-center justify-between w-[90vw] h-[80vh]">
        <div className="flex flex-col items-center justify-start">
          <img className="mt-6 w-10" src={logo_fill} alt="Logo" />
          <h1 className="header2">OnlineBussPass</h1>
        </div>

        <h1 className="login-header">Welcome</h1>

        {/* Email Input */}
        <Input
          label="Email/Phone"
          placeholder="Enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        {/* Password Input */}
        <Input
          label="Password"
          placeholder="*********"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}

        {/* Remember Me & Forgot Password */}
        <div className="login-footer flex sb">
          <span className="flex">
            <input
              className="checkbox"
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            Remember Me
          </span>
          <span className="forgot-password">Forgot Password?</span>
        </div>

        {/* Login Button */}
        <button onClick={handleSubmit} className="button secondary-button">
          Login Now
        </button>

        {/* Signup Link */}
        <span className="login-footer-content">
          I don’t have an account?{" "}
          <span onClick={() => navigate(path.signup)} className="signup-link">
            Signup Now
          </span>
        </span>
      </div>
    </div>
  );
}

export default Login;
