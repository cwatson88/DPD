import React from "react";
// import PropTypes from "prop-types";

const Users = props => {
  return (
    <div>
      {props.users.map(user => (
        <div key={user.id}>
          {/* <button onClick={this.getPosts.bind(this, user.id)}> */}
          <button>
            {user.username}
          </button>
        </div>
      ))}
    </div>
  );
};

// Users.propTypes = {};

export default Users;
