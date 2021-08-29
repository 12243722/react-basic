// import React, { Component } from 'react';

// class UseState extends Component {
//   state = {
//     count: 3
//   }

//   decrement = () => {
//     this.setState(state => {
//       return {
//         count: state.count - 1
//       }
//     })
//   }

//   increment = () => {
//     this.setState(state => {
//       return {
//         count: state.count + 1
//       }
//     })
//   }

//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         <button onClick={ this.decrement }>-</button>
//         <span>{ count }</span>
//         <button onClick={ this.increment }>+</button>
//       </div>
//     );
//   }
// }

// export default UseState;



// hooks是方法，必须写在函数组件的顶层

import React, { useState, useEffect } from 'react';

const UseState = () => {

  // useState是一个方法，接受一个参数是默认值
  // 返回一个数组，第一项是state的名字， 第二项用来代替setState
  // useState可以写很多个
  const [count, setCount] = useState(3)
  const [list, setList] = useState(['a', 'b', 'c']);
  const [hello, setHello] = useState({a:'hh',b:'uu',c:'yy',d:'uu',e:'ee'});
  

  useEffect(() => {
    console.log(count)
  }, [count])

  const decrement = () => {
    setCount(count => count - 1);
  }

  const increment = () => {
    // 异步
    // setHello(() => "lisi");
    // setHello("lisi");
    setHello({
      ...hello,
      c:'yyy'
      })
  }

  const handleChange = () => {
    setList(list => {
      // 逻辑处理
      // let newList = ['a', 'd', 'c'];
      // return newList;
      return [...list, 'd', 'e']
    });
  }

  return (
    <div>
      <div>{ hello.c }</div>
      <button onClick={ decrement }>-</button>
      <span>{ count }</span>
      <button onClick={ increment }>+</button>

      <ul onClick={ handleChange }>
        { list.map(item => <li key={ item }>{ item }</li>) }
      </ul>
    </div>
  );
}

export default UseState;