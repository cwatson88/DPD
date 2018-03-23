import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Posts = props => {
  return (
    <div>
      {props.posts.map(post => (
        <Fragment key={post.id}>
        <p>{post.id}</p>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>{post.body?post.body:new Date()}</p>
        </Fragment>
      ))}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array
};

export default Posts;
