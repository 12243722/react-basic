import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: 'hello'
    };
  };

  // input内容改变
  hangleChange = () => {
    return (e) => {
      this.setState({
        textValue: e.target.value
      })
    };
  };

  // 按下回车，进行添加
  handleKeyUp = () => {
    return (e) => {
      // console.log(e.keyCode);
      // 按下的是回车
      if (e.keyCode === 13) {
        if (this.state.textValue) {
          // 提交给父组件
          this.props.onMessage({
            id: Date.now(),
            name: this.state.textValue
          });
          this.setState({
            textValue: ''
          });
        }
      }
    }
  };

  render() {
    return (
      <input 
        type="text"
        value={this.state.textValue}
        onChange={this.hangleChange()}
        onKeyUp={this.handleKeyUp()}
      />
    );
  }
}

export default Input;