// import React, {useRef} from 'react';

// const UseRef = () => {
//   // const inp = createRef()
//   const inp = useRef()

//   const handleClick = () => {
//     console.log(inp.current)
//   }
//   return (
//     <div>
//       <button ref={inp} onClick={handleClick}>btn</button>
//     </div>
//   );
// }

// export default UseRef;

// import React, {useState, useEffect} from 'react';

// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       console.log("count: " + count);
//     }, 3000);
//   }, [count]);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>增加 count</button>
//       <button onClick={() => setCount(count - 1)}>减少 count</button>
//     </div>
//   );
// }

// export default App;








// import React, { Component } from 'react';

// class App extends Component {
//   state = {
//     count: 0
//   }

//   add = () => {
//     this.setState((state) => {
//       return {
//         count: state.count + 1
//       }
//     }, () => {
//       setTimeout(() => {
//         console.log("count: " + this.state.count);
//       }, 3000);
//     })
//   }

//   jian = () => {
//     this.setState((state) => {
//       return {
//         count: state.count - 1
//       }
//     }, () => {
//       setTimeout(() => {
//         console.log("count: " + this.state.count);
//       }, 3000);
//     })
//   }

//   render() {
//     return (
//         <div>
//           <p>You clicked {this.state.count} times</p>
//           <button onClick={() => this.add()}>增加 count</button>
//           <button onClick={() => this.jian()}>减少 count</button>
//         </div>
//       );
//   }
// }

// export default App



import React, {useRef} from 'react';

function App() {
  const count = useRef(0);

  const showCount = () => {
    console.log("count: " + count.current);
  };

  const handleClick = number => {
    count.current = count.current + number;
    setTimeout(showCount, 3000);
  };

  return (
    <div>
      <p>You clicked {count.current} times</p>
      <button onClick={() => handleClick(1)}>增加 count</button>
      <button onClick={() => handleClick(-1)}>减少 count</button>
    </div>
  );
}

export default App