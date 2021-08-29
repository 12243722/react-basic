import React, { Component } from 'react';

import Input from './Input';
import List from './List';

class App extends Component {
  state = {
    list: [
      {
        id: 1,
        name: 'beijing'
      },
      {
        id: 2,
        name: 'tianjing'
      }
    ]
  };

  getMessage = () => {
    return (obj) => {
      // console.log(obj)
      // 将拿到的对象添加进数组
      this.setState({
        list: this.state.list.concat(obj)
      })


      // let newList = this.state.list;
      // newList.push(obj);
      // // this.state.list.push(obj);
      // this.setState({
      //   list: newList
      // })


      // this.setState({
      //   list: [...this.state.list, obj]
      // })


      // this.state.list.push(obj);
      // this.setState({})
    }
  };

  // 删除
  deleteItem = (id) => {
    return () => {
      let newList = this.state.list.filter(item => item.id !== id);
      this.setState({
        list: newList
      });
    }
  };

  render() {
    return (
      <>
        <Input onMessage={this.getMessage()} />
        <List list={this.state.list}  onDeleteItem={this.deleteItem}/>
      </>
    );
  }
}

export default App;