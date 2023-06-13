const express = require("express");
const router = express.Router();

const {getContact} = require("../controllers/contactController");
const {createContact} = require("../controllers/contactController");

router.route("/").get(getContact);

router.route("/:id").get(createContact);

router.route("/").post();

router.route("/:id").put((req, res) => {
    res.status(200).json({message: `Update Contact: ${req.params.id}`});
});

router.route("/:id").delete((req, res) => {
    res.status(200).json({message: `Delete Contact: ${req.params.id}`});
});

module.exports = router;