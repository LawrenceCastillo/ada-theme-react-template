import React from 'react'
import Fade from 'react-reveal/Fade'
import './header.styles.css'

export const Header = props => {
  const background_url = props.personal.background_url
  const name = props.personal.name
  const headline = props.personal.headline
  const email = props.personal.email
  return (
    <div className='home'>
      <div 
        className='header'
        style={{ backgroundImage: `url(${background_url})`}}>
        <h1 className='header-h1'><Fade bottom> {name} </Fade></h1>
        <h1 className='header-h2'><Fade bottom> {headline} </Fade></h1>
        <button className='header-email-button'>
          <a 
            href={`mailto:${email}`} 
            rel="noopener noreferrer" > 
              Get in Touch 
          </a>
        </button>
      </div>
    </div>
  )
}