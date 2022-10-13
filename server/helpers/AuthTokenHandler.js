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

const signTokenForEmail = (id, code, usertype) => {
  return jwt.sign({ id, code, usertype }, process.env.jwtSecret, {
    expiresIn:'5m',
  });
}

const signTokenForPasswordReset = (id, usertype) => {
  return jwt.sign({ id, usertype }, process.env.jwtSecret, {
    expiresIn:'5m',
  });
}

module.exports = { assignToken, verifyToken, signTokenForEmail, signTokenForPasswordReset };