import React, { Component } from 'react';

class App extends Component {
  // constructor() {
  //   super();

  //   官网推荐的方式，只会生成一次函数，提高性能
  //   this.handleClick = this.handleClick.bind(this);
  // };

  state = {
    count: 1
  };

  // 函数柯里化
  handleClick = (num) => {
    return (e) => {
      // console.log(this.state.count)
      console.log(e);
      console.log(num);
    };
  };
  // handleClick = () => {
  //   console.log(this.state.count);
  // };

  render() {
    return (
      // <div onClick={ this.handleClick.bind(this) }>hello</div>
      // <div onClick={ this.handleClick.bind(this, 8) }>hello</div>
      // <div onClick={ () => this.handleClick(8) }>hello</div>
      <div onClick={ this.handleClick(8) }>hello</div>
    );
  }
}

export default App;

// 改变this指向
// 1. 直接在render的里面，行内的方式写this.xxx.bind(this), 不推荐
// 2. 在constructor里面使用 this.xxx = this.xxx.bind(this);
// 3. 使用箭头函数定义方法 xxx = () => {};


// 事件传参
// 1. 直接在render的里面，行内的方式写this.xxx.bind(this, 8)
// 2. 直接在render的里面，行内的方式写() => this.xxx(8)


// 通用方式
// 函数柯里化
// handleClick = (num) => {
//   return () => {
//     console.log(this.state.count)
//     console.log(num);
//   };
// };
