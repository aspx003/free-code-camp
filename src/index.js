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
        { /* using spread operator */ }
        return (<Book key={book.id} {...book} />);
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{author}</h3>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));