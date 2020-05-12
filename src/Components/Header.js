import React from 'react';
import Fade from 'react-reveal/Fade';

const Header = (props) => {
  const name = props.personal.name
  return (
    <div>
      <div className='heading'>
        <h1 className='main-title'><Fade bottom> {name} </Fade></h1>
      </div>
      <p className='heading-decoration-background'>0110100001100101011011000110110001101111</p>
    </div>
  )
}

export default Header;