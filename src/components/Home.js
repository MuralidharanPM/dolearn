import React from 'react';
import Homebanner from "../assets/homepagebanner.png";
import "../components/Home.css";

export default function Home() {
    const redirectToLink = () => {
        window.location.href = 'https://share.hsforms.com/1WI-c34qVScyQ6LdFKUgIRgr9ton';
    };
    return (
        <div className='homePgPCls'>
            <div className='homePgCCls'>
                <div className='homePgMainHeadCls'>
                    Embark on a Journey of Growth with New Skills
                </div>
                <div className='homePgSubHeadCls'>
                    Unlock Your Potential with Engaging Online Courses
                </div>
                <div className='homePgImgHeadCls'>
                    <img className='homePgBannerCls' src={Homebanner} alt='this is a home page banner' />
                </div>
                <div className='homePgImgContCls'>
                    Join Dolearn to delve into immersive industry experiences in UI/UX design and web development Explore real-world projects and enhance your skills for the digital landscape
                </div>
                <div className='homePgImgContBtnCls'>
                    <button onClick={redirectToLink}>Explore Courses</button>
                </div>
            </div>
        </div>
    )
}
