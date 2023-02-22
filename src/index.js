import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const books = [
  {
    id: 1,
    title: 'Diary of a Wimpy Kid',
    author: 'Author: Jeff Kinney',
    img: 'bookimg.jpeg'
  },
  {
    id: 2,
    title: 'Treasure Island',
    author: 'Author: Robert Louis Stevenson',
    img: 'bookimg.jpeg'
  },
  {
    id: 3,
    title: 'The Grand Design',
    author: 'Author: Stephen Hawking & Leonard Mildnow',
    img: 'stephen-hawking.jpg'
  }
];

function BookList() {
  return (
    <section className='book-list'>
      {books.map((book) => {
        return (<Book key={book.id} {...book} />);
      })}
    </section>
  );
}

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
    <article className='book' onMouseOver={() => console.log(title)}>
      <img src={img} alt={title} />
      <h2 onClick={() => console.log(title)}>{title}</h2>
      <h3>{author}</h3>
      <button type='button' onClick={clickHandler}>Reference Example Button</button>
      <button type='button' onClick={() => {advancedClickHandler(author)}}>Advanced Click Handler</button>
    </article>
  );
};
 
ReactDOM.render(<BookList />, document.getElementById('root'));