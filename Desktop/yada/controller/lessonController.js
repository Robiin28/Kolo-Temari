const Lesson = require('../models/LessonModel');
const asyncErrorHandler = require('../utils/ErrorHandler');
const CustomErr = require('../utils/CustomErr');
const APIFeatures = require('../utils/ApiFeatuers');

// Create a new lesson
exports.createLesson = asyncErrorHandler(async (req, res, next) => {
    const { courseId, title, content, videoUrls, resources, pic, description } = req.body;

    const lesson = await Lesson.create({
        courseId,
        title,
        content,
        videoUrls,
        resources,
        pic,
        description
    });

    res.status(201).json({
        status: 'success',
        data: {
            lesson
        }
    });
});

// Get all lessons
exports.getAllLessons = asyncErrorHandler(async (req, res, next) => {
    const features = new APIFeatures(Lesson.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();

    const lessons = await features.query;

    res.status(200).json({
        status: 'success',
        results: lessons.length,
        data: {
            lessons
        }
    });
});

// Get a single lesson by ID
exports.getLesson = asyncErrorHandler(async (req, res, next) => {
    const lesson = await Lesson.findById(req.params.id);

    if (!lesson) {
        return next(new CustomErr('Lesson not found', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            lesson
        }
    });
});

// Update a lesson by ID
exports.updateLesson = asyncErrorHandler(async (req, res, next) => {
    const { courseId, title, content, videoUrls, resources, pic, description } = req.body;

    const lesson = await Lesson.findByIdAndUpdate(
        req.params.id,
        {
            courseId,
            title,
            content,
            videoUrls,
            resources,
            pic,
            description
        },
        { new: true, runValidators: true }
    );

    if (!lesson) {
        return next(new CustomErr('Lesson not found', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            lesson
        }
    });
});

// Delete a lesson by ID
exports.deleteLesson = asyncErrorHandler(async (req, res, next) => {
    const lesson = await Lesson.findByIdAndDelete(req.params.id);

    if (!lesson) {
        return next(new CustomErr('Lesson not found', 404));
    }

    res.status(204).json({
        status: 'success',
        data: null
    });
});
