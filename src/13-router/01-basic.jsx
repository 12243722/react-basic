import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const Home = () => <div>home</div>;
const About = () => <div>about</div>;
const Mine = () => <div>mine</div>;

class Basic extends Component {
  render() {
    return (
      // 如果要使用路由，那么所有的内容都要放在BrowserRouter的里面
      // Vue-router里面排他性路由
      // React路由默认是包容性路由
      <Router>

        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/mine">mine</Link>
          </li>
        </ul>

        <hr />

        {/* Switch分支匹配，变成了排他性路由 */}
        {/* 不加Switch是默认的包容性路由 */}
        <Switch>
          {/* exact 表示精准匹配 */}
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/mine" component={Mine}></Route>
        </Switch>
      </Router>
    );
  }
}

export default Basic;