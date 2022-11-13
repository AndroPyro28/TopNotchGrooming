const poolConnection = require("../config/connectDB");

class Comments {
  feedback_id;
  comment;
  admin_id;
  constructor({ feedback_id="", comment="", admin_id="" }) {
    this.feedback_id = feedback_id;
    this.comment = comment;
    this.admin_id = admin_id;
  }

  sendComment = async () => {
    try {
        const insertQuery = `INSERT INTO comments (comment, feedback_id, admin_id) VALUES(?, ?, ?)`;
        const [result, _] = await poolConnection.execute(insertQuery, [this.comment, this.feedback_id, this.admin_id])
        return result
    } catch (error) {
        console.error(error)
    }
  }
}

module.exports = Comments;
