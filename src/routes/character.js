/** @format */
const express = require("express");
const { getCharById } = require("../controllers/getCharById");
const characterRouter = express.Router();

characterRouter.get("/:id", getCharById);

module.exports = characterRouter;
