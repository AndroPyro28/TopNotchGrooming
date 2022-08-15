const poolConnection = require("../config/connectDB");
const { verifyToken } = require("../helpers/AuthTokenHandler");

module.exports.verifySocket = async (headers) => {
  try {
    const { userinfo } = headers;
    const { userType, userToken } = JSON.parse(userinfo);
    const { id, usertype } = verifyToken(userToken);

    if(usertype != userType) {
      throw new Error('invalid token');
  }

    const selectUser = `SELECT * FROM ${userType} WHERE id = ?`;

    const [result, _] = await poolConnection.execute(selectUser, [id]);

    if (result?.length <= 0) {
      throw new Error("Session expired");
    }

    return result[0];
  } catch (error) {
    return null;
  }
};
