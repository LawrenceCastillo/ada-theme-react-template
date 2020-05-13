import React from 'react'
import Fade from 'react-reveal/Fade'

const imageTrue = (group) => {
  return group.image_url ? <img className='figure3-tile-photo' src={group.image_url} alt={group.name} /> : <h2 className='figure3-tile-h2'>{group.name}</h2>
}
const Tile3 = (props) => {
  const group = props.group
  return (
    <Fade bottom>
      <figure className='figure3'>
        <a href={group.site_url} target="_blank" rel='noopener noreferrer'> { imageTrue(group) } </a>
        <figcaption>
          <h3 className='figure3-tile-h3'>{group.role} {'//'} {group.location} {'//'} {group.timeframe} </h3>
          <p className='figure3-tile-p'>{group.description}</p>
        </figcaption>
      </figure>
    </Fade>
  )
}

export default Tile3;