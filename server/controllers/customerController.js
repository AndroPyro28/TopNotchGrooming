const Customer = require("../models/User")

module.exports.customerSelectOne = async (req, res) => {
    const customer = new Customer();
    const {id} = req.params;
    try {
        
        const selectedCustomer = await customer.findOneById(id);
        return res.status(200).json(selectedCustomer);

    } catch (error) {
        console.error(error.message)
    }
}