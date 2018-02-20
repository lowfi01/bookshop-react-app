import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactImageFallBack from "react-image-fallback";
import FormInlineMessage from "./FormInlineMessage";

const initialData = {
  name: "",
  description: "",
  price: 0,
  duration: 0,
  players: "",
  featured: false,
  publishers: 0,
  thumbnail:
    "https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg"
};

class GameForm extends Component {
  state = {
    data: initialData,
    errors: {},
    loading: false
  };

  componentDidMount() {
    // Check if edit button has been selected & selectedGame object has been passed with data
    if (this.props.game._id) {
      this.setState({ data: this.props.game });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.game._id && nextProps.game._id !== this.state.data._id) {
      this.setState({ data: nextProps.game });
    }

    if (!nextProps.game._id) {
      this.setState({ data: initialData });
    }
  }

  validate(data) {
    const errors = {};

    if (!data.name) errors.name = "This field can't be blank";
    if (!data.players) errors.players = "This field can't be blank";
    if (!data.description) errors.description = "This field can't be blank";
    if (!data.thumbnail) errors.thumbnail = "This field can't be blank";
    if (!data.publisher) errors.publisher = "This field can't be blank";
    if (data.duration <= 0) errors.duration = "To Short, isn't it?";
    if (data.price <= 0) errors.price = "To cheap don't you think?";

    return errors;
  }

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);

    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      //Note - you can remove timeout here, but it's cool to see the loading feature
      setTimeout(() => {
        this.props
          .submit(this.state.data)
          .catch(err =>
            this.setState({ errors: err.response.data.errors, loading: false })
          );
      }, 1500);
    }
  };

  // Easier to read method for handling types
  handelStringChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  handelNumberChange = e =>
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: parseInt(e.target.value, 10)
      }
    });
  handelCheckboxChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.checked }
    });

  render() {
    const { data, errors, loading } = this.state;
    const formClassNames = loading ? "ui form loading" : "ui form";
    return (
      <form className={formClassNames} onSubmit={this.handleSubmit}>
        <div className="ui grid">
          <div className="twelve wide column">
            <div className={errors.name ? "field error" : "field"}>
              <label htmlFor="name" /> Game Title
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full game title"
                value={data.name}
                onChange={this.handelStringChange}
              />
              <FormInlineMessage content={errors.name} type="error" />
            </div>

            <div className={errors.description ? "field error" : "field"}>
              <label htmlFor="description" /> Game Description
              <textarea
                type="text"
                id="description"
                name="description"
                placeholder="Game description"
                value={data.description}
                onChange={this.handelStringChange}
              />
              <FormInlineMessage content={errors.description} type="error" />
            </div>
          </div>
          <div className="four wide column">
            <ReactImageFallBack
              src={data.thumbnail}
              fallbackImage="http://via.placeholder.com/250x250"
              alt="Thumbnail"
              className="ui image"
            />
          </div>
        </div>

        <div className={errors.thumbnail ? "field error" : "field"}>
          <label htmlFor="thumbnail" /> Thumbnail
          <input
            type="text"
            id="thumbnail"
            name="thumbnail"
            placeholder="Image URL"
            value={data.thumbnail}
            onChange={this.handelStringChange}
          />
          <FormInlineMessage content={errors.thumbnail} type="error" />
        </div>
        <div className="three fields">
          <div className={errors.price ? "field error" : "field"}>
            <label htmlFor="price" /> Price (in cents)
            <input
              type="number"
              id="price"
              name="price"
              value={data.price}
              onChange={this.handelNumberChange}
            />
            <FormInlineMessage content={errors.price} type="error" />
          </div>
          <div className={errors.duration ? "field error" : "field"}>
            <label htmlFor="duration" /> Duration (in min)
            <input
              type="number"
              id="duration"
              name="duration"
              value={data.duration}
              onChange={this.handelNumberChange}
            />
            <FormInlineMessage content={errors.duration} type="error" />
          </div>
          <div className={errors.players ? "field error" : "field"}>
            <label htmlFor="players" /> Players ( eg 2-3 )
            <input
              type="text"
              id="players"
              name="players"
              value={data.players}
              onChange={this.handelStringChange}
            />
            <FormInlineMessage content={errors.players} type="error" />
          </div>
        </div>

        <div className="inline field">
          <input
            type="checkbox"
            name="featured"
            id="featured"
            checked={data.featured}
            onChange={this.handelCheckboxChange}
          />
          <label htmlFor="featured">Featured?</label>
        </div>

        <div className={errors.publisher ? "field error" : "field"}>
          <label>Publisher</label>
          <select
            name="publisher"
            id="publisher"
            type="checkbox"
            value={data.publisher}
            onChange={this.handelNumberChange}
          >
            <option value="0">Choose Publisher</option>
            {this.props.publishers.map(publisher => (
              <option key={publisher._id} value={publisher._id}>
                {publisher.name}
              </option>
            ))}
          </select>
          <FormInlineMessage content={errors.publisher} type="error" />
        </div>

        <div className="ui fluid buttons">
          <button className="ui primary button" type="submit">
            Create
          </button>
          <div className="or" />
          <a className="ui button" onClick={this.props.cancel}>
            Cancel
          </a>
        </div>
      </form>
    );
  }
}

GameForm.propTypes = {
  publishers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  cancel: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  game: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    players: PropTypes.string,
    duration: PropTypes.number,
    featured: PropTypes.bool
  })
};

GameForm.defaultProps = {
  publishers: [],
  game: initialData
};

export default GameForm;
