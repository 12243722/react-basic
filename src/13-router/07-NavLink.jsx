import React, { Component } from 'react';

import './style.css';

// NavLink
import { Route, NavLink, Switch } from 'react-router-dom';

const Home = () => <div>home</div>;
const About = () => <div>about</div>;
const Mine = () => <div>mine</div>;

class Basic extends Component {
  render() {
    return (
      <>

        <ul>
          <li><NavLink to="/" exact activeStyle={{fontSize: '30px', color: 'red'}}>home</NavLink></li>
          <li><NavLink to="/about" activeStyle={{fontSize: '60px', color: 'red'}}>about</NavLink></li>
          <li><NavLink to="/mine" activeStyle={{fontSize: '30px', color: 'red'}}>mine</NavLink></li>
        </ul>

        <hr />

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/mine" component={Mine}></Route>
        </Switch>
      </>
    );
  }
}

export default Basic;