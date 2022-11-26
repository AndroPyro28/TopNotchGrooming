const Feedback = require("../models/Feedback");
const MultipleTable = require("../models/MultipleTable");
const {gmailSender} = require("../helpers/GmailSender");
const bcrypt = require("bcryptjs");

const {
  signTokenForEmail,
  verifyToken,
  signTokenForPasswordReset
} = require("../helpers/AuthTokenHandler");
const generateCode = require("../helpers/GenerateId");

module.exports.getFirstThreeFeedback = async (req, res) => {
  try {
    const feedbackModel = new Feedback({});
    const result = await feedbackModel.getFirstThreeFeedback();
    return res.status(200).json(result);
  } catch (error) {
    console.error(error.message);
    return res.status(200).json({
      msg: error.message,
      success: false,
    });
  }
};

module.exports.findAccountAndSendCode = async (req, res) => {
  try {
    const multipleQuery = new MultipleTable();
    const { email } = req.body.values;
    const result = await multipleQuery.findEmail(email);
    const customer = result[0][0];
    const admin = result[1][0];
    const code = generateCode()();
    if (customer?.id) {
      gmailSender(customer?.email, code);
      const type = "customer";
      const token = signTokenForEmail(customer.id, code, type);
      const result = await multipleQuery.updateHashReset(
        token,
        customer?.id,
        type
      );
      console.log({ type, result });
      return res.status(200).json({
        msg: "Code has been sent to your email.",
      });
    } else if (admin?.id) {
      gmailSender(admin?.email, code);
      const type = "admin";
      const token = signTokenForEmail(admin.id, code, type);
      const result = await multipleQuery.updateHashReset(
        token,
        admin?.id,
        type
      );
      console.log({ type, result });
      return res.status(200).json({
        msg: "Code has been sent to your email.",
        success: true,
      });
    } else {
      throw new Error("email cannot be found");
    }
  } catch (error) {
    console.error(error);
    return res.status(200).json({
      msg: error.message,
      success: false,
    });
  }
};

module.exports.verifyCode = async (req, res) => {
  try {
    const { email, code } = req.body.values;
    const multipleQuery = new MultipleTable();
    const result = await multipleQuery.findEmail(email);
    const customer = result[0][0];
    const admin = result[1][0];
    // console.log({ customer, admin });
    if (customer?.id) {
      const decoded = verifyToken(customer?.passwordResetToken);
      console.log("decoded customer", decoded, customer);
      if (
        decoded.code == code &&
        decoded?.id == customer?.id &&
        decoded?.usertype == "customer"
      ) {
        multipleQuery.removeHashReset(decoded?.usertype, customer?.id);
        const token = signTokenForPasswordReset(customer.id, decoded?.usertype);
        console.log(token);
        return res.status(200).json({
          reset_token: token,
          usertype:decoded?.usertype,
          success: true,
        });
      }
    } else if (admin?.id) {
      const decoded = verifyToken(admin?.passwordResetToken);
      console.log("decoded admin", decoded, admin);
      if (
        decoded.code == code &&
        decoded?.id == customer?.id &&
        decoded?.usertype == "admin"
      ) {
        multipleQuery.removeHashReset(decoded?.usertype, admin?.id);
        const token = signTokenForPasswordReset(admin.id, decoded?.usertype);
        return res.status(200).json({
          reset_token: token,
          usertype:decoded?.usertype,
          success: true,
        });
      }
    } else {
      throw new Error("Invalid code or invalid email detected");
    }
  } catch (error) {
    console.error(error);
    return res.status(200).json({
      msg: error.message,
      success: false,
    });
  }
};

module.exports.updatePassword = async (req, res) => {
  try {
    const {password, confirmPassword} = req.body;

    if(password != confirmPassword) {
      throw new Error('password and confirm password do not match!')
    }
    const {userinfo} = req.headers;
    const {userType} = JSON.parse(userinfo); 
    const hashedPassword = userType === 'customer' ? await bcrypt.hash(password, 6) : password;
    const {id} = req.currentUser;
    const multipleQuery = new MultipleTable();
    const result = await multipleQuery.updateUserPassword(id, userType, hashedPassword)

    return res.status(200).json({
      msg:'password updated!',
      success: true,
      data:result
    })
  } catch (error) {
    console.error(error)
    return res.status(200).json({
      msg: error.message,
      success: false,
    });
  }
}

module.exports.getEmployeeOfTheMonth = async (req, res) => {
  try {
    const multipleQuery = new MultipleTable();
    const result = await multipleQuery.getEmployeeOfTheMonth()
    const empMonth = await multipleQuery.getAssignedMonth()

    const todayMonth = new Date().getMonth();
    const todayYear = new Date().getFullYear();
    const employees = result.map((employee) => {
      employee.appointment_activities = employee.appointment_activities.filter(appointments => {
        const date = new Date(appointments.date_n_time);
          return empMonth?.month == date.getMonth() && todayYear == date.getFullYear()
      })
      return employee;
    })
    const sortedEmployees = employees.sort((a, b) => b.appointment_activities.length - a.appointment_activities.length)
    return res.status(200).json({
      data:{sortedEmployees,empMonth},
      success: true
    })
  } catch (error) {
    console.error(error)
    return res.status(200).json({
      success: false
    })
  }
}

module.exports.getPinnedEmployee = async (req, res) => {
  try {
    const multipleQuery = new MultipleTable();
    const employees = await multipleQuery.getPinnedEmployees()
    const month = await multipleQuery.getAssignedMonth()
    return res.status(200).json({data:{employees, month}});
  } catch (error) {
    console.error(error)
  }
}

module.exports.setMonth = async (req, res) => {
  try {
    const multipleQuery = new MultipleTable();
    const result = await multipleQuery.setMonth(req.body.values.month)
    
    return res.status(200).json(result);
  } catch (error) {
    console.error(error)
  }
}