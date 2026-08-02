const { validationResult } = require('express-validator');
const Message = require('../models/Message');
const sendEmail = require('../utils/sendEmail');

exports.createContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { name, email, message } = req.body;
  try {
    const saved = await Message.create({ name, email, message });

    let emailResult = { sent: false, reason: 'skipped' };
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      emailResult = await sendEmail({
        to: 'envoy@elarionrealm.com',
        subject: 'New contact message from Elarion',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      });
    }

    res.status(201).json({
      message: 'Contact message saved',
      data: saved,
      email: emailResult.sent ? 'sent' : 'not_sent',
      emailReason: emailResult.reason || 'unknown',
    });
  } catch (error) {
    res.status(500).json({ message: 'Could not save contact message' });
  }
};
