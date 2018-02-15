import React, { Component } from "react";
import PropTypes from "prop-types";

class GamePublisher extends Component {
  render() {
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
          <tbody>
            <tr>
              <td>hello</td>
              <td>hello</td>
            </tr>
          </tbody>
        </table>
        <form className="ui form">
          <div className="ui container">
            <label htmlFor="name">Publisher Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Publisher Name"
            />

            <label htmlFor="website">Website</label>
            <input
              type="text"
              name="website"
              id="website"
              placeholder="Website URL"
            />
          </div>
          <br />
          <div className="ui fluid buttons">
            <button className="ui primary button">Save</button>
            <div className="or" />
            <a className="ui button">Cancel</a>
          </div>
        </form>
      </div>
    );
  }
}

GamePublisher.propTypes = {};

export default GamePublisher;
