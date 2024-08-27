const express = require('express');
const courseController = require('../controller/courseController');
const authController = require('../controller/authController');
const router = express.Router();

// router.use(authController.protect);
router.route('/')
    .get(courseController.getAllCourses)
    .post(
        // authController.restrictTo('instructor', 'admin'),
         courseController.createCourse);

router.route('/:id')
    .get(courseController.getCourse)
    .patch(authController.restrictTo('instructor', 'admin'), courseController.updateCourse)
    .delete(authController.restrictTo('instructor', 'admin'), courseController.deleteCourse);

module.exports = router;
