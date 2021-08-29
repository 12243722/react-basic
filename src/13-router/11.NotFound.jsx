import React, { Component } from 'react';

import { Route, Link, Switch } from 'react-router-dom';

const Home = () => <div>home</div>;

const About = () => <div>about</div>;

const Mine = () => <div>mine</div>;

const NotFound = () => <div>Not found...</div>

class Render extends Component {
  render() {
    return (
      <Switch>
        {/* 如果路由嵌套了，那么不要加精准匹配 */}
        <Route path="/a">
          <ul>
            <li><Link to="/a/home">home</Link></li>
            <li><Link to="/a/about">about</Link></li>
            <li><Link to="/a/mine">mine</Link></li>
          </ul>

          <hr />

          {/* 做404页面，必须使用Switch组件 */}
          <Switch>
            <Route path="/a/home" component={Home}></Route>
            <Route path="/a/about" component={About}></Route>
            <Route path="/a/mine" component={Mine}></Route>
            <Route path="*"><NotFound></NotFound></Route>
          </Switch>
        </Route>
        <Route path="*"><NotFound></NotFound></Route>
      </Switch>
    );
  }
}

export default Render;