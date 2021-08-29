import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count); 
  const list = useSelector(state => state.list);

  const handleClick = () => {
    dispatch({
      type: 'ADD',
      num: 7
    })
  }

  useEffect(() => {
    dispatch({
      type: 'LOAD'
    })
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <h1>app</h1>
      <p>{count}</p>
      <button onClick={ handleClick }>btn</button>
      <ul>
        {
          list.map(item => {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;