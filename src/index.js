import React from 'react';
import ReactDOM from 'react-dom';

// Nested component, React tools

function Greeting() {
  return (
    <div>
      <Person />
      <p>Hello I'm Ansuman Patra</p>
    </div>
  );
}

const Person = () => <h2>Ansuman Patra</h2>;


ReactDOM.render(<Greeting />, document.getElementById('root'));