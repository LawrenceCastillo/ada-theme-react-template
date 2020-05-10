import React, {Component} from 'react';

class Item extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.company}</h2>
        <ol>
          <li>{this.props.position}</li>
          <li>{this.props.description}</li>
        </ol>
      </div>
    )
  }
}

export default Item;