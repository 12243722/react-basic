// 定义初始状态
const defaultState = {
  count: 3
}

// 定义一个修改状态的函数
const changeState = (action) => {
  action = action || {type: ''};
  switch(action.type) {
    case 'increment':
      defaultState.count++;
      break;
    case 'decrement':
      defaultState.count--;
      break;
    default:
  }
}

// 渲染函数
const renderDOM = () => {
  const countEl = document.querySelector('#count');
  countEl.innerHTML = defaultState.count;
}

// 派发器
const dispatch = (action) => {
  changeState(action);
  renderDOM();
}

export {
  dispatch
}