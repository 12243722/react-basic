import React, { Component } from 'react';

import { Route, Link, Switch } from 'react-router-dom';

const About1 = () => <div>About1</div>;
const About2 = () => <div>About2</div>;

const Home = () => <div>home</div>;
const About = (props) => {
  console.log(props)
  const { url } = props.match;
  return (
    <>
      <h1>about</h1>
      <hr />
      <ul>
        <li>
          <Link to={`${url}/about1`}>about1</Link>
        </li>
        <li>
          <Link to={`${url}/about2`}>about2</Link>
        </li>
      </ul>
      <Route path={`${url}/about1`} component={About1}></Route>
      <Route path={`${url}/about2`} component={About2}></Route>
    </>
  )
};

class Next extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </>
    );
  }
}

export default Next;