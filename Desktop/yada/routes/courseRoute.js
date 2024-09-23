const express = require('express');
const courseController = require('../controller/courseController');
const authController = require('../controller/authController');
const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router.route('/')
    .get(courseController.getAllCourses)
    .post(
        // authController.restrictTo('instructor', 'admin'),
        courseController.createCourse
    );

router.route('/:id')
    .get(courseController.getCourse)
    .patch(authController.restrictTo('instructor', 'admin'), courseController.updateCourse)
    .delete(authController.restrictTo('instructor', 'admin'), courseController.deleteCourse);

// Corrected route for related courses
router.route('/:courseId/related')
    .get(courseController.getRelatedCourses); // Adjusted to use the correct function name

module.exports = router;
