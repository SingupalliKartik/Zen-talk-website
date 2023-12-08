const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const login = require("./routing/login");
const blog = require("./routing/blog");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/LoginSignup");
app.use("/", login);
app.use("/", blog);
app.listen(3001, () => {
  console.log("server is runing");
});
