import React, { Component } from 'react';

class Child1 extends Component {
  state = {
    count: 5
  }

  render() {
    return (
      <div onClick={ this.props.onGetCount.bind(this, this.state.count) }>child1-{ this.state.count }</div>
    );
  }
}

export default Child1;