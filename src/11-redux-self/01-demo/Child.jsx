import React, { Component } from 'react';

import { dispatch } from './store.js';

class Child extends Component {
  render() {
    return (
      <span id="count"></span>
    );
  }

  componentDidMount() {
    dispatch()
  }
}

export default Child;