/** @format */

const express = require("express");
const morgan = require("morgan");
const userRouter = require("../routes/userLogin");
const favoriteRouter = require("../routes/favorites");
const characterRouter = require("../routes/character");
const PORT = 3001;
const server = express();

server.use(express.json());

server.use(morgan("dev"));

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/character", characterRouter);
server.use("/user", userRouter);
server.use("/favorites", favoriteRouter);

server.get("/health-check", (req, res) => {
  res.send("working");
});

server.listen(3001, () => {
  console.log("Server raised in port: " + PORT);
});
