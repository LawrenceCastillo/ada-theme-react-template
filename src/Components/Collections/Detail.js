import React from 'react'
import Fade from 'react-reveal/Fade'

const imageTrue = (design, group) => {
  return group.image_url ? <img className={`${design}-photo`} src={group.image_url} alt={group.name} /> : <h2 className={`${design}-h2`}>{group.name}</h2>
}
const Detail = (props) => {
  const group = props.group
  const design = props.design
  if (design === 'list') {
    return (
      <Fade bottom>
        <a href={group.site_url} target="_blank" rel='noopener noreferrer'> <h2 className={`${design}-h2`}>{group.name}</h2> </a>
        <figure className={design}>
          <figcaption>
            <h3 className={`${design}-h3`}>{group.role} {'//'} {group.location} {'//'} {group.timeframe} </h3>
            <p className={`${design}-p`}>{group.description}</p>
          </figcaption>
        </figure>
      </Fade>
    )
  } else {
    return (
      <Fade bottom>
        <figure className={design}>
          <a href={group.site_url} target="_blank" rel='noopener noreferrer'> {imageTrue(design, group)} </a>
          <figcaption>
            <h3 className={`${design}-h3`}>{group.role} {'//'} {group.location} {'//'} {group.timeframe} </h3>
            <p className={`${design}-p`}>{group.description}</p>
          </figcaption>
        </figure>
      </Fade>
    )
  }
}

export default Detail;