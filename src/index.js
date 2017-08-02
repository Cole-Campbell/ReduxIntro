import React from 'react';
import ReactDOM from 'react-dom';

//Need to give file reference for files
import SearchBar from './components/search_bar';

import API_KEY from './services/youtube-api';

// Create a new component. This should produce HTML
//ES6 Syntax
const App = () => {
  return <div>HI!</div>;
  
}

// Render the component to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));