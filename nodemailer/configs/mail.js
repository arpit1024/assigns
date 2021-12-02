const nm = require('nodemailer')

module.exports = nm.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, 
    auth: {
      user: "8b4607cda7963e",
      pass: "87f2e0297a3998", 
    },
  });