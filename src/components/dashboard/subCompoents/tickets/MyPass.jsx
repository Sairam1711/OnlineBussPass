import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import logo_fill from "../../../../assest/Svg/Logo-fill.svg";
import { useNavigate } from "react-router-dom";
import { path } from "../../../../constant";
import supabaseService from "../../../../utils/services/supabaseService";
function MyPass() {
  const [data,setdata]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
   const getpassed= async ()=>{
      const passes=await supabaseService.getData("passes",1,10)
      setdata(passes.data)
    }
    getpassed()
  },[])
 
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
      {data&&data.map(element=><div className="flex justify-between w-full">
     
     <div className="flex gap-3">
     <img src={logo_fill}></img>{" "}
     <span className="font-bold flex items-center"> {element.pass_type}</span>{" "}
     <span className=" flex items-center text-green-500 ">{ element.status}</span>{" "}
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
