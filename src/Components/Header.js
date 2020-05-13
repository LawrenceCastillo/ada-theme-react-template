import React from 'react'
import Fade from 'react-reveal/Fade'

const Header = (props) => {
  const name = props.personal.name
  const headline = props.personal.headline
  return (
    <div className='home'>
      <div className='header'>
        <h1 className='header-h1'><Fade bottom> {name} </Fade></h1>
        <h1 className='header-h2'><Fade bottom> {headline} </Fade></h1>
      </div>
    </div>
  )
}

export default Header;