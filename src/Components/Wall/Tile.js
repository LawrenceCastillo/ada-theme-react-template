import React from 'react';

const imageTrue = (group) => {
  return group.image_url ? <img className='photo' src={group.image_url} alt={group.name} /> : <h2 className='h2-tile-name'>{group.name}</h2>
}

const Tile = (props) => {
  const group = props.group;
  return (
    <figure className='figure'>
      <a href={group.site_url} target="_blank" rel='noopener noreferrer'> { imageTrue(group) } </a>
      <figcaption>
        <h3>{group.role} - {group.location}</h3>
        <p>{group.timeframe}</p>
        <p>{group.description}</p>
      </figcaption>
    </figure>
  )
}

export default Tile;