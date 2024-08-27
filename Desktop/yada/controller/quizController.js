const Quiz = require('../models/QuizModel');
const asyncErrorHandler = require('../utils/ErrorHandler');
const CustomErr = require('../utils/CustomErr');

exports.getAllQuizzes = asyncErrorHandler(async (req, res, next) => {
    const quizzes = await Quiz.find();
    res.status(200).json({
        status: 'success',
        results: quizzes.length,
        data: {
            quizzes
        }
    });
});

exports.getQuiz = asyncErrorHandler(async (req, res, next) => {
    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
        return next(new CustomErr('No quiz found with that ID', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            quiz
        }
    });
});

exports.createQuiz = asyncErrorHandler(async (req, res, next) => {
    const quiz = await Quiz.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            quiz
        }
    });
});

exports.updateQuiz = asyncErrorHandler(async (req, res, next) => {
    const quiz = await Quiz.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    if (!quiz) {
        return next(new CustomErr('No quiz found with that ID', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            quiz
        }
    });
});

exports.deleteQuiz = asyncErrorHandler(async (req, res, next) => {
    const quiz = await Quiz.findByIdAndDelete(req.params.id);

    if (!quiz) {
        return next(new CustomErr('No quiz found with that ID', 404));
    }

    res.status(204).json({
        status: 'success',
        data: null
    });
});
