import React, { Component } from "react";
import PropTypes from "prop-types";

class SignUpForm extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  handleStringChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ui form">
        <div className="ui container">
          <div className="ui grid">
            <div className="five wide column">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="UserEmail@example.com"
                  value={this.state.email}
                  onChange={this.handleStringChange}
                />
              </div>
              <div className="field">
                <label htmlFor="password">Password</label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="*****************"
                  value={this.state.password}
                  onChange={this.handleStringChange}
                />
              </div>
              <div className="field">
                <label htmlFor="confirmPassword"> Confirm Password</label>
                <input
                  type="text"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="*****************"
                  value={this.state.confirmPassword}
                  onChange={this.handleStringChange}
                />
              </div>

              <div className="field">
                <div className="ui fluid buttons">
                  <button className="ui primary button" type="submit">
                    Sign Up
                  </button>
                  <div className="or" />
                  <a className="ui button">Cancel</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

SignUpForm.propTypes = {};

export default SignUpForm;
