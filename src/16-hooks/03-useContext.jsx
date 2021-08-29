import React, { Component, createContext, useContext } from 'react';

const nameContext = createContext('zhangsan');
const nickContext = createContext({nick: 'xiaosan'});

// zhangsan - xiaosan

const Sun = () => {
  const name = useContext(nameContext);
  const {nick} = useContext(nickContext);
  return (
    <div>{name} - {nick}</div>
  )
}

// const Sun = () => {
//   return (
//     <div>
//       <nameContext.Consumer>
//         {
//           value => {
//             return (
//               <nickContext.Consumer>
//                 {
//                   val => {
//                     return (
//                       <div>{value.name} - {val.nick}</div>
//                     )
//                   }
//                 }
//               </nickContext.Consumer>
//             )
//           }
//         }
//       </nameContext.Consumer>
//     </div>
//   )
// }

const Child = () => {
  return (
    <>
      {/* <nickContext.Provider value={{nick: 'xiaosan'}}> */}
        <Sun />
      {/* </nickContext.Provider> */}
    </>
  )
}

class UseContext extends Component {
  render() {
    return (
      <>
        {/* <nameContext.Provider value={{name: 'zhangsan'}}> */}
        <Child />
        {/* </nameContext.Provider> */}
      </>
    );
  }
}

export default UseContext;