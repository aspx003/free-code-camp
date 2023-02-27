import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {

    if (value > 0) {
      document.title = `New Messages(${value})`
    }
    console.log('Use Effect 1 ran!');
  }, [value]); // - > Dependency list
  // [] -> Runs only once, on the initial render
  // [value] -> runs only when the value is changed

  // can also add multiple useEffects..
  useEffect(() => {
    console.log("UseEffect 2 ran!");
  }, []);
  return <>
    <h2>{value}</h2>
    <button className='btn' onClick={() => { setValue(value + 1) }}>Click here</button>
  </>;
};

export default UseEffectBasics;
