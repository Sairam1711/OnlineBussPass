import React from 'react'
import './dashboard.css'

import HomeSvg from "../../assest/Svg/HomeSvg";
import ProfileSvg from '../../assest/Svg/ProfileSvg';
import PassSvg from '../../assest/Svg/PassSvg';
import SupportSvg from '../../assest/Svg/SupportSvg';

import { Outlet, useNavigate } from 'react-router-dom';
import { path } from '../../constant';
const IconwithText=({Src,_onClick})=>{
return(
    <div onClick={_onClick} className='icon-base items-center justify-center '>
<Src></Src>
    </div>
)
}
function Dashpoard() {
    const navigate=useNavigate()
    return (
    <div className='dashboard flex justify-center items-baseline' >
<header className='dashboard_header flex justify-center '>
    <IconwithText _onClick={()=>{
navigate(path.lobby)
    }} Src={()=><HomeSvg></HomeSvg>}></IconwithText>
    <IconwithText _onClick={()=>{
navigate(path.myPass)
    }} Src={()=><PassSvg></PassSvg>}></IconwithText>
    <IconwithText Src={()=><SupportSvg></SupportSvg>}></IconwithText>
    <IconwithText Src={()=><ProfileSvg></ProfileSvg>}></IconwithText>
{/* <HomeSvg></HomeSvg> */}
</header>
   <Outlet>

   </Outlet>

    </div>
    )
}

export default Dashpoard
