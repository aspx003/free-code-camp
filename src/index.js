import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Adding CSS
// setting up variables
const author = 'Author: Jeff Kinney';
const title = "Title: Diary of a Wimpy Kid";
const img = 'bookimg.jpeg';

function BookList() {
  return (
    <section className="book-list">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img src={img} alt="Diary of a Wimpy Kid" />
      <h1>{title}</h1>
      <h3>{author}</h3>
      <p></p>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
