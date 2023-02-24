import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState("Hello react"));

  const [text, setText] = useState("react is nice");

  const clickHandle = () => {
    // text === "react is nice" ? setText("hello world") : setText("react is nice");
    if(text === "react is nice") {
      setText("hello world");
    } else {
      setText("react is nice");
    }
  }

  return (
    <>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={clickHandle}>Click for a change</button>
    </>
  );
}

export default UseStateBasics;