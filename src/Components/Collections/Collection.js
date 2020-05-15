import React from 'react'
import Detail from './Detail'

const Collection = (props) => {
  const section = props.section
  const groups = props.groups
  const design = props.design
  return (
    <div className={section}>
      <h2 className='section-title'> {section} </h2>
      <div className={`${design}-grid`}>
        {groups.map((group, index) => <Detail key={index} group={group} design={design}></Detail>)}
      </div>
    </div>
  )
}

export default Collection;
