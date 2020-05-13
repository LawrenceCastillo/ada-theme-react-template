import React from 'react'
import SocialIcon from './SocialIcon'

const SocialBar = (props) => {
  const icons = props.icons
  return (
    <div className='social-icons'>
      <ul>
        {icons.map((icon, index) => <SocialIcon key = {index} icon={icon}></SocialIcon>)}
      </ul>
    </div>
  )
}

export default SocialBar;