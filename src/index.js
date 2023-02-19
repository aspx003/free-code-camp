import React from "react";
import ReactDOM from "react-dom";
import './index.css';

// Adding CSS

function BookList() {
  return (
    <section className="book-list">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );

};

const Image = () => {
  return <img src="bookimg.jpeg" alt="Diary of a Wimpy Kid" />;
};

const Title = () => <h1>Title: Diary of a Wimpy Kid</h1>;
// adding inline
const Author = () => <h3 style={{ color: "black", fontSize: '0.75rem', marginTop: '0.25rem' }}> Author: Jeff Kinney</h3>;

ReactDOM.render(<BookList />, document.getElementById("root"));
