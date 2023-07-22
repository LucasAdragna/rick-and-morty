/** @format */

const express = require("express");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const favoriteRouter = express.Router();

favoriteRouter.post("/", postFav);
favoriteRouter.delete("/:id", deleteFav);

module.exports = favoriteRouter;
