import React from 'react';
import "../components/Footer.css";
import Navbarlogo from "../assets/dolearn-plainpng.png";

export default function Footer() {
    const year = new Date();
    return (
        <div className='footerGPCls'>
            <div className='footerPCls'>
                <div className='FooterCCls'>
                    <div className='FooterGCCls'>
                        <div className='FooterContainerCls'>
                            <div className='FooterContainerHeader'>
                                Do you have any question? Feel free to contact us
                            </div>
                            <div className='FooterCOntainerHeaderButton'>
                                <button>CONTACT US NOW</button>
                            </div>
                        </div>
                        <div className='FooterContSubArea'>
                            <div className='FooterSubTextBtns'>
                                <button className='FooterSubTextBtnCls'>Home</button>
                                <button className='FooterSubTextBtnCls'>About us</button>
                                <button className='FooterSubTextBtnCls'>Course Offered</button>
                                <button className='FooterSubTextBtnCls'>Contact Us</button>
                            </div>
                            <div className='FooterSubHandlesBtns'>
                                <button className='FooterSubHandlesBtnClsFacebook'></button>
                                <button className='FooterSubHandlesBtnClsTwitter'></button>
                                <button className='FooterSubHandlesBtnClsVimeo'></button>
                                <button className='FooterSubHandlesBtnClsYoutube'></button>
                            </div>
                        </div>
                        <div className='FooterRightsArea'>
                            <div className='FooterRightsSec'>
                                &copy; {year.getFullYear()} Do Learn. All rights reserved
                            </div>
                            <div className='FooterImgSec'>
                                <img className='FooterImgSecCls' alt='logo in footer' src={Navbarlogo} />
                            </div>
                            <div className='FooterTCsec'>
                                <button className='FooterTCSecCls'>Terms of Service</button>
                                <button className='FooterTCSecCls'>Privacy Policy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
