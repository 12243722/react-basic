import React, { Component } from 'react';

const hoc = (Comp) => {
  return class extends Component {
    render () {
      console.log('hoc:', this)
      // return <Comp msg="hello" msg2={this.props.msg2}/>
      return <Comp msg="hello" {...this.props}/>
    }
  }
}

export default hoc;