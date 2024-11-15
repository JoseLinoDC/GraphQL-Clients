// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

require('dotenv').config(); // Debe estar antes de acceder a las variables de entorno.
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

console.log('SENDGRID_API_KEY:', process.env.SENDGRID_API_KEY);

const msg = {
  to: 'linitodc@gmail.com',         // Change to your recipient
  from: 'joselinodiaz25@gmail.com', // Change to your verified sender
  subject: 'Pruebas xd',
  text: 'Pruebas mamalonas xds',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent');
  })
  .catch((error) => {
    console.error('Error:', error.response.body.errors);
  });
