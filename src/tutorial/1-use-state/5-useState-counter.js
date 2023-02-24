import React, { useState } from "react";

const UseStateCounter = () => {

  const [value, setValue] = useState(0);

  const complexIncrease = () => {
    setTimeout(() => {
      setValue(value + 1);
    }, 2000);
  }

  return (
    <>
      <section style={{margin: '4rem 0'}}>
        <h2>Regular Counter</h2>
        <h3>{value}</h3>

        <button type="button" className='btn' onClick={() => setValue(value - 1)}>Decrease</button>
        <button type="button" className='btn' onClick={() => setValue(0)}>Reset</button>
        <button type="button" className='btn' onClick={() => setValue(value + 1)}>Increase</button>
      </section>

      <section style={{margin: '4rem 0'}}>
        <h2>More Complex Counter</h2>
        <h3>{value}</h3>

        <button type="button" className='btn' onClick={complexIncrease}>Increase</button>
      </section>
    </>
  );
}

export default UseStateCounter;