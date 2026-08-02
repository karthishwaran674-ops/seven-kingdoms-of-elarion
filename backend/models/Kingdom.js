const mongoose = require('mongoose');

const kingdomSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    animal: { type: String, required: true },
    element: { type: String, required: true },
    capital: { type: String, required: true },
    ruler: { type: String, required: true },
    description: { type: String, required: true },
    image: String,
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Kingdom', kingdomSchema);
