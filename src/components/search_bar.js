import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Exporting Modules, Classes, State
//Input for user to type into

/*
//Functional component. Keeps to it's self
const SearchBar = () => {
  return <input />
}
*/
//Class component. Internal Record Keeping. Aware of itself and others.
//Declaration of a new class. JavaScript Object. Removed React.Component as Component has been added to the import.

//Use of arrow function to condense code.
class SearchBar extends Component{
  //State is a plain JS object used to record and react to user events.
  //Only class based components can have state.
  constructor(props) {
    super(props);

    //ID Can be set to anything
    this.state = { term: '' };
  }

  render() {
    //Manipulating State by setState
    return (
      <div>
        <input onChange = {e => this.setState({ term: e.target.value })} />
        Value of the input: {this.state.term}
      </div>
    )
  }

  /*Method for change. Method condensed into class with Arrow Function
  onInputChange(e) {
    console.log(e);
  }
}
*/
}

export default SearchBar;