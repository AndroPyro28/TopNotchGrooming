const Vonage = require("@vonage/server-sdk");
const { dateTimeFormatByText } = require("./dateTimeFormatByText");

module.exports.sendTextMessageByStatus = (status, data, reference) => {
  let textMsg = "";
  let { firstname, lastname } = data.customer;
  let {contact} = data;

  if (contact.startsWith("09")) {
    contact = contact.replace("09", "639");
  }
  const vonage = new Vonage({
    apiKey: process.env.VONAGE_API_KEY,
    apiSecret: process.env.VONAGE_API_SECRET,
  });

  if (status == 1) {
    textMsg = `Good day ${firstname} ${lastname},
        
Your order in transaction: ${reference} in Top notch grooming shop is now being prepared

-Top Notch Grooming Shop

`;
  }

  if (status == 2) {
    textMsg = `Good day ${firstname} ${lastname},
         
Your order is done packing and ready to dispatch

-Top Notch Grooming Shop

`;
  }

  if (status == 3) {
    textMsg = `Good day ${firstname} ${lastname}
        
Your order is in shipping process

-Top Notch Grooming Shop

`;
  }

  if (status == 4) {
    textMsg = `Good day ${firstname} ${lastname}
        
Your order is completed, thank you for ordering our product enjoy!

-Top Notch Grooming Shop

`;
  }

  const from = "Vonage APIs";
  const to = contact;

  return vonage.message.sendSms(from, to, textMsg, (err, responseData) => {
    if (err) {
      console.log(err);
    } else {
      if (responseData.messages[0]["status"] === "0") {
        console.log(`Message sent to ${to} successfully.`);
      } else {
        console.log(
          `Message failed with error: ${responseData.messages[0]["error-text"]}`
        );
      }
    }
  });
};


module.exports.sendTextMessageByAppointment = (appointment, customer, status) => {
  let {firstname, lastname, contact} = customer;
  const {date_n_time, appointment_type} = appointment;
  const { date, time } = dateTimeFormatByText(date_n_time);
  let textMsg = ''
  if(status === 'rejected') {
    textMsg = `Good Day ${firstname} ${lastname}!
    
    We announce that your appointment of ${appointment_type} is being rejected, 
    we apologize for the inconvenience and hoping for your understanding, please issue another appointment with different date and time.

    Thank you for your patience!

    -TopNotchGrooming-Malolos
    `
  } 
  if(status === 'approved') {
    textMsg = `Good Day ${firstname} ${lastname}! 

    This is a text confirmation that your appointment of ${appointment_type} you issued has been approved, 
    please come to our store with your pet at ${date} ${time}.
    
    Thank you for your patience!
  
    -TopNotchGrooming-Malolos
    `;
  }
  
  
  if (contact.startsWith("09")) {
    contact = contact.replace("09", "639");
  }
  const vonage = new Vonage({
    apiKey: process.env.VONAGE_API_KEY,
    apiSecret: process.env.VONAGE_API_SECRET,
  });


  const from = "Vonage APIs";
  const to = contact;
console.log(textMsg);
  return vonage.message.sendSms(from, to, textMsg, (err, responseData) => {
    if (err) {
      console.log(err);
    } else {
      if (responseData.messages[0]["status"] === "0") {
        console.log(`Message sent to ${to} successfully.`);
      } else {
        console.log(
          `Message failed with error: ${responseData.messages[0]["error-text"]}`
        );
      }
    }
  });
};
