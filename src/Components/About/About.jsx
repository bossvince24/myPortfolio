import React from 'react'
import './About.css'
import profileImage from '../../assets/mee-removebg-preview.png'
import image from '../../assets/design3-removebg-preview.png'
import { RxPerson }  from 'react-icons/rx' 
import { LiaBirthdayCakeSolid } from 'react-icons/lia'
import { IoCalendarNumberSharp } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6"
import { FaMapLocationDot } from "react-icons/fa6";
import { FiActivity } from "react-icons/fi";

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <div className="about-para">
                        <p>I am a new software engineer and Java developer who continuously grows and learns with my experiences.</p>
                    </div>
                    <div className='about-info'>
                        <div className="info-item">
                            <RxPerson className='info-icon'/>
                            <strong>Name: </strong> Alex John Vincent O. Mataac
                        </div>
                        <div className="info-item">
                            <LiaBirthdayCakeSolid className='info-icon'/>
                            <strong>Birthday: </strong> August 31, 1999
                        </div>
                        <div className="info-item">
                            <IoCalendarNumberSharp className='info-icon'/>
                            <strong>Age: </strong> 25 years old
                        </div>
                        <div className="info-item">
                            <FaGraduationCap className='info-icon'/>
                            <strong>Education: </strong> Bachelor of Science in Computer Engineering
                        </div>
                        <div className="info-item">
                            <FiActivity className='info-icon'/>
                            <strong>Hobbies: </strong> playing basketball and online games, watching movies
                        </div>
                        <div className="info-item">
                            <FaMapLocationDot className='info-icon'/>
                            <strong>Location: </strong> Bacoor, Cavite
                        </div>
                    </div>
                </div>
                <div className='about-right'>
                    <img src={profileImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
