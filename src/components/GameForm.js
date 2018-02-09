import React, { Component } from "react";
import PropTypes from "prop-types";

class GameForm extends Component {
  state = {
    name: "",
    description: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handelChange = e => this.setState({ [e.target.name]: e.target.value });

  // handleNameChange = e => this.setState({ name: e.target.value });
  // handleDescriptionChange = e => this.setState({ description: e.target.value });

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label htmlFor="name" /> Game Title
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full game title"
            value={this.state.name}
            onChange={this.handelChange}
          />
        </div>

        <div className="field">
          <label htmlFor="description" /> Game Description
          <textArea
            type="text"
            id="description"
            name="description"
            placeholder="Full game title"
            value={this.state.description}
            onChange={this.handelChange}
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
