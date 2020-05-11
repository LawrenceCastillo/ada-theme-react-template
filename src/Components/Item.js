import React from 'react';

const Item = (props) => {
  const group = props.group;
  return (
    <figure>
      <h2>{group.company}</h2>
      <figureCaption>
        <strong>{group.position}</strong>
        <p>{group.description}</p>
      </figureCaption>
    </figure>
  )
}

export default Item;