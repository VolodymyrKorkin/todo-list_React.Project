import React from "react";
import ReactDOM from "react-dom";

// create react element
// const el = <h1>Hello World</h1>;

// Using vanilla JS. How Babel transforms JSX into JS.
// const el = React.createElement('h1', null, 'Hello World!!');

// render element on a page
// ReactDOM.render(el, document.getElementById('root'));

// create element tree
// const el = (
//   <div>
//     <h1>My ToDo list</h1>
//     <input placeholder="search" />
//     <ul>
//       <li>Learn React</li>
//       <li>Build Awesome App</li>
//     </ul>
//   </div>
// );

// create react component
const TodoList = () => {
  return (
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My ToDo list</h1>;
};

const SearchPanel = () => {
  return <input placeholder="search" />
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
 