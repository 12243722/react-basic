import React, {useState, useCallback, memo} from 'react';

const Child = memo((props) => {
  console.log('child render.')
  return (
    <>
      <h2>child</h2>
      <button onClick={ props.onAdd }>add</button>
    </>
  )
}, (prevProps, nextProps) => {
  // 写逻辑
  return true
})

const UseCallBack = () => {
  // useCallback用于做记忆函数，缓存函数
  console.log('parent render.')
  const [count, setCount] = useState(0);

  const handleAdd = useCallback(() => {
    console.log(123)
  }, [])

  // const handleAdd = () => {
  //   console.log(123)
  // }

  const handleClick = () => {
    setCount(count => count + 1)
  }

  return (
    <div>
      { count }
      <button onClick={ handleClick }>parent button</button>
      <Child onAdd={ handleAdd }/>
    </div>
  );
}

export default UseCallBack;