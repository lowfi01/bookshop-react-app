import React from "react";
import PropTypes from "prop-types";

import GameCard from "./GameCard";
import GamesMessage from "./GamesMessage";

const GamesList = ({ games, toggleFeatured, toggleDescription, editGame }) => (
  <div className="ui four cards">
    {games.length === 0 ? (
      <GamesMessage
        type={undefined}
        content={"You should add content, don't you think"}
        header={"There are no games in your store"}
      />
    ) : (
      games.map(game => (
        <GameCard
          game={game}
          key={game._id}
          toggleFeatured={toggleFeatured}
          toggleDescription={toggleDescription}
          editGame={editGame}
        />
      ))
    )}
  </div>
);

GamesList.protoTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  editGame: PropTypes.func.isRequired
};

GamesList.defaultProps = {
  games: []
};

export default GamesList;
