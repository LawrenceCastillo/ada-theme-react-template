import React from 'react'
import Fade from 'react-reveal/Fade'
import { Skill } from './skill/skill.component'
import './contact.styles.css'

export const Contact = props => {
  const image = props.personal.image
  const about = props.personal.about
  const skills = props.personal.skills
  return (
    <div className='contact'>
      <h2 className='section-title'> contact </h2>
      <Fade bottom>
        <div className='about-grid'>
          <div className='about'>
            <img className='contact-img' src={image} alt="Lawrence Gabriel Castillo"></img>
            <h2 className='contact-h2'> About </h2>
            <p className='contact-p'> {about} </p>
            <p className='contact-p'> Here are a few of my (recent) favorite technologies: </p>
            <div className='skills-grid'>
              {skills.map((skill, index) => <Skill key = {index} skill={skill}></Skill>)}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}