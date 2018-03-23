import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Posts = props => {
  return (
    <div>
      {props.posts.map(post => (
        <div key={post.id} className="post__container">
          <p>{post.id}</p>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>{post.date ? post.date : Date()}</p>
          <hr/>
        </div>
      ))}
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.array
};

export default Posts;
