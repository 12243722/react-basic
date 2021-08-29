import React from 'react';

// import { Map, List, Seq, fromJS, Range } from 'immutable';

const App = () => {
  // 定义对象使用Map
  // const map1 = Map({
  //   a: 1,
  //   b: 2
  // });
  // // console.log(map1.toJS());
  // 改变对象(生成新对象)  set()
  // const map2 = map1.set('a', 10);
  // // console.log(map2.toJS());
  // 获取对象里面的元素   get()
  // // console.log(map2.get('a'));
  // console.log(map1 === map2);



  // const obj = {
  //   a: 1,
  //   b: 2
  // }
  // const map1 = Map(obj);
  // const map2 = Map(obj);
  // console.log(map1 === map2); // false
  // equals是用来比较里面的内容是否一一相等
  // console.log(map1.equals(map2)); // true




  // 定义数组
  // const list1 = List([1, 2, 3, 4]);
  // // push的时候，push普通数组
  // // const list2 = list1.push(5);
  // // concat用于合并数组，可以合并immutable数组，也可以合并普通数组
  // const list3 = list1.concat(List([5, 6]));
  // const list4 = list3.concat([7, 8, 9]);
  // const list5 = list4.unshift(0)
  // console.log(list5.toJS());




  // Map对象的遍历使用map方法
  // const obj1 = Map({
  //   a: 1,
  //   b: 2,
  //   c: 3
  // })
  // const obj2 = obj1.map((v, k) => {
  //   // console.log(v, k)
  //   return k.toUpperCase()
  // }).join()
  // console.log(obj2);




  // 对象合并, meger方法，mergeDeep方法用于深层合并
  // 可以和普通对象进行合并
  // const map1 = Map({a: 1, b: 2, x: { y: 5, z: 6 }});
  // const map2 = Map({b: 3, c: 4, x: { w: 7, y: 8 }});
  // const obj = { g: 10 }
  // console.log(map1.merge(map2).toJS());
  // console.log(map1.mergeDeep(map2, obj).toJS());



  // 数组合并
  // 也可以和普通数组合并
  // const list1 = List([1, 2, 3]);
  // const list2 = List([4, 5, [6, 7]]);
  // const list3 = [8, 9]
  // console.log(list1.concat(list2, list3).toJS());




  // Seq也可以生成对象, 也可以生成数组
  // Seq是惰性的
  // const map1 = Seq({
  //   a: 1,
  //   b: 2
  // })
  // const seq = map1.map(v => {
  //   console.log(v)
  //   return v * v
  // });
  // console.log(seq.toJS());
  // const list = Seq([1, 2, 3])
  // console.log(list)




  // const obj = { 1: 'one', 2: 'two' }
  // console.log(Object.keys(obj)) // [ '1', '2' ]*  Object.values   ['one', 'two']
  // console.log(obj['1'], obj[1]) // one one*

  // // 将普通的js对象，转成immutable的对象
  // // 可以传两个参数，第二个可以省略，是一个函数, 转成immutable对象之后做的事情
  // const map = fromJS(obj, (k, v) => {
  //   console.log(v.toJS());
  //   return v;
  // })
  // console.log(map.get('1'), map.get(1)) // one undefined*




  // const map = Map({
  //   a: 1,
  //   b: 2,
  //   x: Map({
  //     c: 3,
  //     d: 4
  //   })
  // })
  // console.log(map);
  // // 全部展开
  // console.log(map.toJS());
  // // 展开一层
  // console.log(map.toObject());
  // // 将每一项转成数组
  // console.log(map.toArray());
  // // JSON.stringify转成字符串，key会有引号
  // console.log(JSON.parse(JSON.stringify(map)));




  // immutable数组可以用...在普通数组里面展开
  // const aList = List([ 1, 2, 3 ])
  // const anArray = [ 0, ...aList, 4, 5 ]
  // console.log(anArray)




  // const nested = fromJS({ a: { b: { c: [ 3, 4, 5 ] } } })
  // // console.log(nested)
  // const nested2 = nested.mergeDeep({ a: { b: { d: 6 } } })
  // // console.log(nested2.toJS())  // {a: {b: {c: [3, 4, 5], d: 6}}}
  // // getIn  用于深度的查找某一个属性
  // console.log(nested2.getIn(['a', 'b', 'd']))
  // // updateIn  用于深度改变某一个属性的值，第二个参数是函数，可以传入查找到的值
  // const nested3 = nested2.updateIn(['a', 'b', 'd'], (value) => {
  //   return value + 3
  // })
  // console.log(nested3.toJS())
  // // setIn  用于深度改变某一个属性的值，第二个参数是确定的值
  // const nested4 = nested2.setIn(['a', 'b', 'd'], 19)
  // console.log(nested4.toJS())





  // const { Map, Set } = require('immutable')

  // const map1 = Map({ a: 1, b: 2, c: 3 });
  // const map2 = Map({ a: 1, b: 2, c: 3 });
  // const set = Set().add(map1)
  // console.log(set.toJS())
  // // has方法判断的是值是否相等
  // console.log(set.has(map2))






  // const list1 = List([ 1, 2, 3 ]);
  // // withMutations方法接受一个函数，用于改变调用者
  // const list2 = list1.withMutations(function (list) {
  //   list.push(4).push(5).push(6);
  // });

  // console.log(list1.size === 3);
  // console.log(list2.size === 6);
  // true
  // true

  // let map2 = map1.withMutations((map) => {
  //   // 逻辑
  //   map.setIn(['c', 'd'], 9)
  //   map.set('a', 1)
  // })

  // let map3 = map1.updateIn(['c', 'd'], (v) => {
  //   return 9
  // })

  // console.log(map1 === map3)




  // const map1 = Map({a: 1, b: 2, x: {c: 3, d: 4}})
  // const map2 = map1.set('b', 1000);
  // const map3 = map1.set('b', 1000);
  // console.log(map2 === map3);


  // const map1 = fromJS({
  //   c: {
  //     d: 6
  //   }
  // })
  // let map2 = map1.updateIn(['c', 'd'], (v) => {
  //   return 9
  // })
  // let map3 = map1.setIn(['c', 'd'], 9)
  // console.log(map2 === map3)



  // const { Seq } = require('immutable');
  // const oddSquares = Seq([ 1, 2, 3, 4, 5, 6, 7, 8 ])
  //   .filter(x => {
  //     console.log('filter x:' + x)
  //     return x % 2 !== 0
  //   })
  //   .map(x => {
  //     console.log('map x:' + x)
  //     return x * x
  //   });
  // console.log(oddSquares.get(2))




  // const { Seq, Map } = require('immutable');

  // const map = Map({ a: 1, b: 2, c: 3 });
  // const lazySeq = Seq(map);
  // const newMap = lazySeq
  //   // .flip()
  //   .map(v => v.toUpperCase())
  //   // .flip();

  // console.log(newMap)




  // const { Range } = require('immutable');

  // 可以使用链式操作
  // const aRange = Range(1, Infinity)
  //   .skip(1000)
  //   .map(n => -n)
  //   .filter(n => n % 2 === 0)
  //   .take(2)
  //   .reduce((r, n) => r * n, 1);
    
  // console.log(aRange) // 1006008


  return (
    <div>
      immutable
      <input type="range"/>
    </div>
  );
}

export default App;