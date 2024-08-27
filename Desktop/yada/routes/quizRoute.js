const express = require('express');
const quizController = require('../controllers/quizController');
const authController = require('../controllers/authController');
const router = express.Router();

router.use(authController.protect);
router.route('/')
    .get(quizController.getAllQuizzes)
    .post(authController.restrictTo('instructor', 'admin'), quizController.createQuiz);

router.route('/:id')
    .get(quizController.getQuiz)
    .patch(authController.restrictTo('instructor', 'admin'), quizController.updateQuiz)
    .delete(authController.restrictTo('instructor', 'admin'), quizController.deleteQuiz);

module.exports = router;
