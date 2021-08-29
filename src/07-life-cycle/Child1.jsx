// import React, { PureComponent } from 'react';
import React, { Component } from 'react';

// class Child1 extends PureComponent {
class Child1 extends Component {
  state = {
    name: 'beijing'
  };

  change = () => {
    this.setState({
      name: 'dehao'
    })
  };

  render() {
    console.log('child render');
    return (
      <div onClick={this.change}>child{this.props.msg}</div>
    );
  };

  // componentDidMount() {
  //   console.log('child didmount')
  // };

  UNSAFE_componentWillReceiveProps() {
    console.log('UNSAFE_componentWillReceiveProps');
    // 像props的监听， 父组件传递过来的props发生改变时触发的钩子函数
    // react里面是无脑触发，只要父组件render，就会执行
    // 被过时了，有更好用的钩子了
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate')
    // 自行控制需不需要下一次render
    // return false; // true表示放行，false将阻止后面的操作

    // 第一个参数是nextProps，表示新的props
    // this.props表示旧的props
    // 第二个参数是nextState，表示新的state
    // this.state表示旧的state


    // if (nextProps.msg === this.props.msg) {
    //   return false;
    // } else {
    //   return true;
    // }
    return nextProps.msg !== this.props.msg
  };

  UNSAFE_componentWillUpdate() {
    // 被过时了
    console.log('componentWillUpdate');
  };

  componentDidUpdate() {
    console.log('componentDidUpdate');
    // 不要做数据修改
  };
}

export default Child1;