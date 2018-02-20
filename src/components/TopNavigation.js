import React from "react";
import { NavLink } from "react-router-dom";

const TopNavigation = ({ showGameForm, showPublisher }) => (
  <div className="ui secondary pointing menu">
    <NavLink exact to="/" className="item">
      BGShop
    </NavLink>
    <NavLink exact to="/game " className="item">
      Games
    </NavLink>
    <NavLink exact to="/game/new " className="item">
      <i className="icon plus" /> Add New Game
    </NavLink>
  </div>
);

export default TopNavigation;
