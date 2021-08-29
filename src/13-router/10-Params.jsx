import React, { Component } from 'react';

import { 
  Route,
  Link,
  Switch,
  // useHistory
  useLocation
} from 'react-router-dom';

// Hooks是给函数组件用的，使函数组件能够拥有类组件的功能
// Hooks必须写在函数组件的顶层
// useHistory让本身没有路由信息的组件拿到路由信息
const Home = () => {
  // console.log(props)
  // const history = useHistory();
  // console.log(history);
  const { state: { num } } = useLocation()

  return <div>home { num }</div>
};

const About = (props) => {
  // console.log(props)
  return <div>about { props.match.params.num }</div>
};

const Mine = () => {
  const {search} = useLocation()
  // '?name=zhangsan&age=25'
  const newSearch = new URLSearchParams(search);
  const name = newSearch.get('name')
  return <div>mine - {name}</div>
};

class PreventTransition extends Component {
  render() {
    return (
      <>

        <ul>
          <li><Link to={{
            pathname: '/home',
            search: '?name=zhangsan&age=25',
            hash: '#ccc',
            state: { num: 50 }
          }}>home</Link></li>
          <li><Link to="/about/20">about</Link></li>
          <li><Link to="/mine?name=zhangsan&age=25">mine</Link></li>
        </ul>

        <hr />

        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about/:num" component={About}></Route>
          <Route path="/mine" component={Mine}></Route>
        </Switch>
      </>
    );
  }
}

export default PreventTransition;