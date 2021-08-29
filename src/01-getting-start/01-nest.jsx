import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>头部</header>
    )
  }
}

// class Content extends Component {
//   render() {
//     return (
//       <main>内容</main>
//     )
//   }
// }

// function Content () {
//   return (
//     <main>内容</main>
//   )
// }

const Content = () => {
  return (
    <main>内容</main>
  )
}

class App extends Component {
  render() {
    return (
      // Fragment相当于是一个空的占位符
      // <Fragment>
      //   <Header />
      //   <Content />
      // </Fragment>
      <>
        <Header />
        <Content />
      </>
    )
  }
};

export default App;