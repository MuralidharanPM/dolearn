import React from 'react';
import Navbarlogo from "../assets/dolearn-plainpng.png";
import "../components/Navbar.css";

export default function Navbar() {
    return (
        <div className='navbarPCls'>
            <div className='navbarCCls'>
                <div className='navImageHeadPCls'>
                    <img className='navImageCls' alt='navbar logo is added here' src={Navbarlogo}/>
                </div>
                <div className='navButtonAreaCls'>
                    <button className='navbarBBtnCls'>Home</button>
                    <button className='navbarBBtnCls'>About Us</button>
                    <button className='navbarBBtnCls'>Course Offered</button>
                    <button className='navbarBBtnCls'>Contact Us</button>
                    <button className='navbarBBtnCls'>FAQ</button>
                    <button className='navgetStartedBtn'>Get Started</button>
                </div>
            </div>
        </div>
    )
}
