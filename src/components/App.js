import React, { Component } from "react";
import { Route } from "react-router-dom";
import TopNavigation from "./TopNavigation";
import HomePage from "./HomePage";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <TopNavigation />

        <Route path="/" exact component={HomePage} />
      </div>
    );
  }
}

export default App;
