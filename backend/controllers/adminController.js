const User = require('../models/User');
const Message = require('../models/Message');
const Kingdom = require('../models/Kingdom');
const Character = require('../models/Character');

exports.getDashboard = async (req, res) => {
  try {
    const [users, messages, kingdoms, characters] = await Promise.all([
      User.countDocuments(),
      Message.countDocuments(),
      Kingdom.countDocuments(),
      Character.countDocuments(),
    ]);

    res.json({ users, messages, kingdoms, characters });
  } catch (error) {
    res.status(500).json({ message: 'Failed to load admin dashboard' });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to load users' });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Failed to load messages' });
  }
};

exports.getCharacters = async (req, res) => {
  try {
    const characters = await Character.find().sort({ createdAt: -1 });
    res.json(characters);
  } catch (error) {
    res.status(500).json({ message: 'Failed to load characters' });
  }
};

exports.getKingdoms = async (req, res) => {
  try {
    const kingdoms = await Kingdom.find();
    res.json(kingdoms);
  } catch (error) {
    res.status(500).json({ message: 'Failed to load kingdoms' });
  }
};
