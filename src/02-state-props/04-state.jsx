import React, { Component } from 'react';

// const msg = 'hello react';

class App extends Component {
  // 申明式的定义state
  state = {
    msg: 'hello react',
    count: 3,
    done: true,
    list: [{
      id: 1,
      name: 'zhangsan'
    }, {
      id: 2,
      name: 'lisi'
    }, {
      id: 3,
      name: 'wangwu'
    }]
  }

  // 使用构造函数的构造器去定义state
  // constructor(props) {
  //   // 调用了父类的构造函数
  //   super(props);
  //   this.state = {
  //     msg: 'hello react',
  //     count: 3
  //   }
  // }

  render() {
    // const { done, msg } = this.state
    return (
      <>
        {/* {
          done && (<div> { msg } </div>)
        } */}
        <ul>
          {
            this.state.list.map(item => {
              return (
                <li key={ item.id }>{ item.name }</li>
              )
            })
          }
        </ul>
      </>
    );
  }
}

export default App;