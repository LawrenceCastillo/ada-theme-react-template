import React from 'react'

const SocialIcon = (props) => {
  const icon = props.icon
  return (
    <li>
      <a href={icon.profile_url} target="_blank" rel='noopener noreferrer'><img src={icon.icon_url} alt={icon.name}></img> </a>
    </li>
  )
}

export default SocialIcon