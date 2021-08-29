import React, { useState, useEffect } from 'react';

const UseEffect = () => {
  const [count, setCount] = useState(3)
  const [list, setList] = useState(['a', 'b', 'c']);

  // useEffect是用来处理副作用，用来代替生命周期的
  // 可以接受两个参数
  // 第一个参数是一个函数，如果只有一个参数，相当于componentDidMount和componentDidUpdate
  // 第二个参数是一个数组, 数组里面是useEffect的依赖，只有依赖发生改变的时候，才会再次触发useEffect
  // 如果第二个参数是个空数组，相当于componentDidMount
  // 如果数组里面是有内容的，相当于shouldComponentUpdate

  // useEffect可以写多个

  // 如果第一个函数里面 return了一个函数，相当于componentWillUnmount

  // 如果要做数据请求，并且数据请求的方法写在外面，需要使用自执行函数



  // useEffect(() => {
  //   console.log(123);
  // }, [list, count])

  useEffect(() => {
    console.log(123)
    return () => {
      console.log('666')
    }
  }, [])


  // const getData = () => {
  //   return fetch('https://www.fastmock.site/mock/f6da2d51373e2d56be34e0119e611452/redux/api/list')
  //     .then(response => response.json())
  //     .then(res => {
  //       return res
  //     })
  // }

  // useEffect(() => {
  //   (async() => {
  //     const res = await getData();
  //     console.log(res);
  //   })()
  // }, [])



  const decrement = () => {
    setCount(count => count - 1);
  }

  const increment = () => {
    setCount(count => count + 1);
  }

  const handleChange = () => {
    setList(list => {
      // 逻辑处理
      let newList = ['a', 'd', 'c'];
      return newList;
    });
  }

  return (
    <div>
      <button onClick={ decrement }>-</button>
      <span>{ count }</span>
      <button onClick={ increment }>+</button>

      <ul onClick={ handleChange }>
        { list.map(item => <li key={ item }>{ item }</li>) }
      </ul>
    </div>
  );
}

export default UseEffect;