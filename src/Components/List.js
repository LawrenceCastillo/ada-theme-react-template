import React, {Component} from 'react';
import Item from './Item';
import user from '../info.js';

class List extends Component {
  render() {
    return (
      <div>
        {user.work.map((job, index) => (
          <Item key = {index}
            company = {job.company}
            position = {job.position}
            description = {job.description}
          ></Item>
        ))}
      </div>
    )
  }
}

export default List;
