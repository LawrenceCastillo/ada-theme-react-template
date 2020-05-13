import React from 'react'

const Skill = (props) => {
  const skill = props.skill
  return (
    <div className='skill'>
       ▷ {skill}
    </div>
  )
}

export default Skill;