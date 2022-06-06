const Customer = require("../models/Customer")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

const maxAge = 24 * 60 * 60;

const assignToken = (id) => {
  return jwt.sign({ id }, process.env.jwtSecret, {
    expiresIn: maxAge,
  });
};

module.exports.login = async (req, res) => {
    const {email, password} = req.body;
    try {
        const customer = new Customer({email, password});

        const User = await customer.selectOneByEmail();

        if(!User) {
            return res.status(200).json({
                msg: "Invalid Credentials",
                success: false
            })
        }
        const isMatch = await bcrypt.compare(password, User.password);

        if(!isMatch) {
            return res.status(200).json({
                msg: "Invalid Credentials",
                success: false
            })
        }
        const assignedToken = assignToken(User.id);

        return res.status(200).json({
            assignedToken,
            success: true,
            msg: "Login Successful"
        })

    } catch (error) {
        console.error(error.message);

        return res.status(200).json({
            msg: "Something went wrong...",
            success: false
        })

    }
}