import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component. This should produce HTML
//ES6 Syntax
const App = () => {
  return <div>HI!</div>;
  
}

// Render the component to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));