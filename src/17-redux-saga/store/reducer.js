const defaultState = {
  count: 1,
  list: []
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'INCREMNET':
      return {
        ...state,
        count: state.count + action.num
      }
    case 'GETLIST':
      // console.log(action)
      // return state
      return {
        ...state,
        list: action.list
      }
    default:
      return state
  }
}

export default reducer;