import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// named imports
import { books } from './books';

// default imports
import Book from './Book';


function BookList() {
  return (
    <section className='book-list'>
      {books.map((book) => {
        return (<Book key={book.id} {...book} />);
      })}
    </section>
  );
}


 
ReactDOM.render(<BookList />, document.getElementById('root'));