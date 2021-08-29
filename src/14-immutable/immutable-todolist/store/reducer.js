import { GET_DATA } from './actionTypes.js';

import { Map } from 'immutable';

const defaultState = Map({
  list: []
})

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case GET_DATA:
      return state.set('list', action.list);
    case 'PUSH_DATA':
      return state.updateIn(['list'], (list) => list.concat(action.task))
    case 'DELETE_DATA':
      let newList = state.get('list').filter((item, index) => {
        return index !== action.index
      })
      return state.set('list', newList);
    default:
      return state
  }
}

export default reducer;