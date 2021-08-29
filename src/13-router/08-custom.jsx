import React, { Component } from 'react';

import './style.css';

// NavLink
import { Route, Switch, withRouter } from 'react-router-dom';

const Home = () => <div>home</div>;
const About = () => <div>about</div>;
const Mine = () => <div>mine</div>;

// @withRouter
class MyNavLink extends Component {
  state = {
    navList: ['home', 'about', 'mine'],
    // isActive: 0
  }

  handleClick = (item, index) => {
    return () => {
      // console.log(this);
      // this.setState({
      //   isActive: index
      // })
      const history = this.props.history;
      history.push('/' + item)
    }
  }

  render () {
    return (
      <>
        {
          this.state.navList.map((item, index) => {
            return (
              <li key={index} onClick={this.handleClick(item, index)}>
                { this.props.location.pathname === '/' + item ? '>' : '' }
                { item }
              </li>
            )
          })
        }
      </>
    )
  }
}

const NewMyNavLink = withRouter(MyNavLink)

class Basic extends Component {
  render() {
    return (
      <>

        <ul>
          {/* <li><NavLink to="/" exact activeStyle={{fontSize: '30px', color: 'red'}}>home</NavLink></li>
          <li><NavLink to="/about" activeStyle={{fontSize: '60px', color: 'red'}}>about</NavLink></li>
          <li><NavLink to="/mine" activeStyle={{fontSize: '30px', color: 'red'}}>mine</NavLink></li> */}
          <NewMyNavLink />
        </ul>

        <hr />

        <Switch>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/mine" component={Mine}></Route>
        </Switch>
      </>
    );
  }
}

export default Basic;