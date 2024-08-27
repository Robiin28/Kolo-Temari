const express = require('express');
const enrollmentController = require('../controller/enrollmentController');
const authController = require('../controller/authController');
const validateCourseId = require('../middleware/validateCourseId'); // Import the middleware
const router = express.Router({ mergeParams: true }); 

router.use(authController.protect);
router.use(validateCourseId);

router.route('/')
    .get(enrollmentController.getAllEnrollments)
    .post(authController.restrictTo('student'), enrollmentController.createEnrollment);

router.route('/:id')
    .get(enrollmentController.getEnrollment)
    .delete(authController.restrictTo('student', 'admin'), enrollmentController.deleteEnrollment);

module.exports = router;
