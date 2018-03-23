import React, { Component } from "react";
import PropTypes from "prop-types";

import Badge from "material-ui/Badge";
import IconButton from "material-ui/IconButton";
import Comment from "material-ui-icons/Comment"; //Icons are in PascalCase
import Card, { CardContent } from "material-ui/Card";
import Typography from "material-ui/Typography";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12,
    fontSize: "0.7em"
  }
};


class PostComments extends Component {
  state = {};
  componentDidMount() {
    this.setState({ commentsVisible: false });
  }
  toggleComments = this.toggleComments.bind(this);

  toggleComments() {
    this.setState({
      ...this.state,
      commentsVisible: !this.state.commentsVisible
    });
  }
  render() {
    const { comments } = this.props;

    return <div>
        <IconButton onClick={this.toggleComments}>
          <Badge badgeContent={comments.length} color="primary">
            <Comment />
          </Badge>
        </IconButton>
        {comments.map(comment => this.state.commentsVisible && 
        <Card key={comment.id} className={styles.card}>
          <CardContent>
            <Typography className={styles.title} color="textSecondary">
              {comment.name}
            </Typography>
            <Typography component="p">{comment.body}</Typography>
            <Typography className={styles.pos} color="textSecondary">
              Posted on - {comment.date || Date()} by <b>
                {comment.email}
              </b>
            </Typography>
          </CardContent>
        </Card>
        )}
      </div>;
  }
}
PostComments.propTypes = {
  comments: PropTypes.array
};
export default PostComments;
