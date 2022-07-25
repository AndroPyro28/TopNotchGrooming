const Vonage = require("@vonage/server-sdk");

module.exports.sendTextMessageByStatus = (status, data, reference) => {
  let textMsg = "";
  let { firstname, lastname } = data.customer;
  let {contact} = data;

  if (contact.startsWith("09")) {
    contact = contact.replace("09", "63");
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
