import React, {Component} from 'react';

class Item extends Component {
  render() {
    const group = this.props.group;
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
}

export default Item;