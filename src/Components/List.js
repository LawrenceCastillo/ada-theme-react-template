import React, {Component} from 'react';
import Item from './Item';

class List extends Component {
  render() {
    return (
      <div>
        {this.props.groups.map((group, index) => <Item key = {index} group={group}></Item>)}
      </div>
    )
  }
}

export default List;
