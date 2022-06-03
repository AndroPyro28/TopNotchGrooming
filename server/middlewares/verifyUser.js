const jwt = require('jsonwebtoken');
const poolConnection = require('../config/connectDB');

module.exports.verifyUser = async (req, res, next) => {
    try {
        const {userinfo} = req.headers;
        const {userToken, userType} = JSON.parse(userinfo); 
        const decodedToken = jwt.verify(userToken, process.env.jwtSecret);
        
        const selectQuery = `SELECT * FROM ${userType} WHERE id = ?;`;

        const [result, _]=  await poolConnection.execute(
            selectQuery,
            [decodedToken.id]
        );

        if(result.length <= 0) {
            return res.status(200).json({
                success:false,
                msg:"session expired"
            });
        }

        req.currentUser = result[0];

        next();
    } catch (error) {        
        return res.status(200).json({
            success:false,
            msg:"session expired"
        })
    }
}