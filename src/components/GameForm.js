import React, { Component } from "react";
import PropTypes from "prop-types";

const tags = [
  { _id: 1, name: "dice" },
  { _id: 2, name: "economic" },
  { _id: 3, name: "family" }
];

const genres = [
  { _id: 1, name: "abstract" },
  { _id: 2, name: "euro" },
  { _id: 3, name: "ameritrash" }
];

class GameForm extends Component {
  state = {
    name: "",
    description: "",
    price: 0,
    duration: 0,
    players: "",
    featured: false,
    genre: 1,
    tags: []
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  // // Universal Method for handling types
  // handelChange = e =>
  //   this.setState({
  //     [e.target.name]:
  //       e.target.type === "number"
  //         ? parseInt(e.target.value, 10)
  //         : e.target.value
  //   });

  // Easier to read method for handling types
  handelStringChange = e => this.setState({ [e.target.name]: e.target.value });
  handelNumberChange = e =>
    this.setState({ [e.target.name]: parseInt(e.target.value, 10) });
  handelCheckboxChange = e =>
    this.setState({ [e.target.name]: e.target.checked });
  toggleTag = tag =>
    this.state.tags.includes(tag._id)
      ? this.setState({ tags: this.state.tags.filter(id => id !== tag._id) })
      : this.setState({ tags: [...this.state.tags, tag._id] });
  handleGenreChange = genre => this.setState({ genre: genre._id})

  // // Older method that just isn't nice to read or use
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

        <div className="inline field">
          <input
            type="checkbox"
            name="featured"
            id="featured"
            checked={this.state.featured}
            onChange={this.handelCheckboxChange}
          />
          <label htmlFor="featured">Featured?</label>
        </div>

        <div className="field">
          <label>Tags</label>
          {tags.map(tag => (
            <div key={tag._id} className="inline field">
              <input
                id={`tag-${tag._id}`}
                type="checkbox"
                checked={this.state.tags.includes(tag._id)}
                onChange={() => this.toggleTag(tag)}
              />
              <label htmlFor={`tag-${tag._id}`}>{tag.name}</label>
            </div>
          ))}
        </div>

        <div className="field">
          <label>Genres</label>
          {genres.map(genre => (
            <div key={genre._id} className="inline field">
              <input
                type="checkbox"
                id={`genre-${genre._id}`}
                checked={this.state.genre === genre._id}
                onChange={() => this.handleGenreChange(genre)}
              />
              <label htmlFor={`genre-${genre._id}`}>{genre.name}</label>
            </div>
          ))}
        </div>
        <button className="ui button" type="submit">
          Create
        </button>
      </form>
    );
  }
}

GameForm.propTypes = {};

export default GameForm;
