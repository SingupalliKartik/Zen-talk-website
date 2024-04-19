const express = require("express");
const { login, signup, logout } = require("../Controllers/userControllers");
const router = express.Router();
router.route("/kuki").post(login);
router.route("/check").post(signup);
router.route("/logout").post(logout);
module.exports = router;
