
const app = require("./index")
const mongoose = require ("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/LoginSignup");

app.listen(3001, () => {
    console.log("server is runing");
  });