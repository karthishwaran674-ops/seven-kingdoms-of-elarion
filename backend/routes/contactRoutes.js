const express = require('express');
const { body } = require('express-validator');
const { createContact } = require('../controllers/contactController');

const router = express.Router();

router.post(
  '/',
  [body('name').notEmpty().withMessage('Name is required'), body('email').isEmail().withMessage('Valid email required'), body('message').isLength({ min: 5 }).withMessage('Message too short')],
  createContact
);

module.exports = router;
