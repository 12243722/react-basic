import {changeState} from './reducer.js';

// 用于初始化store
const createStore = () => {

  let state = {
    count: 10
  }

  // 获取状态
  const getState = () => {
    return state
  }

  // 观察者模式（发布，订阅）
  // 用于保存所有订阅的组件
  const listeners = [];
  // 订阅
  const subscribe = (listener) => {
    listeners.push(listener)
  }
  
  const dispatch = (action) => {
    // 获取到新的state
    state = changeState(state, action);
    // render();
    // 发布 public
    listeners.forEach(listener => listener());
  }

  return {
    dispatch,
    getState,
    subscribe
  }
}

const store = createStore()

const render = () => {
  document.querySelector('#count').innerHTML = store.getState().count;
}

store.subscribe(render)

export default store;

