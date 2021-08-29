import React, { Component } from 'react';

import store from './store.js';

class App extends Component {
  render() {
    return (
      <>
        <button onClick={ () => store.dispatch({type: 'decrement'}) }>-</button>
        <span id="count"></span>
        <button onClick={ () => store.dispatch({type: 'increment'}) }>+</button>
      </>
    );
  }

  componentDidMount() {
    store.dispatch()
  }
}

export default App;