import React, {lazy} from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import App from '../App.jsx';
import Home from '../Home.jsx';
import About from '../About.jsx';
import Aa from '../Aa.jsx';
// import Bb from '../Bb.jsx';
const Bb = lazy(() => import('../Bb.jsx'));

const Routers = () => {
  return (
    <Router>
      <App>
        <Switch>
          <Redirect from="/" to="/home" exact></Redirect>
          <Route path="/home">
            <Home>
              <Switch>
                <Route path="/home/a"><Aa></Aa></Route>
                <Route path="/home/b">
                  <Bb></Bb>
                </Route>
              </Switch>
            </Home>
          </Route>
          <Route path="/about"><About></About></Route>
        </Switch>
      </App>
    </Router>
  );
}

export default Routers;