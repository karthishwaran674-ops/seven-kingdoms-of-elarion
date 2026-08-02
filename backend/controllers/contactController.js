const { validationResult } = require('express-validator');
const ContactMessage = require('../models/contactModel');
const sendMail = require('../utils/mailer');

exports.createContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, message: 'Validation failed', errors: errors.array() });
  }

  const { name, email, message } = req.body;
  const ipAddress = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const createdAt = new Date();

  try {
    const saved = await ContactMessage.create({
      name,
      email,
      message,
      date: createdAt,
      ipAddress,
    });

    const mailResult = await sendMail({
      to: process.env.EMAIL_USER || 'elarionuniverse007@gmail.com',
      replyTo: email,
      subject: 'New Contact Form Submission',
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Time:</strong> ${createdAt.toString()}</p>
      `,
    });

    if (!mailResult.success) {
      return res.status(500).json({ success: false, message: 'Failed to send message.' });
    }

    return res.status(201).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
};
