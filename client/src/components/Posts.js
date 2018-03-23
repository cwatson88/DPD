import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Badge from "material-ui/Badge";
import IconButton from "material-ui/IconButton";
import Comment from "material-ui-icons/Comment"; //Icons are in PascalCase
import PostComments from "./PostComments";

class Posts extends Component {
  state = {
    commentsVisible: false
  };

   componentDidMount() {
    this.setState({commentsVisible: false})
   }
  toggleComments = this.toggleComments.bind(this);

  toggleComments() {
    this.setState({ ...this.state, commentsVisible: !this.state.commentsVisible });
  }
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
            <IconButton onClick={this.toggleComments}>
              <Badge badgeContent={post.comments.length} color="primary">
                <Comment />
              </Badge>
            </IconButton>
            {post.comments.map(
              comment =>
                this.state.commentsVisible && (
                  <PostComments key={comment.id} comments={comment} />
                )
            )}
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
