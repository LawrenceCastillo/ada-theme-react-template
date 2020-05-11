import React from 'react';
import Item from './Item';

const List = (props) => {
  return (
    <div>
      {props.groups.map((group, index) => <Item key = {index} group={group}></Item>)}
    </div>
  )
}

export default List;
