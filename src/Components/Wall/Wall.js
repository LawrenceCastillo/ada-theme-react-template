import React from 'react'
import Tile from './Tile'

const Wall = (props) => {
  const section = props.section
  const groups = props.groups
  return (
    <div className={section}>
      <h2 className='section-title'> {section} </h2>
      <div className='figure-grid'>
        {groups.map((group, index) => <Tile key = {index} group={group}></Tile>)}
      </div>
    </div>
  )
}

export default Wall;
