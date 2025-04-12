import React from 'react'
import './Experience.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { FaGraduationCap } from "react-icons/fa6"


const Experience = () => {
    return (
        <div id='experience' className='experience'>
            <div className="experience-title">
                <h1>Experience</h1>
            </div>
            <VerticalTimeline>
                <VerticalTimelineElement date='2018 - 2022'>
                    <h3 className='vertical-timeline-element-title'>BS Computer Engineering</h3>
                    <p className='vertical-timeline-element-description'>Emilio Aguinaldo College-Cavite</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement date='February - April 2022'>
                    <h3 className='vertical-timeline-element-title'>Mobile Development Front-End (OJT)</h3>
                    <p className='vertical-timeline-element-description'>Erovoutika Robotics and Automation Solutions</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement date='October 2022 - July 2023'>
                    <h3 className='vertical-timeline-element-title'>Junior Software Engineer</h3>
                    <p className='vertical-timeline-element-description'>Cognizant Softvision</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement date='April 2024 - Present'>
                    <h3 className='vertical-timeline-element-title'>Java Developer</h3>
                    <p className='vertical-timeline-element-description'>Bangko Sentral ng Pilipinas</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience
