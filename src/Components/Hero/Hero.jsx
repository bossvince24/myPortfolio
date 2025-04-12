import React from 'react'
import './Hero.css'
import heroImage from '../../assets/hero-removebg-preview.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resumeFile from '../../assets/Alex Latest Resume.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={heroImage} alt="" />
      <h1> <span>I'm Alex John,</span> a Software Engineer and Java Developer.</h1>
      <p>I am a software engineer and java developer with 2 years of experience.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">
          <a href={resumeFile} download="Alex John Mataac Resume.pdf">My resume</a>
          </div>
      </div>
    </div>
  )
}

export default Hero
