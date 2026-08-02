const Character = require('../models/Character');

exports.createCharacter = async (req, res) => {
  try {
    const character = await Character.create({
      ...req.body,
      createdBy: req.user ? req.user._id : null,
    });

    res.status(201).json({ message: 'Character created', data: character });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create character' });
  }
};
