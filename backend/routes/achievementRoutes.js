const express = require('express');
const { saveAchievements, getAchievements } = require('../controllers/achievementController');

const router = express.Router();

router.post('/', saveAchievements);
router.get('/', getAchievements);

module.exports = router;
