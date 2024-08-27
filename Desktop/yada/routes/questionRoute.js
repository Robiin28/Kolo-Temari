const express = require('express');
const questionController = require('../controllers/questionController');
const authController = require('../controllers/authController');
const router = express.Router();

router.use(authController.protect);
router.route('/')
    .get(questionController.getAllQuestions)
    .post(authController.restrictTo('instructor', 'admin'), questionController.createQuestion);

router.route('/:id')
    .get(questionController.getQuestion)
    .patch(authController.restrictTo('instructor', 'admin'), questionController.updateQuestion)
    .delete(authController.restrictTo('instructor', 'admin'), questionController.deleteQuestion);

module.exports = router;
