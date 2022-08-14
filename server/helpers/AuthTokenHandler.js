const jwt = require("jsonwebtoken");

const assignToken = (id, usertype) => {
const maxAge = 24 * 60 * 60;
  return jwt.sign({ id, usertype }, process.env.jwtSecret, {
    expiresIn: maxAge,
  });
};

const verifyToken = (userToken) => {
  return jwt.verify(userToken, process.env.jwtSecret);
};

module.exports = { assignToken, verifyToken };