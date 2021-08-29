import React, { Component, createRef } from 'react';

class App extends Component {
  constructor() {
    super();
    this.input = createRef();
    this.input2 = createRef();
  }

  handleInput = () => {
    console.log(this.input.current.value)
  }

  handleInput2 = () => {
    console.log(this.input2.current.value)
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.input} onInput={ this.handleInput } defaultValue="sss"/>
        <input type="text" ref={this.input2} onInput={ this.handleInput2 }/>
      </div>
    );
  }
}

export default App;