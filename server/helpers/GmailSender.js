const nodemailer = require('nodemailer');

const gmailSender = (email, code) => {
  try {
    const mailTransporter = nodemailer.createTransport({
      service: "gmail",
      secure: false,
      auth: {
        user: process.env.NODEMAILER_GMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    const details = {
      from: process.env.NODEMAILER_GMAIL,
      to: email,
      subject: "Password Reset",
      text: "Password Reset",
      html: `<div><b>Use this code to reset your password</b><br><p> Code: ${code}</p></div>`,
    };

    mailTransporter.sendMail(details, (err, info) => {
      if (err) {
        console.log(err);
        return false;
      } else {
        console.log("Email sent: " + info.response);
        return true;
      }
    });
  } catch (error) {
    console.error(error);
  }
};

const gmailNotifStream = (customers) => {
  try {
    const mailTransporter = nodemailer.createTransport({
      service: "gmail",
      secure: false,
      auth: {
        user: process.env.NODEMAILER_GMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });
    customers.forEach((customer) => {
      const details = {
        from: process.env.NODEMAILER_GMAIL,
        to: customer.email,
        subject: "Live Stream Event",
        text: "Live Stream Event",
        html: `Top Notch has hosted a new live stream`,
      };
  
      mailTransporter.sendMail(details, (err, info) => {
        if (err) {
          console.log(err);
          return false;
        } else {
          console.log("Email sent: " + info.response);
          return true;
        }
      });
    })
   
  } catch (error) {
    console.error(error);
  }
}

module.exports = {gmailSender, gmailNotifStream}