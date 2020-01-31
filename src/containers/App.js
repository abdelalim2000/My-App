import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField } from "../actions";
import CardArray from "../components/card_component/CardArray";
import SearchBox from "../components/searchbox_component/SearchBox";
import "./app.scss";
import Scroll from "../components/Scroll/Scroll";

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      robot: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ robot: users });
      });
  }

  render() {
    const { robot } = this.state;
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = robot.filter(robots => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardArray robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
