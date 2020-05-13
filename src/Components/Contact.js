import React from 'react'
import Fade from 'react-reveal/Fade'

const Contact = (props) => {
  const name = props.personal.name
  const email = props.personal.email
  const location = props.personal.location
  const image = props.personal.image
  const about = props.personal.about
  return (
    <div className='contact'>
      <h2 className='section-title'> contact </h2>
      <Fade bottom>
        <div className='about-grid'>
          <div className='about'>
            <img className='contact-img' src={image} alt="Lawrence Gabriel Castillo"></img>
            <h2 className='contact-h2'> {name} - {location} </h2>
            <p className='contact-p'> {about} </p>
            <button className='contact-button'><a href={`mailto:${email}`} rel="noopener noreferrer" > Get in Touch </a></button>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default Contact;