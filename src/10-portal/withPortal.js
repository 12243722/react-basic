import React, { Component } from 'react';

import { createPortal } from 'react-dom';

const withPortal = (Comp) => {
  return class extends Component {
    render() {
      return createPortal(
        <Comp {...this.props}/>,
        document.querySelector('body')
      )
    }
  }
}

export default withPortal;