/** @format */
const express = require("express");
const login = require("../controllers/login");
const userRouter = express.Router();

userRouter.get("/login", login);

module.exports = userRouter;
