const config = require('../config/config');

const mailjet = require ('node-mailjet').connect(
  config.MAILJET_API_KEY,
  config.MAILJET_SECRET)

const sendEmail = ({ isGoing, name, numberOfGuests }) => {
  return mailjet.post("send", {'version': 'v3.1'})
  .request({
    "Messages":[
      {
        "From": {
          "Email": config.MAILER_FROM_EMAIL,
          "Name": config.MAILER_FROM_NAME
        },
        "To": [
          {
            "Email": config.MAILER_TO_EMAIL,
          }
        ],
        "Subject": `${name} potwierdza przybycie na wesele`,
        "TextPart": "My first Mailjet email",
        "HTMLPart": `Imię i nazwisko: ${name}<br>Idzie: ${isGoing}<br>Ilość osób: ${numberOfGuests}`,
        "CustomID": "AppGettingStartedTest"
      }
    ]
  })
  // .request()
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
    console.log(err.message)
  })
}

  module.exports = sendEmail;