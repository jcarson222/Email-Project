const nodeMailer = require("nodemailer");
const sgMail = require("@sendgrid/mail");

const sendEmailEthereal = async (req, res) => {
  let testAccount = await nodeMailer.createTestAccount();

  let transporter = nodeMailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "enola58@ethereal.email", // generated ethereal user
      pass: "6bJUZa7HrQEMh2M3Yg", // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: ' "Jesse Carson" <jesse@gmail.com>',
    to: "bar@example.com",
    subject: "Testing Email",
    html: "<h2>Sending Emails with Node.js</h2>",
    // OR text: "blah blah blah",
  });

  res.json(info);
};

const sendEmail = async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: "jmcarson222@hotmail.com", // Change to your recipient
    from: "jcarson222@hotmail.com", // Change to your verified sender
    subject: "Sending with SendGrid is Fun",
    text: "and easy to do anywhere, even with Node.js",
    html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  };

  const info = await sgMail.send(msg);
  res.json(info);
};

module.exports = sendEmail;
