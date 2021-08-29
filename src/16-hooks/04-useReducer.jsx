import React, {useReducer, useEffect} from 'react';

const initState = {
  count: 0
}

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD':
      return {
        ...state,
        count: state.count + 1
      }
    default: 
      return state
  }
}

const UseReducer = () => {
  //useReducer需要两个参数， reducer， initState
  const [state, dispatch] = useReducer(reducer, initState)

  useEffect(() => {
    // 获取数据，并且调用dispatch
  }, [])

  return (
    <div>
      <span>{state.count}</span>
      <button onClick={() => dispatch({type: 'ADD'})}>+</button>
    </div>
  );
}

export default UseReducer;