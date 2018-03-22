var express = require("express");
var router = express.Router();
var posts = require("../data/posts.json");

/* GET users listing. */
router.get("/users/:userId/posts/:postId", function(req, res, next) {
  // res.send('respond with a resource');

  const { userId, postId } = req.params;
    
    if (isFinite(userId) && isFinite(postId)) {
          
      const userPosts = posts.filter(
        post => {
          if (post.userId == userId && post.id == postId) {
            return post;
          }
        }
      );
     res.status(200).send(userPosts);
   } else {
     res.status(400).send({ message: "invalid number supplied" });
   }
});

module.exports = router;
