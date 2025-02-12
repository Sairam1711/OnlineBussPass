import React, { useEffect, useState } from "react";
import "./home.css";
import logo from "../../assest/Svg/Logo.svg";
import logo_fill from "../../assest/Svg/Logo-fill.svg";
import image from "../../assest/Svg/Image.svg";
import { useNavigate } from "react-router-dom";
import { path } from "../../constant";
function Home() {
  const [isVisible, setIsVisible] = useState(true);
const navigate =useNavigate()
  useEffect(() => {
    // Set a timeout to hide the element after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <>
      {isVisible ? (
        <div className="home flex flex-col items-center justify-center ">
          <img className="blinking-text w-10" src={logo}></img>
          <h1 className="header ">OnlineBussPass </h1>
        </div>
      ) : (
        <div className="HomePage flex flex-col items-center justify-center ">
          <div className="flex flex-col items-center justify-center">
          <img className="w-10" src={logo_fill}></img>
          <h1 className="header2 ">OnlineBussPass </h1>
          </div>
         
          <img className="image-home" src={image}>
          </img>
          <div className="home-content">
            <h1>
            Welcome
            </h1>
            <p>
            Let's pick your next bus ticket from EasyBusPass
            </p>
            <span>
            Offering a user-friendly interface and flexible options for a stress-free travel experience. Simplify your journey choose EasyBusPass today.
            </span>
          </div>
          <button onClick={()=>{
navigate(path.signup)
          }} className="button primary-button lg:w-48">
          Signup Now
          </button>
          <button  onClick={()=>{
            navigate(path.login)
          }}className="button secondary-button ">
          Login Now
          </button>
        </div>
      )}
    </>
  );
}

export default Home;
