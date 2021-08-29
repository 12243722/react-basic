import React, { Component } from 'react';

import withPortal from './withPortal.js';

import { Wrap, Center } from './styled.js';

class Model extends Component {
  fn = (e) => {
    e.stopPropagation();
    console.log(222)
  }

  render() {
    return (
      <>
        {
          this.props.isShow && (
            <Wrap>
              <Center onClick={ this.fn }>
                <h1>model header</h1>
                <p>model content</p>
              </Center>
            </Wrap>
          )
        }
      </>
      
    );
  }
}

export default withPortal(Model);