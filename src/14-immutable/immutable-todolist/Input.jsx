import React, { Component } from 'react';
import { pushDataAction } from './store/actionCreator';

import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    push(value) {
      // dispatch({type: 'push', task: value})
      dispatch(pushDataAction(value))
    }
  }
}

@connect(null, mapDispatchToProps)
class Input extends Component {
  state = {
    textValue: ''
  }

  handleChange = (e) => {
    this.setState({
      textValue: e.target.value
    })
  }

  handleKeyUp = e => {
    if (e.keyCode === 13 && this.state.textValue) {
      this.props.push(this.state.textValue)
      this.setState({
        textValue: ''
      })
    }
  }

  render() {
    return (
      <input 
        type="text"
        value={this.state.textValue}
        onChange={ this.handleChange }
        onKeyUp={ this.handleKeyUp }
      />
    );
  }

  // componentDidMount() {
  //   console.log(this)
  // }
}

export default Input;