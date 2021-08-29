import React, { Component } from 'react';

import Child2 from './Child2.jsx';

class Child1 extends Component {
  render() {
    return (
      <Child2 />
    );
  }
}

export default Child1;