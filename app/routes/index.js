const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  logout,
  profile
} = require("../controllers/auhtController");
const passport = require("../config/passport");
const { verifyToken } = require("../config/token");

router.post("/signup", signup);

router.post("/login", passport.authenticate("local"), login);

router.get("/logout", logout);

router.get("/profile", verifyToken, profile);

module.exports = router;
