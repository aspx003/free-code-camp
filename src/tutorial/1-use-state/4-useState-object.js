import React, { useState } from "react";

const UseStateObject = () => {

  const [person, setPerson] = useState({ name: 'peter', age: 24, message: 'random message' });

  const changeMessage = () => {
    // setPerson({message: 'Hello reacters!!!'});
    // '...' is known as spread operator
    setPerson({ ...person, message: 'Hello reacters!!!' });
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>

      <button type="button" className="btn" onClick={changeMessage}>Click to Change message</button>
    </>
  );
}

export default UseStateObject;