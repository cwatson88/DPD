var express = require("express");
var router = express.Router();
var posts = require("../data/posts.json");

/* GET posts listing. */
router.get("/users/:userId/posts", function(req, res, next) {
  // deconstruct the params.userId 
  const { userId } = req.params;
    // ensure the user Id is a number and not null, string etc
    if (isFinite(userId)) {
          
      const userPosts = posts.filter(
        post => {
          if (post.userId == userId) {
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
