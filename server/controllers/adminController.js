const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");

const {assignToken} = require('../helpers/AuthTokenHandler')

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(200).json({
      msg: "Invalid Credentials",
      success: false,
    });
  }

  const admin = new Admin(req.body);

  const adminUser = await admin.selectOneByEmail();

  if(!adminUser) {
    return res.status(200).json({
        msg: "Invalid Credentials",
        success: false,
      });
  }

//   const isExist = await bcrypt.compare(password, adminUser.password);

  const isExist = password == adminUser.password;

  if(!isExist) {
    return res.status(200).json({
        msg: "Invalid Credentials",
        success: false,
      });
  }
  const token = assignToken(adminUser.id);

  return res.status(200).json({
    token,
    success: true,
    msg: "Login Successful"
})
};
