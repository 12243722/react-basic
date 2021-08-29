import React, {useCallback, useState, useMemo} from 'react';

const UseMemo = () => {
  const [count, setCount] = useState(1);
  const [num, setNum] = useState(99);

  const handleClick = useCallback(() => {
    setCount(count => count + 1)
  }, [])

  const handleClick2 = useCallback(() => {
    setNum(num => num + 1)
  }, [])

  const sum = useMemo(() => {
    console.log(7777)
    let s = 0;
    for (let i = 0; i < count * 100; i++) {
      s += i
    };
    return s;
  }, [count])

  return (
    <>
      <div>{count}</div>
      <div>{sum}</div>
      <div>{num}</div>
      <button onClick={handleClick}>btn</button>
      <button onClick={handleClick2}>btn2</button>
    </>
  );
}

export default UseMemo;