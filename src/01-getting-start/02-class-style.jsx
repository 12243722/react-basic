import React, { Component } from 'react';

// 引入classNames,用于根据不同的条件添加不同的样式
// import classNames from 'classnames/bind';

  import styles from './02-style.module.css';

// let cx = classNames.bind(styles);

// const styleObj = {
//   fontSize: '100px'
// }

console.log(styles);


class App extends Component {
  state = {
      age: 50,
      life: 40
  }
  add () {
    return this.state.age + this.state.life 
  }
  handleClick = () => {
      this.setState({
       age: 60
      })
    }
    
 
  
  render() {
    let addnum = this.add()
    // let className = cx({
    //   // key是类名，value是变量或者表达式
    //   font: 1 < 2
    // });
    return (
      // <div style={{ color: 'green', fontSize: '50px' }}>app2</div>
      <>
       <div className={styles.font}>你好</div>
       <div onClick={this.handleClick}>按钮</div>
       {/* <div style={ styleObj }>app2</div> */}
      </>
    );
  }
}

export default App;