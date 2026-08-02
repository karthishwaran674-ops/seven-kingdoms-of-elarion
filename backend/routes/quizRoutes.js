const express = require('express');
const { createQuizResult } = require('../controllers/quizController');

const router = express.Router();

router.post('/', createQuizResult);

module.exports = router;
