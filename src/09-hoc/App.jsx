import React, { Component } from 'react';

import hoc from './hoc.js';

// 装饰器
@hoc
class App extends Component {
  render() {
    console.log(this)
    return (
      <div>app</div>
    );
  }
}

// const App2 = hoc(App);

// const hoc = (Comp) => {
//   return class extends Component {
//     render () {
//       return <Comp msg="hello"/>
//     }
//   }
// }

// const hoc = () => {
//   return <App msg="hello"></App>
// }

// export default hoc(App);
export default App;