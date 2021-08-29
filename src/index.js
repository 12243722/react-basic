// Brower app  ->  ReactDom
// Native app  ->  ReactNative
import React from 'react';
import ReactDOM from 'react-dom';

// import { BrowserRouter } from 'react-router-dom';

// 用于连接react和redux
// import { Provider } from 'react-redux';
import { Provider } from 'mobx-react';

// import store from './17-redux-saga/store/index';
import store from './18-mobx/store/index';

// import App from './01-getting-start/01-nest.jsx';
 import App from './01-getting-start/02-class-style.jsx';
// import App from './01-getting-start/03-styled-component.jsx';
// import App from './02-state-props/01-data-mount.jsx';
// import App from './02-state-props/04-state.jsx';
// import App from './03-setState/01-setstate.jsx';
// import App from './03-setState/02-state-up/App.jsx';
// import App from './03-setState/03-controled.jsx';
// import App from './03-setState/04-data-render.jsx';
// import App from './04-event/01-event.jsx';
// import App from './05-form/01-form.jsx';
// import App from './05-form/02-multiple.jsx';
// import App from './05-form/03-manyInput.jsx';
// import App from './05-form/04-notControl.jsx';
// import App from './05-form/05-file.jsx';
// import App from './06-todolist/App.jsx';
// import App from './07-life-cycle/App.jsx';
// import App from './07-life-cycle/App2.jsx';
// import App from './08-context/01-context-demo/App.jsx';
// import App from './08-context/02-cart/App.jsx';
// import App2 from './09-hoc/App.jsx';
// import App from './10-portal/App.jsx';
// import App from './11-redux-self/01-demo/App.jsx';
// import App from './11-redux-self/02-demo/App.jsx';
// import App from './12-redux/02-react-redux/App.jsx';
// import App from './12-redux/03-todolist/App.jsx';
// import App from './13-router/01-basic.jsx';
// import App from './13-router/02-URL-Parameters.jsx';
// import App from './13-router/03-next.jsx';
// import App from './13-router/04-render.jsx';
// import App from './13-router/05-redirect.jsx';
// import App from './13-router/06-Auth.jsx';
// import App from './13-router/07-NavLink.jsx';
// import App from './13-router/08-custom.jsx';
// import App from './13-router/09-preventTransition.jsx';
// import App from './13-router/10-Params.jsx';
// import App from './13-router/11.NotFound.jsx';
// import App from './13-router/12-Recursive.jsx';
// import App from './13-router/13-sidebar.jsx';
// import App from './13-router/14-Config.jsx';
// import App from './13-router/15-Modal.jsx';
// import App from './13-router/16-router-demo/App.jsx';
// import Router from './13-router/16-router-demo/router/index.jsx'
// import Router from './14-immutable/App.jsx';
// import App from './14-immutable/immutable-todolist/App.jsx';
// import App from './15-lazy/02-suspense/App.jsx';
//  import App from './16-hooks/01-useState.jsx';
// import App from './16-hooks/02-useEffect.jsx';
// import App from './16-hooks/03-useContext.jsx';
// import App from './16-hooks/04-useReducer.jsx';
// import App from './16-hooks/05-useContext&useReducer.jsx';
// import App from './16-hooks/06-useContent&useReducer2.jsx';
// import App from './16-hooks/07-useCallBack.jsx';
// import App from './16-hooks/08-useMemo.jsx';
// import App from './16-hooks/09-Memoization.jsx';
// import App from './16-hooks/10-useRef.jsx';
// import App from './16-hooks/11-useImperativeHandle.jsx';
// import App from './16-hooks/12-useLayoutEffect.jsx';
// import App from './16-hooks/13-todolist.jsx';
// import App from './17-redux-saga/App.jsx';
// import App from './18-mobx/App.jsx';



ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.querySelector('#root')
)

// const render = () => {
//   ReactDOM.render(
//     <App/>,
//     document.querySelector('#root')
//   )
// };
// render();
// store.subscribe(() => {
//   render();
// })


// const app = <div>hello react!</div>;
//! 函数组件
// const App = (props) => {
//   return <div>hello react { props.name }</div>;
// }


//! 类组件
// 语法糖，在浏览器运行的时候，会转成es5的function
// class App extends React.Component {
//   // 类组件必须要有render方法, 同时又是一个生命周期钩子函数
//   render () {
//     // console.log(this);
//     return (
//       <div>hello react { this.props.name }</div>
//     );
//   }
// }

// ReactDOM里有一个render方法，功能就是把组件渲染并且构造 DOM 树，然后插入到页面上某个特定的元素上
// 里面有两个参数，第一个参数就是元素，第二个参数表示挂载的地方

//! 组件  首字母大写的是组件
//! 元素  首字母小写的是元素
// ReactDOM.render(
//   // app({
//   //   name: '!!!'
//   // }), // jsx语法
//   <App/>,  // 实例化
//   document.querySelector('#root')
// )

// 卸载节点
// setTimeout(() => {
//   ReactDOM.unmountComponentAtNode(document.querySelector('#root'));
// }, 3000);
