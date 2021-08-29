// applyMiddleware是中间件的意思
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import reducer from './reducer.js';

// createStore还可以接受第二个参数，中间件
const store = createStore(reducer, applyMiddleware(thunk));

export default store;