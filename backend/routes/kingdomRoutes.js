const express = require('express');
const { protect, adminOnly } = require('../middleware/auth');
const {
  getAllKingdoms,
  getKingdomById,
  createKingdom,
  updateKingdom,
  deleteKingdom,
} = require('../controllers/kingdomController');

const router = express.Router();

router.get('/', getAllKingdoms);
router.get('/:id', getKingdomById);
router.post('/', protect, adminOnly, createKingdom);
router.put('/:id', protect, adminOnly, updateKingdom);
router.delete('/:id', protect, adminOnly, deleteKingdom);

module.exports = router;
