import React, { Component } from 'react';

// Redirect组件用于重定向
import { Route, Link, Switch, Redirect } from 'react-router-dom';

const Home = () => <div>home</div>;
const About = () => <div>about</div>;
const Mine = () => <div>mine</div>;

class Basic extends Component {
  render() {
    return (
      <>

        <ul>
          <li><Link to="/home">home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/mine">mine</Link></li>
        </ul>

        <hr />

        <Switch>
          <Redirect from="/" to="/home" exact></Redirect>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/mine" component={Mine}></Route>
          {/* <Redirect from="/" to="/home"></Redirect> */}
        </Switch>
      </>
    );
  }
}

export default Basic;