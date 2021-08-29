import React, { Component } from 'react';

import { CartConsumer } from './Cart.jsx';

class Child2 extends Component {
  render() {
    return (
      <div>
        <CartConsumer>
          {
            value => (
              <>
                <button onClick={ () => value.decrement(3) }>+</button>
                <span>{ value.count }</span>
                <button onClick={ () => value.increment(4) }>+</button>
              </>
            )
          }
        </CartConsumer>
        
      </div>
    );
  }
}

export default Child2;