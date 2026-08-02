const Achievement = require('../models/Achievement');

exports.saveAchievements = async (req, res) => {
  try {
    const existing = await Achievement.findOne({ user: req.user ? req.user._id : null });

    if (existing) {
      existing.achievements = req.body.achievements;
      await existing.save();
      return res.json({ message: 'Achievements updated', data: existing });
    }

    const record = await Achievement.create({ user: req.user ? req.user._id : null, achievements: req.body.achievements });
    res.status(201).json({ message: 'Achievements saved', data: record });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save achievements' });
  }
};

exports.getAchievements = async (req, res) => {
  try {
    const record = await Achievement.findOne({ user: req.user ? req.user._id : null });
    res.json({ data: record || [] });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch achievements' });
  }
};
