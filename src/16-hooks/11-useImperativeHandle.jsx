import React, { useRef, useEffect, useImperativeHandle, forwardRef } from "react";

function ChildInputComponent(props, ref) {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => inputRef.current);
  return <input type="text" name="child input" ref={inputRef} />;
}

// forwardRef是高阶组件
// ref属性默认在子组件的props里面是接受不到的，forwardRef是为了能接受到
const ChildInput = forwardRef(ChildInputComponent);

function App() {
  const inputRef = useRef(null);

  // 一开始获得焦点
  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef.current);
  }, []);

  return (
    <div>
      <ChildInput ref={inputRef} />
    </div>
  );
}

export default App;