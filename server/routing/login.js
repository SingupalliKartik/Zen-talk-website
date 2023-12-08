const express = require("express");
const loginSignupModel = require("../modles/loginSignup");
const router = express.Router();

router.post("/kuki", async (req, res) => {
  const { username, email, password } = req.body;
  // let temp = loginSignupModel.findOne({email: email})
  // if(temp){res.json({temp}) ; return;}
  const finalUser = await loginSignupModel.create(req.body);
  console.log(finalUser);
  if (finalUser) {
    // const token = await finalUser.generateAuthToken();
    res.status(201).json("hogaya 1dec");
  }
});
router.post("/check", async (req, res) => {
  const { name, password } = req.body;
  const user = await loginSignupModel.findOne({ name: name });
  if (!user) {
    return res.status(400).json({
      success: false,
      message: "User Does Not Exists",
    });
  }
  const isMatch = await user.Match_Password(password);
  if (!isMatch) {
    return res.status(400).json({
      success: false,
      message: "Incorrect Password",
    });
  } else {
    const token = await user.generateAuthToken();
    console.log("hogaya");
    console.log(token);

    res
      .status(201)
      .cookie("access_token", "token", {
        httpOnly: false,
        sameSite: "None",
        secure: true,
        credentials: true,
      })
      .json({
        success: true,
      });
  }
});
router.get("/set-cookie", (req, res) => {
  res.cookie("token", "kuchbhi").send("data");
});
module.exports = router;
