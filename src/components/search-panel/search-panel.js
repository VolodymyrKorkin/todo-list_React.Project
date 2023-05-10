import React, { Component } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    term: "",
  };

  onSearchChange = (event) => {
    const term = event.target.value; // event.target.value - current value of input
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="type to search"
        value={this.state.term} // make element controlled
        onChange={this.onSearchChange} // send to the app every button press
      />
    );
  }
}
