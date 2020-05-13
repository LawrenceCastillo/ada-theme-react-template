import React from 'react'
import Item from './Item'

const List = (props) => {
  const section = props.section
  const groups = props.groups
  return (
    <div className={section}>
      <h2 className='section-title'> {section} </h2>
      <div className='list-grid'>
        {groups.map((group, index) => <Item key = {index} group={group}></Item>)}
      </div>
    </div>
  )
}

export default List;
