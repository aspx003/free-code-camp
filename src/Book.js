import React from "react";

// default exports
const Book = ({ img, title, author }) => {
  // atrribute and event handler
  // onClick, onMouseHover

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('Hello World');
  }

  const advancedClickHandler = (author) => {
    console.log(author);
  }

  return (
    <article className='book'
    // onMouseOver={() => console.log(title)}
    >
      <img src={img} alt={title} />
      <h2 onClick={() => console.log(title)}>{title}</h2>
      <h3>{author}</h3>
      <button type='button' onClick={clickHandler}>Reference Example Button</button>
      <button type='button' onClick={() => { advancedClickHandler(author) }}>Advanced Click Handler</button>
    </article>
  );
};

export default Book;