import React, { Component, Fragment } from 'react';

import Child from './02-child';
import Slot from './03-slot';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>app</div>
        {/* <Child title={ 0 }/> */}
        <Slot>
          {/* <p>p标签</p>
          <Child title={0}/> */}
          {{
            a: (<p>p标签</p>),
            b: (<Child title={0}/>)
          }}
        </Slot>
      </Fragment>
    );
  }
}

export default App;