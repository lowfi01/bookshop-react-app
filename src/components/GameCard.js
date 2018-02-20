import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; 

import GamesPrice from "./GamesPrice";
import Featured from "./Featured";

class GameCard extends React.Component {
  state = {
    showConfirmation: false
  };

  showConfirmation = () => this.setState({ showConfirmation: true });
  hideConfirmation = () => this.setState({ showConfirmation: false });

  render() {
    const {
      game,
      toggleFeatured,
      toggleDescription,
      editGame,
      deleteGame
    } = this.props;
    return (
      <div className="ui card">
        {game.descriptionToggle ? (
          <div className="content">
            <p>{game.description}</p>
          </div>
        ) : (
          <div className="image">
            <span className="ui green ribbon label">
              <GamesPrice price={game.price} />
              {game.price < 3000 && "!"}
            </span>
            <img src={game.thumbnail} alt="" />
            <Featured
              toggleFeatured={toggleFeatured}
              featured={game.featured}
              gameId={game._id}
            />
          </div>
        )}

        <div className="content">
          <Link to={`/game/${game._id}`} className="header">{game.name}</Link>
          <div className="meta">
            <i className="icon users" />
            {game.players}
            <i className="icon wait" />
            {game.duration}
            <a onClick={() => toggleDescription(game._id)}>
              <i className="right floated icon eye" />
            </a>
          </div>
        </div>
        <div className="extra content">
          {this.state.showConfirmation ? (
            <div className="ui two buttons">
              <a
                className="ui red basic button"
                onClick={() => deleteGame(game)}
              >
                <i className="ui icon check " /> YES
              </a>
              <a
                className="ui grey basic button"
                onClick={this.hideConfirmation}
              >
                <i className="ui icon close" /> NO
              </a>
            </div>
          ) : (
            <div className="ui two buttons">
              <a
                className="ui green basic button"
                onClick={() => editGame(game)}
              >
                <i className="ui icon edit" />
              </a>
              <a
                className="ui red basic button"
                onClick={this.showConfirmation}
              >
                <i className="ui icon trash" />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

GameCard.propTypes = {
  game: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    players: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    featured: PropTypes.bool.isRequired
  }).isRequired,
  toggleFeatured: PropTypes.func.isRequired,
  editGame: PropTypes.func.isRequired,
  deleteGame: PropTypes.func.isRequired
};

export default GameCard;
