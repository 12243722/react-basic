import React, { Component } from 'react';

class App extends Component {
  state = {
    msg: 'hello',
    isShow: true,
    list: [{
      id: 1,
      name: 'Leo',
      age: 35
    }, {
      id: 2,
      name: 'XiaoMing',
      age: 16
    }],
    content: '<p>react是最牛逼的库</p>'
  }
  changeIsShow(){
    this.setState((prevState) => {
      return {
        isShow: !prevState.isShow
      }
    })
  }


  render() {
    const { isShow, msg, list } = this.state;
    return (
      <>
        { isShow && (<div>{ msg }</div>) }
        <button onClick = { this.changeIsShow.bind(this) }> 
          {
            isShow ? '隐藏' : '显示'
          }
        </button>
        
        <ul>
          {
            list.map(item => {
              return (
                <li key={ item.id }>
                  <span>{ item.name }</span> -
                  <span>{ item.age }</span>
                </li>
              )
            })
          }
        </ul>
        {/* <div>{ this.state.content }</div> */}
        <div dangerouslySetInnerHTML={{ __html: this.state.content }}></div>
      </>
    );
  }
}

export default App;