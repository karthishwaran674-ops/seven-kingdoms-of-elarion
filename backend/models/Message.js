const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    date: { type: Date, default: Date.now },
    ipAddress: { type: String, default: 'unknown' },
    status: { type: String, enum: ['unread', 'read', 'archived'], default: 'unread' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Message', messageSchema);
