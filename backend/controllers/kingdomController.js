const Kingdom = require('../models/Kingdom');

exports.getAllKingdoms = async (req, res) => {
  try {
    const kingdoms = await Kingdom.find();
    res.json(kingdoms);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch kingdoms' });
  }
};

exports.getKingdomById = async (req, res) => {
  try {
    const kingdom = await Kingdom.findById(req.params.id);
    if (!kingdom) return res.status(404).json({ message: 'Kingdom not found' });
    res.json(kingdom);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch kingdom' });
  }
};

exports.createKingdom = async (req, res) => {
  try {
    const kingdom = await Kingdom.create(req.body);
    res.status(201).json(kingdom);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create kingdom' });
  }
};

exports.updateKingdom = async (req, res) => {
  try {
    const kingdom = await Kingdom.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!kingdom) return res.status(404).json({ message: 'Kingdom not found' });
    res.json(kingdom);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update kingdom' });
  }
};

exports.deleteKingdom = async (req, res) => {
  try {
    const kingdom = await Kingdom.findByIdAndDelete(req.params.id);
    if (!kingdom) return res.status(404).json({ message: 'Kingdom not found' });
    res.json({ message: 'Kingdom deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete kingdom' });
  }
};
