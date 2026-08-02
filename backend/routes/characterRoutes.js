const express = require('express');
const { createCharacter } = require('../controllers/characterController');

const router = express.Router();

router.post('/', createCharacter);

module.exports = router;
