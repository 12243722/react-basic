import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Home = (props) => <div>home { props.match.url }</div>;

// const About = () => <div>about</div>;
class About extends Component {
  render() {
    return <div>about { this.props?.match?.url }</div>
  }
}

const Mine = () => <div>mine</div>;
// class Mine extends Component {
//   render() {
//     return <div>mine</div>
//   }
// }

class Render extends Component {
  render() {
    return (
      <Router>

        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/mine">mine</Link></li>
        </ul>

        <hr />

        <Switch>
          {/* 在Route里面渲染组件用component属性，可以渲染类组件和函数组件 */}
          {/* render属性只能渲染函数组件，不能渲染类组件 */}
          {/* children属性不管路径有没有被匹配，都会被渲染, 不能渲染类组件 , 一般情况下都会个Switch一起使用 */}
          {/* 直接在Router里面使用实例化标签，是可以使用类组件和函数组件 */}
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" render={(props) => <About {...props}></About>}></Route>
          <Route path="/mine" children={Mine}></Route>
          {/* <Route path="/mine"><Mine></Mine></Route> */}
        </Switch>
      </Router>
    );
  }
}

export default Render;