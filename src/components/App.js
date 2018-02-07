
import React from 'react';
import _orderBy from "lodash/orderBy";

import GamesList from "./GamesList";



const games = [
  {
    _id: 1,
    featured: true,
    name: "Quadropolis",
    thumbnail: "https://cf.geekdo-images.com/BMUcxCZM_AikQ7uXeuDg43RZIWo=/fit-in/246x300/pic2840020.jpg",
    price: 3277,
    players: "2-4",
    duration: 60
  },
  {
    _id: 2,
    featured: false,
    name: "Five Tribes",
    thumbnail: "https://cf.geekdo-images.com/o3D15fBxzTt3k2IFZ2u2Xr7Wlyk=/fit-in/246x300/pic2055255.jpg",
    price: 5199,
    players: "2-4",
    duration: 80
  },
  {
    _id: 3,
    featured: false,
    name: "Roll for the Galaxy",
    thumbnail: "https://cf.geekdo-images.com/Vi3pvbq9sLk_OHzxio8lzjB_77k=/fit-in/246x300/pic1473629.jpg",
    price: 2999,
    players: "2-5",
    duration: 45
  }
];


class App extends React.Component {
  state = {
    games: []
  };

  componentDidMount() {
    this.setState({
      games: this.sortGames(games)
    })
  }

  sortGames(games) {
    return _orderBy(games, ["featured", 'name'], ["desc", "asc"]);
  }

  // Logic for toggling star icon, pass me down function
  toggleFeatured = gameId => this.setState({
    // we are using implicit return
    // just set state of game & then use ternary operator.
    games: this.sortGames(
      this.state.games.map(
        game => game._id === gameId ? {
          ...game,
          featured: !game.featured
        } : game)
    )
  })

  // // Logic for toggling star icon, pass me down function
  // toggleFeatured = gameId => {
  //   // find matching gameID in state
  //   // change featured to !boolean
  //   // save output to newGames & setState game: newGames
  //   const newGames = this.state.games.map(game => {
  //     if (game._id === gameId) return {
  //         ...game,
  //         featured: !game.featured
  //       };
  //     return game;
  //   })
  //   this.setState({
  //     games: this.sortGames(newGames)
  //   });
  // }

  render() {
    return (
      <div className="ui constainer">
        <GamesList games={ this.state.games } toggleFeatured={ this.toggleFeatured } />
      </div>
    )
  }
}


export default App;