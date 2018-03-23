import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import PostComments from "./PostComments";

class Posts extends Component {
  state = {};
  render() {
    const { posts, authors } = this.props;
    return (
      <Fragment>
        {posts.map(post => (
          <div key={post.id} className="post__container">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>
              Posted on: {post.date ? post.date : Date()} by{" "}
              <b>
                {
                  // the find will find the correct author by ID but will return an object
                  // React does not like objects as props.
                  // Once found the find feature needs to have .name to return the name prop from the object
                  authors.find(
                    author => author.id === post.userId && author.name
                  ).name
                }
              </b>
            </p>
            <hr />
            <PostComments key={post.id} comments={post.comments} />
          </div>
        ))}
      </Fragment>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array
};

export default Posts;
