const nodemailer = require("nodemailer");

function sendMail({ from, to, subject, text, html }) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp-relay.brevo.com",
    port: process.env.SMTP_PORT || 587,
    auth: {
      user: process.env.SMTP_USERNAME || "sai.tata9949746270@gmail.com",
      pass: process.env.SMTP_PASSWORD || "btShAER81GPzDQLO",
    },
  });

  const mailDetails = {
    from,
    to,
    subject,
    text,
    html,
  };

  transporter.sendMail(mailDetails, function (err, info) {
    if (err) {
      console.log(err);
      return { error: err, message: "Email not sent", success: false };
    } else {
      return { message: "Email sent successfully", success: true, info };
    }
  });
}

module.exports = sendMail;
