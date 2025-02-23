import React, { useState } from "react";
import "./signup.css";
import logo_fill from "../../assest/Svg/Logo-fill.svg";
import Input from "../UI-Utils/Input";
import { useNavigate } from "react-router-dom";
import authService from "../../utils/services/authService";

function Signup() {
  const navigate = useNavigate();
  
  // State to store input values and errors
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;
    console.log( name, value, type, checked);
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    let errors = {};
    if (!formData.email) {
      errors.email = "Email/Phone is required";
    }
    if (!formData.fullName) {
      errors.fullName = "Full Name is required";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!formData.termsAccepted) {
      errors.termsAccepted = "You must accept the Terms and Conditions";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validateForm()) {
     await authService.signUp(formData)
      // Navigate to login page or dashboard after signup
      navigate("/"); 
    }
  };

  return (
    <div className="signup flex flex-col items-center justify-start">
      <div className="flex flex-col items-center justify-start">
        <img className="mt-6 w-10" src={logo_fill} alt="Logo" />
        <h1 className="header2">OnlineBussPass</h1>
      </div>

      <h1 className="login-header">Create a new Account with us!</h1>

      {/* Email Input */}
      <Input
        lable="Email/Phone"
        placeholder="Enter your email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <span className="error">{errors.email}</span>}

      {/* Full Name Input */}
      <Input
        lable="Full Name"
        placeholder="Enter your name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />
      {errors.fullName && <span className="error">{errors.fullName}</span>}

      {/* Password Input */}
      <Input
        lable="Password"
        placeholder="*********"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <span className="error">{errors.password}</span>}

      {/* Confirm Password Input */}
      <Input
        lable="Re-type password"
        placeholder="*********"
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      {errors.confirmPassword && (
        <span className="error">{errors.confirmPassword}</span>
      )}

      {/* Terms and Conditions Checkbox */}
      <div className="login-footer flex sb">
        <span className="flex">
          <input
            className="checkbox"
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
          />
          I agree to the Terms and Conditions
        </span>
      </div>
      {errors.termsAccepted && (
        <span className="error">{errors.termsAccepted}</span>
      )}

      {/* Signup Button */}
      <button className="button secondary-button" onClick={handleSubmit}>
        Signup Now
      </button>

      {/* Already have an account */}
      <span className="login-footer-content">
        Already have an account? <span onClick={() => navigate("/login")}>Login Now</span>.
      </span>
    </div>
  );
}

export default Signup;
