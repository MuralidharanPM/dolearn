import React from 'react';
import "../components/Aboutus.css";
import Aboutuslogo from "../assets/dolearn-whiteborderpng.png"

export default function Aboutus() {
  return (
    <div className='aboutUsPCls'>
        <div className='aboutUsCCls'>
            <div className='aboutusTitleCls'>
                About Us
            </div>
            <div className='aboutusContainerCls'>
                <div className='aboutContainerLeftSide'>
                    <img alt='about section logo added' className='aboutUsSecLogo' src={Aboutuslogo}/>
                </div>
                <div className='aboutContainerTextArea'>
                    <div className='aboutContainerTextSecCls'>
                        <div className='aboutContainerTextSecOneCls'>
                            At Dolearn, we're passionate about providing immersive learning experiences in UI/UX design and web development. Our platform provides hands-on, project-based approach through practical projects, ensuring a seamless transition from theory to real-world application . we're committed to providing an enriching educational experience that equips learners with the tools and knowledge to thrive in the dynamic landscape of digital design and development.
                        </div>
                        <div className='aboutContainerTextSecTwoCls'>
                            Join us as we delve into real-world projects, fostering creativity and technical expertise to empower our community for success.
                        </div>
                    </div>
                    <div className='aboutContainerBtnSecCls'>
                        <button>Explore Courses</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
