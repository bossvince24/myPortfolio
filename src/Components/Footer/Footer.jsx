import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo1-removebg-preview.png'
import { FaUser, FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <div className="footer-social-icons">
                        <a href="https://www.linkedin.com/in/alex-john-vincent-mataac-55192a22a/">
                            <FaLinkedin className='footer-icon' />
                        </a>
                        <a href="https://github.com/bossvince24">
                            <FaGithub className='footer-icon' />
                        </a>
                        <a href="mailto:alexmataac057@gmail.com">
                            <MdEmail className='footer-icon' />
                        </a>
                    </div>
                    <p>Follow me on social media</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <FaUser className='user-icon' />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-subscribe">Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">@ 2025 Alex John. All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
