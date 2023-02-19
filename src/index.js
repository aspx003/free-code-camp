import React from 'react';
import ReactDOM from 'react-dom';

function Greeting() {
  return (
    <div>
      <h1>Hello React</h1>
      <ul>
        <li>
          <a href="#">Hello world</a>
        </li>
      </ul>
    </div>
  );
}

// const Greeting = () => {
//   return React.createElement('div', {}, React.createElement('h1', {}, 'Hello react'));
// }

ReactDOM.render(<Greeting />, document.getElementById('root'));