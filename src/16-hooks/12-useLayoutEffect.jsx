import React, {useLayoutEffect, useRef} from 'react';

const UseLayoutEffect = () => {

  const green = useRef();

  useLayoutEffect(() => {
    // console.log(green.current);
    green.current.style.transform = 'translateX(300px)';
  }, [])

  return (
    <>
      <div ref={green} style={{width: '200px', height: '200px', background: 'green'}}>UseLayoutEffect</div>
    </>
  );
}

export default UseLayoutEffect;