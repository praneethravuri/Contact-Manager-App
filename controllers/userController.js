const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@desc register a user
//@route POST /api/users/register
//@access public

const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "Register the user" });
});

//@desc login user
//@route POST /api/users/login
//@access public

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login User" });
});

//@desc get current user
//@route GET /api/users/current
//@access public

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});

module.exports = { registerUser, loginUser, currentUser };
