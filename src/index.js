import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// setting up variables
// const title = 'Diary of a Wimpy Kid';
// const author = 'Author: Jeff Kinney';
// const img = 'bookimg.jpeg;

// stroring values in 'objects' instead of 'const's
const firstBook = {
  title: 'Diary of a Wimpy Kid',
  author: 'Author: Jeff Kinney',
  img: 'bookimg.jpeg'
}

const secondBook = {
  title: 'Treasure Island',
  author: 'Author: Robert Louis Stevenson',
  img: 'bookimg.jpeg'
}

function BookList() {
  return (
    <section className='book-list'>
      {/* passing props into components */}
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} >
        {/* adding children */}
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, voluptatem!</p>
      </Book>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
    </section>
  );
}

// various ways to write props
// passing children
const Book = ({ img, title, author, children }) => {
  // const { img, title, author, children } = props;

  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h3>{author}</h3>
      {/* rendering children */}
      {children}

      {/* <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      {props.children}*/}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));