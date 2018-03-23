import React from "react";
import PropTypes from "prop-types";

import { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import InboxIcon from "material-ui-icons/MoveToInbox";

// set the user information mainly cosmetic but when clicked
// get the user posts and set them in state in the main app component
const Users = props => {
  return <div>
      {props.users.map(user => (
        <div key={user.id} onClick={props.getPosts.bind(this, user.id)}>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
        </div>
      ))}
    </div>;
};

Users.propTypes = {
    users:PropTypes.array
};

export default Users;
