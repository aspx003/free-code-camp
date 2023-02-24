import React from "react";

const ErrorExample = () => {
  let title = 'Vanilla JS sucks!!!'

  const handleClick = () => {
    title = 'Java sucks!!!'
    console.log(title);
  }

  return ( 
    <>
      <h1>{title}</h1>
      <button type='button' className="btn" onClick={handleClick}>Click Here</button>
    </>
   );
}
 
export default ErrorExample;