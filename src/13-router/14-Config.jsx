import React, { Component } from 'react';

import {
  Switch,
  Route,
  Link
} from "react-router-dom";

const routes = [
  {
    path: "/sandwiches",
    component: Sandwiches
  },
  {
    path: "/tacos",
    component: Tacos,
    routes: [
      {
        path: "/tacos/bus",
        component: Bus
      },
      {
        path: "/tacos/cart",
        component: Cart
      }
    ]
  }
];

function Sandwiches() {
  return <h3>Sandwiches</h3>;
}

// function Tacos() {
//   return <h3>Tacos</h3>;
// }
function Tacos({ routes }) {
  return (
    <div>
      <h2>Tacos</h2>
      <ul>
        <li>
          <Link to="/tacos/bus">Bus</Link>
        </li>
        <li>
          <Link to="/tacos/cart">Cart</Link>
        </li>
      </ul>

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}

function Bus() {
  return <h3>Bus</h3>;
}

function Cart() {
  return <h3>Cart</h3>;
}

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      // props就是当前的路由信息
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

class Config extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/tacos">Tacos</Link>
          </li>
          <li>
            <Link to="/sandwiches">Sandwiches</Link>
          </li>
        </ul>

        <Switch>
          {
            routes.map((route, index) => (
              <RouteWithSubRoutes key={index} {...route} />
            ))
          }
        </Switch>
      </div>
    );
  }
}

export default Config;