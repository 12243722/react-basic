import React, { Component } from 'react';

import { CartProvider } from './Cart.jsx';

import Child1 from './Child1';

class App extends Component {
  render() {
    return (
      <CartProvider>
        <Child1 />
      </CartProvider>
    );
  }
}

export default App;