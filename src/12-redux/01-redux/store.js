const { createStore } = require('redux');

const reducer = require('./reducer');

// console.log(redux);

// createStore要穿一个参数，是reducer
const store = createStore(reducer);

// console.log(store);
// console.log(store.getState().count);
// store.dispatch({type: 'increment'});
// store.dispatch({type: 'increment'});
// store.dispatch({type: 'increment'});
// store.dispatch({type: 'increment'});
// store.dispatch({type: 'increment'});
// console.log(store.getState().count);

store.subscribe(() => {
  console.log(store.getState().count)
});

store.dispatch({type: 'increment', num: 3});
// store.dispatch({type: 'increment'});
// store.dispatch({type: 'increment'});
// store.dispatch({type: 'increment'});
// store.dispatch({type: 'increment'});