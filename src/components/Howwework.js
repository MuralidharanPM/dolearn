import React from 'react';
import "../components/Howwework.css";
import One from "../assets/caroImageone.png";
import Two from "../assets/caroImagetwo.png";
import Three from "../assets/caroImagethree.png";
import Four from "../assets/caroImagefour.png";
import Five from "../assets/caroImagefive.png";
import VerticalCarousel from './Verticalcarousel';

export default function Howwework() {
    const redirectToLink = () => {
        window.location.href = 'https://share.hsforms.com/1WI-c34qVScyQ6LdFKUgIRgr9ton';
    };
    const items = [One, Two, Three, Four, Five];
    return (
        <div className='howPgPCls'>
            <div className='howPgCCls'>
                <div className='howWeWorkHeaderCls'>How we work ?</div>
                <VerticalCarousel items={items} />
                <div className='howweworkFootCls'>
                    <button className='exploreBtnCls' onClick={redirectToLink}>Explore Courses</button>
                    <button className='getStartBtnCls' onClick={redirectToLink}>Get Started</button>
                </div>
            </div>
        </div>
    )
}
