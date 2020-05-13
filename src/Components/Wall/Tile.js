import React from 'react'
import Fade from 'react-reveal/Fade'

const imageTrue = (group) => {
  return group.image_url ? <img className='figure-tile-photo' src={group.image_url} alt={group.name} /> : <h2 className='figure-tile-h2'>{group.name}</h2>
}
const Tile = (props) => {
  const group = props.group
  return (
    <Fade bottom>
      <figure className='figure'>
        <a href={group.site_url} target="_blank" rel='noopener noreferrer'> { imageTrue(group) } </a>
        <figcaption>
          <h3 className='figure-tile-h3'>{group.role} - {group.location}</h3>
          <p className='figure-tile-p'>{group.timeframe}</p>
          <p className='figure-tile-p'>{group.description}</p>
        </figcaption>
      </figure>
    </Fade>
  )
}

export default Tile;