import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import MainTemplate from "./components/MainTemplate";
import Users from "./components/Users";
import Posts from "./components/Posts";

class App extends Component {
  state = {
    users: [],
    posts: []
  };

  getPosts = this.getPosts.bind(this);

  componentDidMount() {
    // get all the user data from the api and
    // set the state of users before the users component renders
    axios
      .get("/api/users")
      .then(res => res.data.users)
      .then(users => this.setState({ users }));
  }

  // get the posts of a user by Users Component returning the userId onClick
  // then set the state of posts to the result
  async getPosts(userId, e) {
    const postApi = await axios.get(`/api/users/${userId}/posts`);
    const postData = postApi.data.map(async post => {
      const comments = await axios.get(`api/posts/${post.id}/comments`); 
      post["comments"] = comments.data; //axios returns .data with all the info, hence the .data

      return post;
    });

    // because the posts are in a map we need to promise all and ensure the await is there too!
    const posts = await Promise.all(postData); 

    this.setState({ ...this.state, posts });
  }

  render() {
    return (
      <div className="App">
        <MainTemplate
          UsersComponent={
            <Users users={this.state.users} getPosts={this.getPosts} />
          }
        >
          {this.state.posts && <Posts posts={this.state.posts} authors={this.state.users}/>}
        </MainTemplate>
      </div>
    );
  }
}

export default App;
