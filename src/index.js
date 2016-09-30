import React from 'react';
import ReactDOM from 'react-dom';

// this is how we import our home made components
import SearchBar from './components/search_bar.js';

// this is the API key for youtube API
const API_KEY = 'AIzaSyCKpWl_BfFctVHhyG7TKg9j2cWWhOybNbg';

// 1. We are creating a new componente and it should produce some HTML


// const is ES6 sintax : const is a constant that can never be reassing later
// this is a class, Class App is also a component that is used as a constructor.
 const App = () => {
    // this return is JSX
    return (
      <div>
        <SearchBar/>
      </div>
    )
  }

// 2. then the HTML must be places in the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
