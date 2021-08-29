// createRef用于做非受控组件
import React, { Component, createRef } from 'react';

class App extends Component {
  constructor() {
    super();
    this.ipt = createRef();
  }

  state = {
    textValue: 'hello'
  }

  handleChange(e) {
    // console.log(e.target.value);
    this.setState({
      textValue: e.target.value + '456'
    })
  }

  handleClick() {
    console.log(this.state.textValue)
  }

  handleInput() {
    console.log(this.ipt.current.value)
  }

  render() {
    return (
      <div>
        {/* 受控组件, 受到react控制的组件 */}
        {/* <input 
          type="text" 
          value={ this.state.textValue } 
          onChange={ this.handleChange.bind(this) }
        /> */}



        {/* 
          非受控组件, 表单没有value和props, 就是非受控组件 
          还需要用到createRef
        */}
        <input
          type="text"
          ref={ this.ipt }
          onInput={ this.handleInput.bind(this) }
        />

        
        <button onClick={ this.handleClick.bind(this) }>btn</button>
      </div>
    );
  }
}

export default App;