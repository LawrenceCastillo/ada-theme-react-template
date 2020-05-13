import React from 'react'
import Fade from 'react-reveal/Fade'

const Item = (props) => {
  const group = props.group
  return (
    <Fade bottom>
      <a href={group.site_url} target="_blank" rel='noopener noreferrer'> <h2 className='item-h2'>{group.name}</h2> </a>
      <figure className='item'>
        <figcaption>
          <h3 className='item-h3'>{group.role} {'//'} {group.location} {'//'} {group.timeframe} </h3>
          <p className='item-p'>{group.description}</p>
        </figcaption>
      </figure>
    </Fade>
  )
}

export default Item;