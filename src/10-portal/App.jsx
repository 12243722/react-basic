import React, { Component } from 'react';

import Model from './Model.jsx';

class App extends Component {
  state = {
    isShow: false
  }

  change = (e) => {
    e.stopPropagation();
    this.setState({
      isShow: true
    })
  }

  close = () => {
    this.setState({
      isShow: false
    })
  }

  render() {
    return (
      <div onClick={ this.close }>
        <button onClick={ this.change }>按钮</button>
        <Model isShow={ this.state.isShow }/>
      </div>
    );
  }
}

export default App;