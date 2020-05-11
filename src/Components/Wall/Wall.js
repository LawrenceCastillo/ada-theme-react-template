import React from 'react';
import Tile from './Tile';

const Wall = (props) => {
  const section = props.section
  return (
    <div>
      <h2 className='section-title'> {section} </h2>
      <div className='photo-grid'>
        {props.groups.map((group, index) => <Tile key = {index} group={group}></Tile>)}
      </div>
    </div>
  )
}

export default Wall;
