import { GET_DATA } from './actionTypes.js';

const defaultState = {
  list: []
}

const reducer = (state = defaultState, action) => {
  console.log(action);
  switch(action.type) {
    case GET_DATA:
      return {
        ...state,
        list: action.list
      }
    case 'PUSH_DATA':
      return {
        ...state,
        list: [
          ...state.list,
          action.task
        ]
      }
    case 'DELETE_DATA':
      let newList = state.list.filter((item, index) => {
        return index !== action.index
      })
      return {
        ...state,
        list: newList
      }
    default:
      return state
  }
}

export default reducer;