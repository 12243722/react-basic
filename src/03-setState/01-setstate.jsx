import React, { Component } from 'react';

class App extends Component {
  // state = {
  //   msg: 'hello react!',
  //   isShow: true
  // }

  constructor() {
    super();
    this.state = {
      msg: 'hello react!',
      isShow: true,
      count: 3
    }
  };

  handleClick() {
    // console.log(this);
    // 不推荐的写法
    // this.state.isShow = !this.state.isShow;
    // this.setState({});

    // setState的第一种写法
    // 可以写两个参数，第一个参数是一个对象，第二个参数是回调函数(可选)
    // this.setState({
    //   isShow: !this.state.isShow
    // }, () => {
    //   console.log(this.state.isShow);
    // });

    
    // setState的第二种写法
    // 可以写两个参数，第一个参数是一个函数，需要return，这个函数可以接受两个参数，分别是前一次的state和props
    // 第二个参数是回调函数(可选)
    // this.setState((prevState, props) => {
    //   return {
    //     isShow: !prevState.isShow
    //   }
    // }, () => {
    //   console.log(this.state.isShow);
    // })



    // setState方法多数情况是异步
    // 在合成事件和生命周期里面都是异步的
    // 在定时器和js原生事件里面是同步的

    // setTimeout(() => {
    //   this.setState({
    //     isShow: !this.state.isShow
    //   })
    //   console.log(this.state.isShow);
    // }, 2000)

    this.setState({
      isShow: !this.state.isShow
    })
    console.log(this.state.isShow);

    // this.setState({
    //   count: ++this.state.count
    // })
    // console.log(this.state.count);
  };

  render() {
    return (
      <>
        { this.state.isShow && (<div>{ this.state.msg }</div>) }
        <button onClick={ this.handleClick.bind(this) }>btn</button>
        {/* <button>btn</button> */}
      </>
    );
  };

  // 生命周期，类似于vue的mounted
  // componentDidMount() {
    // this.setState({
    //   isShow: !this.state.isShow
    // })
    // console.log(this.state.isShow);
    // document.querySelector('button').addEventListener('click', this.handleClick.bind(this), false);
  // }
}

export default App;