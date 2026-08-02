const nodemailer = require('nodemailer');
require('dotenv').config();

async function sendMail({ to, replyTo, subject, html }) {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass || pass === 'YOUR_GOOGLE_APP_PASSWORD') {
    return { success: false, reason: 'missing_credentials' };
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: user,
    to,
    replyTo,
    subject,
    html,
  });

  return { success: true };
}

module.exports = sendMail;
