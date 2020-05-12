import React from 'react';

const Header = (props) => {
  const name = props.personal.name
  return (
    <div className='heading'>
      <h1 className='main-title'> {name}. </h1>
      <p className='heading-decoration-background'>0110100001100101011011000110110001101111</p>
    </div>
  )
}

export default Header;