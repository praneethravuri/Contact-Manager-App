const express = require("express");
const User = require("../models/userModel");

const {
  registerUser,
  currentUser,
  loginUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", currentUser);

module.exports = router;
