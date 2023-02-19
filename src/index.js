import React from 'react';
import ReactDOM from 'react-dom';

// Nested component, React tools

function Greeting() {
  return (
    <div>
      <h2>Ansuman Patra</h2>
      <p>Hello I'm Ansuman Patra</p>
    </div>
  );

}


ReactDOM.render(<Greeting />, document.getElementById('root'));