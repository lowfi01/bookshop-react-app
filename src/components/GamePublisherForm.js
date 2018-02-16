import React, { Component } from "react";
import PropTypes from "prop-types";

import FormInlineMessage from "./FormInlineMessage";

const initialData = {
  _id: null,
  name: "",
  website: ""
};

class componentName extends Component {
  state = {
    data: initialData,
    errors: {},
    showForm: false
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.selectedPublisher._id) {
      this.setState({ data: nextProps.selectedPublisher });
    }

    if (!nextProps.selectedPublisher._id) {
      this.setState({ data: initialData });
    }
  }

  validate(data) {
    const errors = {};

    if (!data.name) errors.name = "This field must not be blank";
    if (!data.website) errors.website = "This field must not be blank";

    return errors;
  }

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate(this.state.data);
    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  };

  handleStringChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    const { data, errors } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="ui container">
          <div className={errors.name ? "field error" : "field"}>
            <label htmlFor="name">Publisher Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Publisher Name"
              value={data.name}
              onChange={this.handleStringChange}
            />
            <FormInlineMessage content={errors.name} type="error" />
          </div>

          <div className={errors.website ? "field error" : "field"}>
            <label htmlFor="website">Website</label>
            <input
              type="text"
              name="website"
              id="website"
              placeholder="Website URL"
              value={data.website}
              onChange={this.handleStringChange}
            />
            <FormInlineMessage content={errors.website} type="error" />
          </div>
        </div>
        <br />
        <div className="ui fluid buttons">
          <button type="submit" className="ui primary button">
            Add
          </button>
          <div className="or" />
          <a className="ui button" onClick={this.props.hideForm}>
            Cancel
          </a>
        </div>
      </form>
    );
  }
}

componentName.propTypes = {
  submit: PropTypes.func,
  selectedPublisher: PropTypes.object,
  hideForm: PropTypes.func
};

export default componentName;
