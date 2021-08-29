import React, { Component } from 'react';

import { Route, Link, Switch, Prompt } from 'react-router-dom';

// const Home = () => <div>home</div>;
class Home extends Component {
  state = {
    isBlocking: false
  }

  handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    this.setState({
      isBlocking: false
    })
  }

  handleChange = (e) => {
    this.setState({
      isBlocking: e.target.value.length > 0
    })
  }

  render() {
    return (
      <form
        onSubmit={ this.handleSubmit }
      >
        <Prompt
          when={this.state.isBlocking}
          message={location =>
            `Are you sure you want to go to ${location.pathname}`
          }
        />

        <p>
          Blocking?{" "}
          {this.state.isBlocking ? "Yes, click a link or the back button" : "Nope"}
        </p>

        <p>
          <input
            size="50"
            placeholder="type something to block transitions"
            onChange={this.handleChange}
          />
        </p>

        <p>
          <button>Submit to stop blocking</button>
        </p>
      </form>
    )
  }
}
const About = () => <div>about</div>;
const Mine = () => <div>mine</div>;

class PreventTransition extends Component {
  render() {
    return (
      <>

        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/about">about</Link></li>
          <li><Link to="/mine">mine</Link></li>
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

export default PreventTransition;