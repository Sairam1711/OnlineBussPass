import React from "react";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import { green } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { path } from "../../../../constant";
import Logout from "../../../Logout";
const PassCard=({title,description,buttonText,_onclick}) =>{
  return( <div className="w-[90%]  bg-white shadow-lg rounded-lg p-6 border">
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    <p className="text-gray-600 text-sm mb-4">{description}</p>
    <button onClick={_onclick} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
      {buttonText}
    </button>
  </div>)
}
function Lobby({user}) {
  const navigate=useNavigate()
  return (
    <div className="flex flex-col w-[95vw] m-5 gap-10">
      <div className="flex items-center justify-between">
      <div className="flex items-center gap-3 ">
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <div className="flex flex-col font-bold">
          
          <span>Hi</span> <span>{user.name}</span>
        </div>
      </div>

      <Avatar sx={{ bgcolor: green[500] }}>
        <NotificationsRoundedIcon />
      </Avatar>
    </div>
    <div className="flex flex-col gap-5 w-full justify-center items-center ">
   <PassCard title={"My pass"} description={"this Month pass"} buttonText={"View"} _onclick={()=>{
navigate(path.dashbord+"/"+path.mtcPass)
   }}></PassCard>
      <PassCard title={"Need buy pass"} description={"click below button"} buttonText={"BUY"} _onclick={()=>{
           navigate(path.dashbord+"/"+path.buypass)
           }}></PassCard>
           <Logout></Logout>
    </div>
   
    </div>
    
  );
}

export default Lobby;
