const jwt = require("jsonwebtoken");

const assignToken = (id) => {
const maxAge = 24 * 60 * 60;
  return jwt.sign({ id }, process.env.jwtSecret, {
    expiresIn: maxAge,
  });
};

const verifyToken = (userToken) => {
  return jwt.verify(userToken, process.env.jwtSecret);
};

module.exports = { assignToken, verifyToken };
