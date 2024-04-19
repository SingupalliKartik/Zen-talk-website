const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const login = require("./routing/login");
const blog = require("./routing/blog");
const cookieParser = require("cookie-parser");
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser())
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}));    
app.use("/", login);
app.use("/", blog);

module.exports = app;