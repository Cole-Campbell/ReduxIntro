import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

//Need to give file reference for files
import SearchBar from './components/search_bar';

import YTKey from './services/youtube-api';

YTSearch({key: YTKey, term: 'Cats'}, function (data) {
  console.log(data);
});

// Create a new component. This should produce HTML
//ES6 Syntax
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Render the component to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));