import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyASsCqe8o9ilxeCJHFA4jy3DABa5cBLu6I';

// Create a new component. This should produce HTML
//ES6 Syntax
const App = () => {
  return <div>HI!</div>;
  
}

// Render the component to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));