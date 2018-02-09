import React, { Component } from "react";
import PropTypes from "prop-types";

class GameForm extends Component {
  state = {
    name: "",
    description: "",
    price: 0,
    duration: 0,
    players: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  // handelChange = e =>
  //   this.setState({
  //     [e.target.name]:
  //       e.target.type === "number"
  //         ? parseInt(e.target.value, 10)
  //         : e.target.value
  //   });

  handelStringChange = e => this.setState({ [e.target.name]: e.target.value });
  handelNumberChange = e =>
    this.setState({ [e.target.name]: parseInt(e.target.value, 10) });

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
            onChange={this.handelStringChange}
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
            onChange={this.handelStringChange}
          />
        </div>
        <div className="three fields">
          <div className="field">
            <label htmlFor="price" /> Price (in cents)
            <input
              type="number"
              id="price"
              name="price"
              value={this.state.price}
              onChange={this.handelNumberChange}
            />
          </div>
          <div className="field">
            <label htmlFor="duration" /> Duration (in min)
            <input
              type="number"
              id="duration"
              name="duration"
              value={this.state.duration}
              onChange={this.handelNumberChange}
            />
          </div>
          <div className="field">
            <label htmlFor="players" /> Players
            <input
              type="text"
              id="players"
              name="players"
              value={this.state.players}
              onChange={this.handelStringChange}
            />
          </div>
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
