var nodeMailer = require('nodemailer');
var config = require('../config');

function send(subject, body, from, callback) {
  var smtpTransport = nodeMailer.createTransport(config.mail);
  var mailOptions = { 
      to: config.mail.to,
      from: from,
      subject: subject,
      html: body
  };
  smtpTransport.sendMail(mailOptions, function(err, response) {
      callback(err);
  });
}

module.exports = { 
  send: send
}