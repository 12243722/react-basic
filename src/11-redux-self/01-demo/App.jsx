import React, { Component } from 'react';
import Child from './Child.jsx';

import { dispatch } from './store.js';

class App extends Component {
  render() {
    return (
      <>
        <button onClick={ () => dispatch({type: 'decrement'}) }>-</button>
        <span id="count"></span>
        <button onClick={ () => dispatch({type: 'increment'}) }>+</button>
        <Child />
      </>
    );
  }

  componentDidMount() {
    dispatch()
  }
}

export default App;