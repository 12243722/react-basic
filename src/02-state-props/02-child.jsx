import React from 'react';

// 用于做props的类型检查
import { number } from 'prop-types';

class Child extends React.Component {
  // 使用类创建的组件，直接在这里写static方法，创建defaultProps
  // static defaultProps = {
  //   title: 'React'
  // };
  render() {
    return (
      <div>child { this.props.title }</div>
    );
  }
}

Child.defaultProps = {
  title: 'React'
}

Child.propTypes = {
  title: number
}

// const Child = (props) => {
//   return (
//     <div>child { props.title }</div>
//   );
// }

// // 使用箭头函数创建的组件，需要在这个组件上直接写defaultProps属性
// Child.defaultProps = {
//   title: 'React.js'
// }

export default Child;