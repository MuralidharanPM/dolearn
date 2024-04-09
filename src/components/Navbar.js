import React from 'react';
import Navbarlogo from "../assets/dolearn-plainpng.png";
import "../components/Navbar.css";

export default function Navbar() {
    const redirectToLink = () => {
        window.location.href = 'https://share.hsforms.com/1WI-c34qVScyQ6LdFKUgIRgr9ton';
    };
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
                    <button className='navgetStartedBtn' onClick={redirectToLink}>Get Started</button>
                </div>
            </div>
        </div>
    )
}
