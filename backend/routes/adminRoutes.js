const express = require('express');
const { protect, adminOnly } = require('../middleware/auth');
const { getDashboard, getUsers, getMessages, getCharacters, getKingdoms } = require('../controllers/adminController');

const router = express.Router();

router.get('/dashboard', protect, adminOnly, getDashboard);
router.get('/users', protect, adminOnly, getUsers);
router.get('/messages', protect, adminOnly, getMessages);
router.get('/characters', protect, adminOnly, getCharacters);
router.get('/kingdoms', protect, adminOnly, getKingdoms);

module.exports = router;
