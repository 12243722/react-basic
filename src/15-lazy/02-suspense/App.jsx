import React, {lazy, Suspense} from 'react';

// import Child from './Child.jsx';

// lazy做异步引入, 里面是一个函数
const Child = lazy(() => import('./Child.jsx'));

class App extends React.Component {
  state = {
    isShow: false
  }

  handleClick = () => {
    this.setState({
      isShow: true
    })
  }

  render() {
    return (
      <>
        <div>app</div>
        <button onClick={this.handleClick}>btn</button>
        {/* {
          this.state.isShow && <Child></Child>
        } */}
        {/* fallback里面写组件 */}
        <Suspense fallback={<div>loading...</div>}>
          {
            this.state.isShow && <Child></Child>
          }
        </Suspense>
      </>
    )
  }
}

export default App;