const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan")
const loginSignupModel = require("./modles/loginSignup");
const blogModel = require("./modles/blogdata");
const app = express();
app.use(morgan("dev"))
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/LoginSignup ");

app.post("/check", (req, res) => {
  const { name, password } = req.body;

  loginSignupModel.findOne({ name: name }).then((user) => {
    console.log(user);
    if (user) {
      if (user.password === password) {
        console.log("first");
        res.json("sucess");
      } else {
        res.json("The pass is incorrect");
      }
    } else {
      res.json("no record exested");
    }
  });
});


app.get("/blog", (req, res) => {
  blogModel
    .find()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/blogone", (req, res) => {
    const {kuch} = req.body
  blogModel
    .findById(kuch)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {e
      res.json(err);
    });
});
 
app.post("/kuki", (req, res) => {
  const {username, email , password} = req.body;
  let temp = loginSignupModel.findOne({email: email})
  if(temp){res.json({temp}) ; return;}
  loginSignupModel
    .create(req.body)
    .then((loginSignup) => res.json(loginSignup))
    
});


app.post("/blog", (req, res) => {
  blogModel
    .create(req.body)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("server is runing");
});
