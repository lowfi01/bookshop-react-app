import React from "react";
import _orderBy from "lodash/orderBy";

import GamesList from "./GamesList";
import GameForm from "./GameForm";
import TopNavigation from "./TopNavigation";

const publishers = [
  {
    _id: 1,
    name: "Days of Wonder"
  },
  {
    _id: 2,
    name: "Rio Grande Games"
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

class App extends React.Component {
  state = {
    games: [],
    showGameForm: false
  };

  componentDidMount() {
    this.setState({
      games: this.sortGames(games)
    });
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
  toggleFeatured = gameId =>
    this.setState({
      // we are using implicit return
      // just set state of game & then use ternary operator.
      games: this.sortGames(
        this.state.games.map(
          game =>
            game._id === gameId
              ? {
                  ...game,
                  featured: !game.featured
                }
              : game
        )
      )
    });

  //Logic to show game form
  showGameForm = () =>
    this.setState({ showGameForm: !this.state.showGameForm });
  hideGameForm = () => this.setState({ showGameForm: false });

  render() {
    const numberOfColumns = this.state.showGameForm ? "ten" : "sixteen";
    return (
      <div className="ui container">
        <TopNavigation showGameForm={this.showGameForm} />

        {this.state.showGameForm && (
          <div className="six wide column">
            <GameForm publishers={publishers} cancel={this.hideGameForm} />
          </div>
        )}
        <br />
        <div className="ui stackable grid">
          <div className={`${numberOfColumns} wide column`}>
            <GamesList
              games={this.state.games}
              toggleFeatured={this.toggleFeatured}
              toggleDescription={this.toggleDescription}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
