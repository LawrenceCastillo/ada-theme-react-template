import React from 'react'
import Tile3 from './Tile3'

const Wall3 = (props) => {
  const section = props.section
  const groups = props.groups
  return (
    <div className={section}>
      <h2 className='section-title'> {section} </h2>
      <div className='figure3-grid'>
        {groups.map((group, index) => <Tile3 key = {index} group={group}></Tile3>)}
      </div>
    </div>
  )
}

export default Wall3;
