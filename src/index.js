import React from 'react';
import ReactDOM from 'react-dom';

// Nested component, React tools

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>Ansuman Patra</h2>;
const Message = () => { return <p>Hello I'm Ansuman Patra</p> }


ReactDOM.render(<Greeting />, document.getElementById('root'));