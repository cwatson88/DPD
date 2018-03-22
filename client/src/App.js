import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import MainTemplate from "./components/MainTemplate";
import Users from "./components/Users";

class App extends Component {
  state = {
    users: []
  };

  getPosts = this.getPosts.bind(this);

  componentDidMount() {
    axios
      .get("/api/users")
      .then(res => res.data.users)
      .then(users => this.setState({ users }));
  }

  getPosts(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="App">
        <MainTemplate>
          <Users users={this.state.users}/>
        </MainTemplate>
      </div>
    );
  }
}

export default App;
