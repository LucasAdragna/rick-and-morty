/** @format */

const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;
  let access = false;
  users.forEach((use) => {
    if (use.email === email && use.password === password) {
      access = true;
    }
  });
  return res.json({ access });
};

module.exports = login;
