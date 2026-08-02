const QuizResult = require('../models/QuizResult');

exports.createQuizResult = async (req, res) => {
  try {
    const result = await QuizResult.create({
      user: req.user ? req.user._id : null,
      answers: req.body.answers,
      resultKingdom: req.body.resultKingdom,
      date: new Date(),
    });

    res.status(201).json({ message: 'Quiz result saved', data: result });
  } catch (error) {
    res.status(500).json({ message: 'Failed to save quiz result' });
  }
};
