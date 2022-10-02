const Feedback = require("../models/Feedback");

module.exports.getFirstThreeFeedback = async (req, res) => {
    try {
        const feedbackModel = new Feedback({});
        const result = await feedbackModel.getFirstThreeFeedback();
        return res.status(200).json(result);
    } catch (error) {
        console.error(error.message)
    }
}