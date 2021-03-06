import React from "react";
import _orderBy from "lodash/orderBy";
import _find from "lodash/find";
import api from "../api";

import GamesList from "./GamesList";
import GameForm from "./GameForm";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import GamePublisher from "./GamePublisher";

const publishers = [
  {
    _id: "1",
    name: "Days of Wonder",
    website: ""
  },
  {
    _id: "2",
    name: "Rio Grande Games",
    website: ""
  }
];

const games = [
  {
    _id: 1,
    publishers: 1,
    featured: true,
    name: "Quadropolis",
    thumbnail:
      "https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg",
    price: 3277,
    players: "2-4",
    duration: 60,
    descriptionToggle: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit lobortis augue sed mattis. Nullam elementum lacus nec quam faucibus, non elementum neque sagittis. Duis risus justo, dignissim finibus placerat eu, gravida vitae velit."
  },
  {
    _id: 2,
    publishers: 1,
    featured: false,
    name: "Five Tribes",
    thumbnail:
      "https://cf.geekdo-images.com/o3D15fBxzTt3k2IFZ2u2Xr7Wlyk=/fit-in/246x300/pic2055255.jpg",
    price: 5199,
    players: "2-4",
    duration: 80,
    descriptionToggle: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit lobortis augue sed mattis. Nullam elementum lacus nec quam faucibus, non elementum neque sagittis. Duis risus justo, dignissim finibus placerat eu, gravida vitae velit."
  },
  {
    _id: 3,
    publishers: 2,
    featured: false,
    name: "Roll for the Galaxy",
    thumbnail:
      "https://cf.geekdo-images.com/Vi3pvbq9sLk_OHzxio8lzjB_77k=/fit-in/246x300/pic1473629.jpg",
    price: 2999,
    players: "2-5",
    duration: 45,
    descriptionToggle: false,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit lobortis augue sed mattis. Nullam elementum lacus nec quam faucibus, non elementum neque sagittis. Duis risus justo, dignissim finibus placerat eu, gravida vitae velit."
  }
];

class GamesPage extends React.Component {
  state = {
    games: [],
    showGameForm: false,
    showPublisher: false,
    selectedGame: {},
    publishers: [],
    selectedPublisher: {},
    showForm: false,
    loading: true
  };

  componentDidMount() {
    api.games
      .fetchAll()
      .then(games =>
        this.setState({ games: this.sortGames(games), loading: false })
      );

    // this.setState({
    //   games: this.sortGames(games),
    //   publishers: publishers
    // });
  }

  sortGames(games) {
    return _orderBy(games, ["featured", "name"], ["desc", "asc"]);
  }

  // Logic to toggle game description
  toggleDescription = gameId =>
    this.setState({
      games: this.state.games.map(
        game =>
          game._id === gameId
            ? {
                ...game,
                descriptionToggle: !game.descriptionToggle
              }
            : game
      )
    });

  // Logic for toggling star icon, pass me down function
  toggleFeatured = gameId => {
    const game = _find(this.state.games, { _id: gameId });
    return this.updateGame({
      ...game,
      featured: !game.featured
    });
  };

  //Logic to show & hide game form on add game toggle from Nav
  showGameForm = () =>
    this.setState({
      showGameForm: true,
      selectedGame: {}
    });

  //Logic to hide game when pushing cancel button
  hideGameForm = () =>
    this.setState({
      showGameForm: false,
      selectedGame: {}
    });

  //Logic for selected game to edit
  selectGameForEditing = game =>
    this.setState({
      selectedGame: game,
      showGameForm: true
    });

  // Logic for if game object is a new game or request for update
  // Note - we have game._id: null as value as such if value is null, then it's a new game
  saveGame = game => (game._id ? this.updateGame(game) : this.addGame(game));

  // Logic for Updating game
  updateGame = gameData =>
    api.games.update(gameData).then(game =>
      this.setState({
        games: this.sortGames(
          this.state.games.map(item => (item._id === game._id ? game : item))
        ),
        showGameForm: false
      })
    );

  // Logic for Delete Game
  deleteGame = game =>
    api.games.delete(game).then(() =>
      this.setState({
        games: this.state.games.filter(item => item._id !== game._id)
      })
    );

  //Logic for adding a new game on create game button
  addGame = gameData =>
    api.games.create(gameData).then(game =>
      this.setState({
        games: this.sortGames([...this.state.games, game]),
        showGameForm: false
      })
    );

  gameId = id => this.state.games.map(game => (id === game._id ? id + 1 : id));

  //Logic to add new Publisher
  addPublisher = publisher =>
    this.setState({
      publishers: [
        ...this.state.publishers,
        {
          ...publisher,
          _id: this.state.publishers.length + 1
        }
      ]
    });

  // Logic for submitting publisher
  savePublisher = publisher =>
    publisher._id
      ? this.updatePublisher(publisher)
      : this.addPublisher(publisher);

  // Logic Update published
  updatePublisher = publisher =>
    this.setState({
      publishers: this.state.publishers.map(
        item => (item._id === publisher._id ? publisher : item)
      )
    });

  //Logic remove publisher
  deletePublisher = publisherId => {
    this.setState({
      publishers: this.state.publishers.filter(
        publisher => publisherId !== publisher._id
      )
    });
  };

  selectedPublisherForEditing = publisher =>
    this.setState({
      selectedPublisher: publisher,
      showForm: true
    });

  //Logic to show & hide Publisher list
  showPublisher = e =>
    this.setState({
      showPublisher: !this.state.showPublisher
    });

  hidePublisher = e =>
    this.setState({
      showPublisher: false
    });

  showForm = e => {
    e.preventDefault();
    this.setState({
      showForm: true,
      selectedPublisher: {}
    });
  };

  render() {
    const numberOfColumns =
      this.state.showGameForm || this.state.showPublisher ? "ten" : "sixteen";
    return (
      <div className="ui container">
        <div className="ui stackable grid">
          {this.state.showGameForm && (
            <div className="six wide column">
              <GameForm
                publishers={publishers}
                cancel={this.hideGameForm}
                submit={this.saveGame}
                game={this.state.selectedGame}
              />
            </div>
          )}
          <div className={`${numberOfColumns} wide column`}>
            {this.state.loading ? (
              <div className="ui icon message">
                <i className="notched circle loading icon" />
                <div className="content">
                  <div className="header">Wait a second!</div>
                  <p>Loading games collection.....</p>
                </div>
              </div>
            ) : (
              <GamesList
                games={this.state.games}
                toggleFeatured={this.toggleFeatured}
                toggleDescription={this.toggleDescription}
                editGame={this.selectGameForEditing}
                deleteGame={this.deleteGame}
              />
            )}
          </div>
          {this.state.showPublisher && (
            <div className="six wide column">
              <GamePublisher
                publishers={this.state.publishers}
                addPublisher={this.addPublisher}
                deletePublisher={this.deletePublisher}
                hidePublisher={this.hidePublisher}
                editPublisher={this.selectedPublisherForEditing}
                selectedPublisher={this.state.selectedPublisher}
                submit={this.savePublisher}
                showForm={this.showForm}
                showFormState={this.state.showForm}
              />
            </div>
          )}
        </div>
        {/* <LoginForm />
                        <br />
                        <SignUpForm /> */}
      </div>
    );
  }
}

export default GamesPage;
