import React from "react";
import PropTypes from "prop-types";

import GamesPrice from "./GamesPrice";
import Featured from "./Featured";

const GameCard = ({game, toggleFeatured}) => (
  <div className="ui card">
    <div className="image">
      <span className="ui green ribbon label"><GamesPrice price={ game.price }/>{ game.price < 3000 && "!" }</span><img src={ game.thumbnail } alt="" />
      <Featured toggleFeatured={ toggleFeatured } featured={ game.featured } gameId={ game._id } />
    </div>
    <div className="content">
      <a className="header">
        { game.name }}</a>
      <div className="meta">
        <i className="icon users" />
        { game.players }
        <i className="icon wait" />
        { game.duration }
      </div>
    </div>
  </div>
);

GameCard.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    featured: PropTypes.bool.isRequired
  }).isRequired,
  toggleFeatured: PropTypes.func.isRequired,

};


export default GameCard;
