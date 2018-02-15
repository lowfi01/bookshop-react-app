import React from "react";
import PropTypes from "prop-types";

const TopNavigation = ({ showGameForm, showPublisher }) => (
  <div className="ui secondary pointing menu">
    <a href="/" className="item">
      BGShop
    </a>
    <a onClick={showGameForm} className="item">
      <i className="icon plus" /> Add New Game
    </a>
    <a onClick={showPublisher} className="item">
      Manage Publishers
    </a>
  </div>
);

TopNavigation.propTypes = {
  showGameForm: PropTypes.func.isRequired,
  showPublisher: PropTypes.func.isRequired
};

export default TopNavigation;
