import React, { useState } from 'react';
import "../components/Courseoffered.css";
import Uiuxbanner from "../assets/UIUXDevelopment.png";
import Webdevelopmentbanner from "../assets/Webdevelopment.png";

export default function Courseoffered() {
    let [courseType, setCourseType] = useState(true);
    return (
        <div className='courseOffPCls'>
            <div className='courseOffCCls'>
                <div className='courseOffHeadTitleCls'>Courses Offered</div>
                <div className='courseOffHeadButtonsCls'>
                    <div className={ courseType === true ? "courseBtnActive" : "courseBtnInActive" }>
                        <button className='courseBtnCls uiuxCourseBtn' onClick={() => setCourseType(true)}>UI/UX Design</button>
                    </div>
                    <div className={ courseType === false ? "courseBtnActive" : "courseBtnInActive" }>
                        <button className='courseBtnCls webDevCourseBtn' onClick={() => setCourseType(false)}>Web Development</button>
                    </div>
                </div>
                {
                    courseType ?
                        <div className='courseOffContentPCls'>
                            <div className='courseOffSubHeaderTitleCls'>Craft Seamless User Experiences with UI/UX Design</div>
                            <div className='uiuxCourseBannerHolder'>
                                <img className='uiuxCourseImgCls' alt='UI UX Course Banner is added' src={Uiuxbanner} />
                            </div>
                            <div className='courseOffBannerContCls'>
                                <div className='courseIffBanContOneCls'>
                                    Explore the world of UI/UX design and learn how to create captivating digital experiences that users love
                                </div>
                                <div className='courseIffBanContTwoCls'>
                                    From wireframing to prototyping, our courses cover everything you need to know to excel in this dynamic field.
                                </div>
                            </div>
                            <div className='courseOffFootBtnHeadCls'>
                                <button className='courseOffFootBtnCls'>Explore Course</button>
                            </div>
                        </div> :
                        <div className='courseOffContentPCls'>
                            <div className='courseOffSubHeaderTitleCls'>Unleash Your Potential in Web Development</div>
                            <div className='uiuxCourseBannerHolder webbanner'>
                                <img className='uiuxCourseImgCls' alt='Web Degvelopment Course Banner is added' src={Webdevelopmentbanner} />
                            </div>
                            <div className='courseOffBannerContCls'>
                                <div className='courseIffBanContOneCls'>
                                    Embark on a journey to master the art of web development with our comprehensive courses
                                </div>
                                <div className='courseIffBanContTwoCls'>
                                    From coding fundamentals to advanced techniques, our expert-led curriculum equips you with the skills needed to build stunning websites and web applications.
                                </div>
                            </div>
                            <div className='courseOffFootBtnHeadCls'>
                                <button className='courseOffFootBtnCls'>Explore Course</button>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}
