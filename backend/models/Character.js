const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    kingdom: { type: String, required: true },
    weapon: { type: String, required: true },
    magic: { type: String, required: true },
    animal: { type: String, required: true },
    power: { type: Number, required: true },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Character', characterSchema);
