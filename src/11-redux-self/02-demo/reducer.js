// const state = {
//   abc: 'sss',
//   count: 3
// }

// 纯函数
// 入参相同，返回值页相同
// 入参不能改变
const changeState = (state, action) => {
  action = action || {type: ''};
  switch(action.type) {
    case 'increment':
      // state.count++;
      return {
        ...state,
        count: state.count + 1
      }
      // break;
    case 'decrement':
      return {
        ...state,
        count: state.count - 1
      }
    default: 
      return state
  }
}

export {
  changeState
}