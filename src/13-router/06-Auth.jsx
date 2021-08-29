import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

function PublicPage() {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}

// function Login() {
//   return <h3>Login</h3>;
// }

class Login extends Component {
  login = () => {
    // console.log(this.props.history);
    const { history } = this.props;
    localStorage.setItem('loginInfo', 2344);
    // 编程式导航
    history.push('/protected');
    // history.go(-1);
  }

  render() {
    return (
      <>
        <h3>Login</h3>
        <button onClick={ this.login }>btn</button>
      </>
    )
  }
}

class PrivateRoute extends Component {
  render() {
    return (
      <Route path={this.props.path} render={() => {
        return localStorage.getItem('loginInfo') ? 
          (this.props.children) : 
          (<Redirect from={this.props.path} to="/login"></Redirect>)
      }}>
      </Route>
    )
  }
}

class Auth extends Component {
  render() {
    return (
      <>
        <ul>
          <li><Link to="/public">Public Page</Link></li>
          <li><Link to="/protected">Protected Page</Link></li>
        </ul>

        <Switch>
          <Route path="/public">
            <PublicPage />
          </Route>

          <PrivateRoute path="/protected">
            <ProtectedPage />
          </PrivateRoute>

          <Route path="/login" component={Login}></Route>
        </Switch>
      </>
    );
  }
}

export default Auth;