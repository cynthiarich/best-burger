const db = require("../models");
const express = require("express");
const router = express.Router();

function renderHome(req, res) {
    res.render("burger")
}
router.get("/", renderHome);

module.exports = router;