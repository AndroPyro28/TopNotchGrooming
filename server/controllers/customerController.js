const Customer = require("../models/User")

module.exports.signup = async (req, res) => {
    
    const customer = new Customer(req.body);
    
    const isExists = await customer.checkIfExistByPhoneEmail();
    if(isExists) {
        return res.status(200).json({
            msg: "Phone number or email already exist",
            success: false
        })
    }
    const result = await customer.insertOne();

    if(!result) {
        return res.status(200).json({
            msg: "Something went wrong...",
            success: false
        })
    }

    return res.status(200).json({
        msg: "Your account registered successfully!",
        success: true
    })

}