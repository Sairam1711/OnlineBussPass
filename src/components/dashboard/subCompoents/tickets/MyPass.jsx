import React from "react";
import Button from "@mui/material/Button";
import logo_fill from "../../../../assest/Svg/Logo-fill.svg";
import { useNavigate } from "react-router-dom";
import { path } from "../../../../constant";
function MyPass() {
  const navigate=useNavigate()
  return (
    <div className="flex flex-col h-full w-screen items-center justify-normal  gap-y-3 ">
      <div className="flex w-[90vw] justify-between m-5">
        <span className="flex flex-col font-bold">My Passses </span>
        <Button onClick={()=>{
     navigate(path.dashbord+"/"+path.buypass)
     }} variant="contained" color="warning">
          Buy Pass
        </Button>
      </div>
      <div className="w-[90vw] h-[75vh] flex flex-col gap-5 overflow-auto" >
      {[1,1,1,1,1,1,1,1,1,1,1].map(element=><div className="flex justify-between w-full">
     
     <div className="flex gap-3">
     <img src={logo_fill}></img>{" "}
     <span className="font-bold flex items-center"> JAN PASS</span>{" "}
     <span className=" flex items-center text-green-500 "> Active</span>{" "}
     </div>
   
     <Button onClick={()=>{
     navigate(path.dashbord+"/"+path.mtcPass)
     }}  variant="contained" color="warning">
       View
     </Button>
   </div>) }
      </div>
    </div>
  );
}

export default MyPass;
