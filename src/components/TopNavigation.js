import React from "react";
import { Link } from "react-router-dom";

const TopNavigation = ({ showGameForm, showPublisher }) => (
  <div className="ui secondary pointing menu">
    <Link to="/" className="item">
      BGShop
    </Link>
    <Link to="/games " className="item">
      Games
    </Link>
    <Link to="/games/new " className="item">
      <i className="icon plus" /> Add New Game
    </Link>
  </div>
);

export default TopNavigation;
