import React from "react";
import PropTypes from "prop-types";
import "../App.css";

import { ListItem, ListItemIcon, ListItemText } from "material-ui/List";

// set the user information mainly cosmetic but when clicked
// get the user posts and set them in state in the main app component
const Users = props => {
  return <div>
      {props.users.map(user => (
        <div key={user.id} onClick={props.getPosts.bind(this, user.id)}>
          <ListItem button className="user--profile-pictures">
            <ListItemIcon>
              <img src={`profile-pictures/${user.picture}`} alt={user.name} />
            </ListItemIcon>
            <ListItemText
              primary={
                <div>
                  <b>UID:</b>
                  {user.id}
                  <br />
                  {user.name}
                  <br />
                  <i>{user.email}</i>
                </div>
              }
            />
          </ListItem>
        </div>
      ))}
    </div>;
};

Users.propTypes = {
  users: PropTypes.array
};

export default Users;
