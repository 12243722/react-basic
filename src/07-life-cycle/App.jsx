import React, { Component } from 'react';

import Child1 from './Child1.jsx';

class App extends Component {
  // constructor就是Initialization阶段的生命周期钩子函数
  // constructor是最先执行，只执行一次，一定会执行
  constructor(props) {
    // 初始化props和state
    super(props);
    this.state = {
      msg: 1
    };
    // this.xxx = this.xxx.bind(this);
    this.staticValue = 'hi';
  };

  //! Mounting阶段
  // componentWillMount已经过时了, 16.3之前的钩子函数，现在依然可以用
  UNSAFE_componentWillMount() {
    console.log('componentWillMount');
    // this.setState({
    //   msg: 'hello'
    // });
    // this.staticValue = 'bye';
  };

  // 渲染
  render() {
    // 父组件只要render了，子组件一定render
    console.log('render');
    return (
      <div>
        { this.state.msg }
        <Child1 msg={ this.state.msg } />
      </div>
    );
  };

  // 在组件被挂载结束之后执行的钩子
  componentDidMount() {
    console.log('componentDidMount');
    // 数据请求
    // setTimeout(() => {
    //   this.setState({
    //     msg: 1
    //   })
    // }, 2000);
  };

  //! Updation阶段
  // UNSAFE_componentWillReceiveProps() {
  //   // 父组件传递过来的props发生改变时触发的钩子函数
  //   console.log('componentWillReceiveProps');
  // };


  //! Unmounting阶段
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
}

export default App;