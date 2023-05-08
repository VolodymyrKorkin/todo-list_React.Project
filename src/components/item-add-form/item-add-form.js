import React, { Component } from "react";

import "./item-add-form.css";

export default class ItemAddForm extends Component {
  state = {
    label: "",
  };

  onLabelChange = (event) => {
    this.setState({
      label: event.target.value, // 'event.target.value' contains current value of the input field
    });
  };

  onSubmit = (event) => {
    event.preventDefault(); // cancel default behavior (reloading page after sending data to server)
    this.props.onItemAdded(this.state.label);
  };

  render() {
    return (
      <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="form-control"
          onChange={this.onLabelChange}
          placeholder="What needs to be done"
        />
        <button className="btn btn-outline-secondary">Add Item</button>
      </form>
    );
  }
}
