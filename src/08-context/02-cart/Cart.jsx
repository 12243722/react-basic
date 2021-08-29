// 用于维护Context
import React, { Component, createContext } from 'react';

const { Provider, Consumer: CartConsumer } = createContext();

// 对Provider组件进行二次封装
class CartProvider extends Component {
  state = {
    count: 3
  }

  increment = (num) => {
    this.setState((prevState) => {
      return {
        count: prevState.count + num
      }
    })
  }

  decrement = (num) => {
    this.setState((prevState) => {
      return {
        count: prevState.count - num
      }
    })
  }

  render() {
    return (
      <Provider value={{
        count: this.state.count,
        increment: this.increment,
        decrement: this.decrement
      }}>
        { this.props.children }
      </Provider>
    );
  }
}

export { 
  CartProvider,
  CartConsumer
};