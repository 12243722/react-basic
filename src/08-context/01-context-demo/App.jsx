import React, { Component } from 'react';

import { textContext, Provider, Consumer } from './context.js';

class Child1 extends Component {
  // 类组件的使用
  // 固定写法，不能改
  // 加了之后，this里面才有context
  static contextType = textContext;

  render() {
    console.log(this);
    return (
      <div>child1 - {this.context}</div>
    );
  }
}

// 类组件可以使用两种方法，函数组件只能使用Consumer


const Child4 = () => {
  // 函数组件的使用
  return (
    <div>
      child4 - 
      {/* Consumer组件里面是写函数的 */}
      <Consumer>
        {
          value => (<span>{value}</span>)
        }
      </Consumer>
    </div>
  );
}

const Child3 = () => {
  return (
    <div>
      child3
      <Child4></Child4>
    </div>
  );
}


const Child2 = () => {
  return (
    <div>
      child2
      <Consumer>
        {
          value => (<span>{value}</span>)
        }
      </Consumer>
      <Child3 />
    </div>
  );
}



class App extends Component {
  render() {
    return (
      // 必须加在最大的组件的外面， Provider必须有一个value属性
      <Provider value="hello">
        <Child1 />
        <Child2 />
      </Provider>
    );
  }
}

export default App;