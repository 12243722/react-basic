const defaultState = {
  count: 1
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + action.num
      }
    case 'decrement':
      return {
        ...state,
        count: state.count - action.num
      }
    default:
      return state
  }
}

export default reducer;