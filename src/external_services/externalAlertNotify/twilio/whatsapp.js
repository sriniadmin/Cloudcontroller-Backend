require('dotenv').config();
//const logger = require("../../../config/logger")
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);
logger = console
logger.debug("The Client of Twilio", client)

// The message to be string
// The phone numbers to be in the format - "whatsapp:+19876543210"
// ie.. +countrycode followed by Phone Number
function sendWhatsApp(message, fromPhn, toPhn) {
    client.messages
      .create({body: 'Welcome to Live247.ai', from: fromPhn, to: toPhn})
      .then(message => console.log(message.sid))
      .catch((err) => {
              logger.debug("Test ", err)
            })
}

module.exports = {sendWhatsApp}
