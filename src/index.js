import React from "react";
import ReactDOM from "react-dom";

// Nested component, React tools

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
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
const Author = () => <h3> Author: Jeff Kinney</h3>;

ReactDOM.render(<BookList />, document.getElementById("root"));
