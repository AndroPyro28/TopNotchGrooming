const nodemailer = require('nodemailer');
const { dateTimeFormatByText } = require("./dateTimeFormatByText");

const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  auth: {
    user: process.env.NODEMAILER_GMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

const sendEmailByAppointment = (appointment, customer, status) => {
  let {firstname, lastname, contact, email} = customer;

  const {date_n_time, appointment_type} = appointment;
  const { date, time } = dateTimeFormatByText(date_n_time);
  let textMsg = ''
  if(status === 'rejected') {
    textMsg = `
    <div>
    <h1>Good Day ${firstname} ${lastname}!</h1>
    
    <p>We announce that your appointment of ${appointment_type} is being rejected, 
    we apologize for the inconvenience and hoping for your understanding, please issue another appointment with different date and time.

    Thank you for your patience!
    </p>
    <br/>
    <br/>
    -TopNotchGrooming-Malolos
    </div>
    `
  } 
  if(status === 'approved') {
    textMsg = `
    <div>
    <h1>Good Day ${firstname} ${lastname}!</h1> 

    <p>This is a text confirmation that your appointment of ${appointment_type} you issued has been approved, 
    please come to our store with your pet at ${date} ${time}.
    <br/>
    <br/>
    Thank you for your patience!
    </p>
    <br/>

    <small>-TopNotchGrooming-Malolos</small>
    </div>
    `;
  }

  const details = {
    from: process.env.NODEMAILER_GMAIL,
    to: email,
    subject: "Appointment News!",
    text: "Appointment News!",
    html: textMsg,
  };

  mailTransporter.sendMail(details, (err, info) => {
    if (err) {
      console.log(err);
      return false;
    } else {
      console.log("Email sent: " + info.response);
      return true;
    }
  })
};


const sendEmailByStatus = (status, data, reference) => {
  let textMsg = "";
  let { firstname, lastname, email } = data.customer;
  let {contact, } = data;

  if (status == 1) {
    textMsg = `<div>
    <h1>Good day ${firstname} ${lastname}</h1>
        
    <p>Your order in transaction: ${reference} in Top notch grooming shop is now being prepared</p>
    
    <small>-Top Notch Grooming Shop</small>
</div>
`;
  }

  if (status == 2) {
    textMsg = `
    <div>
    <h1>Good day ${firstname} ${lastname}</h1>
         
    <p>Your order is done packing and ready to dispatch</p>

  <small>-Top Notch Grooming Shop</small>
</div>
`;
  }

  if (status == 3) {
    textMsg = `
    <div>
    <h1>Good day ${firstname} ${lastname}</h1>
        
    <p>Your order is in shipping process</p>

    <small>-Top Notch Grooming Shop</small>
    </div>
`;
  }

  if (status == 4) {
    textMsg = `
    <div>
    <h1>Good day ${firstname} ${lastname}</h1>
        
    <p>Your order is completed, thank you for ordering our product enjoy!</p>

    <small>-Top Notch Grooming Shop</small>
</div>
`;
  }

  const details = {
    from: process.env.NODEMAILER_GMAIL,
    to: email,
    subject: "Order Status",
    text: "Order Status",
    html: textMsg,
  };
  mailTransporter.sendMail(details, (err, info) => {
    if (err) {
      console.log(err);
      return false;
    } else {
      console.log("Email sent: " + info.response);
      return true;
    }
  })


};


const gmailSender = (email, code) => {
  try {

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

module.exports = {gmailSender, gmailNotifStream, sendEmailByAppointment, sendEmailByStatus}