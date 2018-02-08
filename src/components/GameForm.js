import React, { Component } from "react";
import PropTypes from "prop-types";

class GameForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log({
      title: this.name.value
    });
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label htmlFor="name" /> Game Title
          <input
            type="text"
            id="name"
            placeholder="Full game title"
            ref={input => (this.name = input)}
          />
        </div>
        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

GameForm.propTypes = {};

export default GameForm;
