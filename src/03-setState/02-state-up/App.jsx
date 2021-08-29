import React, { Component } from 'react';

import Child1 from './Child1.jsx';
import Child2 from './Child2.jsx';

class App extends Component {
  state = {
    num: 0
  }

  getCount(num) {
    // 接受child1传来的值
    // console.log(num)
    this.setState({
      num: num
    })
  }

  render() {
    return (
      <>
        <div>app</div>
        <Child1 onGetCount={this.getCount.bind(this)}></Child1>
        <Child2 num={this.state.num}></Child2>
      </>
      
    );
  }
}

export default App;