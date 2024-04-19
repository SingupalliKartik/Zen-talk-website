const express = require("express");
const blogModel = require("../modles/blogdata");
const router = express.Router();

router.get("/blog", (req, res) => {
  blogModel
    .find()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/blogone", (req, res) => {
  const { kuch } = req.body;
  blogModel
    .findById(kuch)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      e;
      res.json(err);
    });
});

router.post("/blog", (req, res) => {
  blogModel
    .create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});


module.exports = router;
