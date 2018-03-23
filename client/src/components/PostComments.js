import React from "react";
import PropTypes from "prop-types";
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

const Comments = props => {
  const { comments } = props;

  return (
    <div>
      <Card className={styles.card}>
        <CardContent>
          <Typography className={styles.title} color="textSecondary">
            {comments.name}
          </Typography>
          <Typography component="p">{comments.body}</Typography>
          <Typography className={styles.pos} color="textSecondary">
            Posted on - {comments.date || Date()} by <b>{comments.email}</b>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.object
};
export default Comments;
