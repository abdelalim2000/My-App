import React, { Component } from "react";
import CardArray from "../components/card_component/CardArray";
import SearchBox from "../components/searchbox_component/SearchBox";
import { robots } from "../components/card_component/robots";
import "./app.scss";
import Scroll from "../components/Scroll/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robot: [],
      searchField: ""
    };
  }

  componentDidMount() {
    this.setState({ robot: robots });
  }

  handelSearch = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { robot, searchField } = this.state;
    const filteredRobots = robot.filter(robots => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.handelSearch} />
        <Scroll>
          <CardArray robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
