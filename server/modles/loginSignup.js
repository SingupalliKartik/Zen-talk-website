const mongoose = require("mongoose");
const bcript = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const LoginSignupSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

LoginSignupSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcript.hash(this.password, 12);
    console.log(this.password);
  }
  next();
});

LoginSignupSchema.methods.Match_Password = async function (password) {
  return bcript.compare(password, this.password);
};
LoginSignupSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECREAT_KEY);
    // this.tokens = this.tokens.concat({ token: token });
    return token;
  } catch (err) {
    console.log(err);
  }
};

const loginSignupModel = mongoose.model("loginsingups", LoginSignupSchema);
module.exports = loginSignupModel;
