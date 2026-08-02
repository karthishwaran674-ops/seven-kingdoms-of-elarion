const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    achievements: [
      {
        id: String,
        title: String,
        unlocked: Boolean,
        progress: Number,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Achievement', achievementSchema);
