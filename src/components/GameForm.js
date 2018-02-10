import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactImageFallBack from "react-image-fallback";

class GameForm extends Component {
  state = {
    name: "",
    description: "",
    price: 0,
    duration: 0,
    players: "",
    featured: false,
    publishers: 0,
    thumbnail: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  // Easier to read method for handling types
  handelStringChange = e => this.setState({ [e.target.name]: e.target.value });
  handelNumberChange = e =>
    this.setState({ [e.target.name]: parseInt(e.target.value, 10) });
  handelCheckboxChange = e =>
    this.setState({ [e.target.name]: e.target.checked });

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="ui grid">
          <div className="twelve wide column">
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
                placeholder="Game description"
                value={this.state.description}
                onChange={this.handelStringChange}
              />
            </div>
          </div>
          <div className="four wide column">
            <ReactImageFallBack
              src={this.state.thumbnail}
              fallbackImage="http://via.placeholder.com/250x250"
              alt="Thumbnail"
              className="ui image"
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="thumbnail" /> Thumbnail
          <input
            type="text"
            id="thumbnail"
            name="thumbnail"
            placeholder="Image URL"
            value={this.state.thumbnail}
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
          <label>Publisher</label>
          <select
            name="publisher"
            id="publisher"
            value={this.state.publisher}
            onChange={this.handelNumberChange}
          >
            <option value="0">Choose Publisher</option>
            {this.props.publishers.map(publisher => (
              <option key={publisher._id} value={publisher._id}>
                {publisher.name}
              </option>
            ))}
          </select>
        </div>

        <button className="ui button" type="submit">
          Create
        </button>
      </form>
    );
  }
}

GameForm.propTypes = {
  publishers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

GameForm.defaultProps = {
  publishers: []
};

export default GameForm;
