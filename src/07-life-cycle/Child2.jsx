import React, { Component } from 'react';

class Child2 extends Component {
  state = {
    x: 10,
    prevX: 0
  }

  // 根据props的值，赋值给state
  // 需要被定义成一个静态方法
  // 有两个参数
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    // console.log('nextProps:' + nextProps.y);
    // console.log('prevState:' + prevState.x);
    // return {
    //   x: nextProps.y
    // }

    // 1 -> nextProps.y: 20     prevState.x: 10
    // 2 -> nextProps.y: 20     prevState.x: 20
    // 3 -> nextProps.y: 20     prevState.x: 40


    // 1 -> nextProps.y: 20     prevState.x: 10     prevState.prevX: 0
    // 2 -> nextProps.y: 20     prevState.x: 20     prevState.prevX: 20
    // 3 -> nextProps.y: 20     prevState.x: 40     prevState.prevX: 20
    if (nextProps.y === prevState.prevX) {
      return null
    } else {
      return {
        x: nextProps.y,
        prevX: nextProps.y
      }
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.x !== nextState.x
  // }

  render() {
    console.log('child render')
    return (
      <div>child - { this.state.x }</div>
    );
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({
  //       x: 40
  //     })
  //   }, 4000);
  // }

  // 必须要配合componentDidUpdate一起使用
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate')
    return 5
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot)
  }
}

export default Child2;