const nodemailer = require('nodemailer');
require('dotenv').config();

async function sendEmail({ to, subject, text }) {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass || pass === 'your_gmail_app_password') {
    console.warn('Email credentials are not configured. Skipping mail delivery.');
    return { sent: false, reason: 'missing_credentials' };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: Number(process.env.EMAIL_PORT || 587),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user,
      pass,
    },
  });

  await transporter.sendMail({
    from: user,
    to,
    subject,
    text,
  });

  return { sent: true };
}

module.exports = sendEmail;
