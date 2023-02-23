import React from "react";
import ReactDOM from "react-dom";

// create react element
// const el = <h1>Hello World</h1>;

// Using vanilla JS. How Babel transforms JSX into JS.
// const el = React.createElement('h1', null, 'Hello World!!');

// render element on a page
// ReactDOM.render(el, document.getElementById('root'));

// create element tree
const el = (
  <div>
    <h1>My ToDo list</h1>
    <input placeholder="search" />
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  </div>
);

ReactDOM.render(el, document.getElementById('root'));
