import React from 'react'
import './dashboard.css'
import HomeSvg from "../../assest/Svg/HomeSvg";
import ProfileSvg from '../../assest/Svg/ProfileSvg';
import PassSvg from '../../assest/Svg/PassSvg';
import SupportSvg from '../../assest/Svg/SupportSvg';
const IconwithText=({Src})=>{
return(
    <div className='icon-base flex coloum'>
<Src></Src>
    </div>
)
}
function Dashpoard() {
    return (
    <div className='dashboard flex coloum'>
<header className='dashboard_header flex  '>
    <IconwithText Src={()=><HomeSvg></HomeSvg>}></IconwithText>
    <IconwithText Src={()=><PassSvg></PassSvg>}></IconwithText>
    <IconwithText Src={()=><SupportSvg></SupportSvg>}></IconwithText>
    <IconwithText Src={()=><ProfileSvg></ProfileSvg>}></IconwithText>
{/* <HomeSvg></HomeSvg> */}
</header>

    </div>
    )
}

export default Dashpoard
