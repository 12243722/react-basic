import React, { Component } from 'react';

import Child from './Child2.jsx';

class App2 extends Component {
  state = {
    y: 20
  }
  render() {
    return (
      <div>
        app2
        <Child y={ this.state.y }/>
      </div>
    );
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        y: 20
      })
    }, 2000);
  }
}

export default App2;