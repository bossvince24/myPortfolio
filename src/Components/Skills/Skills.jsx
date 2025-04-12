import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div id='skills' className='skills'>
        <div className="skills-title">
            <h1>Skills</h1>
        </div>
      <div className="skills-content"><p>HTML & CSS</p><hr style={{width: "50%"}}/></div>
      <div className="skills-content"><p>React JS</p><hr style={{width: "30%"}}/></div>
      <div className="skills-content"><p>JavaScript</p><hr style={{width: "30%"}}/></div>
      <div className="skills-content"><p>Java</p><hr style={{width: "70%"}}/></div>
      <div className="skills-content"><p>Spring Boot</p><hr style={{width: "80%"}}/></div>
      <div className="skills-content"><p>Postgre SQL</p><hr style={{width: "20%"}}/></div>
      <div className="skills-content"><p>GitHub</p><hr style={{width: "90%"}}/></div>
      <div className="skills-content"><p>Docker</p><hr style={{width: "30%"}}/></div>
      <div className="skills-content"><p>SQL & Oracle</p><hr style={{width: "50%"}}/></div>
      <div className="skills-content"><p>Telerik Report Designer</p><hr style={{width: "60%"}}/></div> 
    </div>
    
  )
}

export default Skills
