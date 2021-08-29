import React, {createContext, useEffect, useReducer, useContext} from 'react';
const context = createContext({ count: 1 });

function B() {
  const { count, dispatch } = useContext(context);

  useEffect(() => {
    console.log("B render");
  });

  return (
    <div>
      <button onClick={() => dispatch("increase")}>increase</button>
      <p>B 中的 count :{count}</p >
    </div>
  );
}

function A() {
  useEffect(() => {
    console.log("A render");
  });

  return (
    <>
      <B />
    </>
  );
}

function D() {
  useEffect(() => {
    console.log("D render");
  });

  return <div>D</div>;
}

function C() {
  useEffect(() => {
    console.log("C render");
  });

  return (
    <>
      <D />
    </>
  );
}

const reducer = (state, action) => {
  
  switch (action) {
    case "increase": {
      return {
        count: state.count + 1
      };
    }
    default: {
      return state;
    }
  }
};

function Provider(props) {
  const [state, dispatch] = useReducer(reducer, { count: 1 });

  useEffect(() => {
    console.log("Provider render");
  });

  return (
    <context.Provider value={{ count: state.count, dispatch }}>
      {props.children}
    </context.Provider>
  );
}

export default function App() {
  useEffect(() => {
    console.log("App render");
  });

  return (
    <Provider>
      <div className="App">
        <A />
        <C />
      </div>
    </Provider>
  );
}