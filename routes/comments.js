var express = require("express");
var router = express.Router();
var comments = require("../data/comments.json");

/* GET comments from a postid */
router.get("/posts/:postId/comments", function(req, res, next) {
  const { postId } = req.params;

  if (isFinite(postId)) {
    const postComments = comments.filter(comment => {
      if (comment.postId == postId) {
        return comment;
      }
    });
    res.status(200).send(postComments);
  } else {
    res.status(400).send({ message: "invalid url supplied" });
  }
});

module.exports = router;
