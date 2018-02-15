import React, { Component } from "react";
import PropTypes from "prop-types";
import PublisherList from "./PublisherList";
import FormInlineMessage from "./FormInlineMessage";

class GamePublisher extends Component {
  state = {
    data: {
      name: "",
      website: ""
    },
    errors: {}
  };

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
      this.props.addPublisher(this.state.data);
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
      <div className="ui container">
        <i className="ui icon close" /> Publishers
        <table className="ui single line table">
          <thead>
            <tr>
              <th>Name</th>
              <th className="collapsing">Actions</th>
            </tr>
          </thead>
          {this.props.publishers.map(publisher => (
            <PublisherList
              key={publisher._id}
              publisher={publisher}
              deletePublisher={this.props.deletePublisher}
            />
          ))}
        </table>
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
            <a className="ui button">Cancel</a>
          </div>
        </form>
      </div>
    );
  }
}

GamePublisher.propTypes = {};

GamePublisher.defaultProps = {
  publishers: []
};

export default GamePublisher;
