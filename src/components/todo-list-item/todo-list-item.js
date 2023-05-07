import React from "react";
import { Component } from "react"; /* {Component} === React.Component */

import "./todo-list-item.css";

// CLASS
export default class TodoListItem extends Component {
  /* {Component} === React.Component */

  // now state not used <= before was used locally, may delete
  // state = {
  //   done: false,
  //   important: false,
  // };

  // now managed from App.js <= before was local, may delete
  // onLabelClick = () => {
  //   this.setState((state) => {
  //     return {
  //       done: !state.done,
  //     };
  //   });
  // };

  // now managed from App.js <= before was local, may delete
  // onMarkImportant = () => {
  //   this.setState(({ important }) => {
  //     return {
  //       important: !important,
  //     };
  //   });
  // };

  render() {
    const {
      label,
      onDeleted,
      onToggleImportant,
      onToggleDone,
      important,
      done,
    } = this.props;

    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }

    if (important) {
      classNames += " important";
    }

    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={onToggleDone}>
          {label}
        </span>

        <button
          type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}
        >
          <i className="fa fa-exclamation" />
        </button>

        <button
          type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}

//  FUNCTION
// const TodoListItem = ({ label, important = false }) => {

//   const style = {
//     color: important ? 'steelblue' : 'black',
//     fontWeight: important ? 'bold' : 'normal'
//   };

//   return (
//     <span className="todo-list-item">
//       <span
//         className="todo-list-item-label"
//         style={style}>
//         {label}
//       </span>

//       <button type="button"
//               className="btn btn-outline-success btn-sm float-right">
//         <i className="fa fa-exclamation" />
//       </button>

//       <button type="button"
//               className="btn btn-outline-danger btn-sm float-right">
//         <i className="fa fa-trash-o" />
//       </button>
//     </span>
//   );
// };

// export default TodoListItem;
