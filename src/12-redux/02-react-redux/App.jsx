import React, { Component } from 'react';

import store from './store.js';

class App extends Component {
  decrement = () => {
    store.dispatch({
      type: 'decrement',
      num: 3
    })
  }

  increment = () => {
    store.dispatch({
      type: 'increment',
      num: 5
    })
  }

  render() {
    return (
      <>
        <button onClick={ this.decrement }>-</button>
        <span>{ store.getState().count }</span>
        <button onClick={ this.increment }>+</button>
      </>
    );
  }
}

export default App;