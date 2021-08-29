import React, { Component } from 'react';

class Slot extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        slot
        { this.props.children.a }
        <p>child</p>
        { this.props.children.b }
      </div>
    );
  }
}

export default Slot;