const Enrollment = require('../models/EnrollModel');
const Course = require('../models/CourseModel');
const asyncErrorHandler = require('../utils/ErrorHandler');
const CustomErr = require('../utils/CustomErr');

exports.getAllEnrollments = asyncErrorHandler(async (req, res, next) => {
    const enrollments = await Enrollment.find().populate('student course');
    res.status(200).json({
        status: 'success',
        results: enrollments.length,
        data: {
            enrollments
        }
    });
});

exports.getEnrollment = asyncErrorHandler(async (req, res, next) => {
    const enrollment = await Enrollment.findById(req.params.id).populate('student course');

    if (!enrollment) {
        return next(new CustomErr('No enrollment found with that ID', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            enrollment
        }
    });
});
exports.getEnrollmentsByUser = asyncErrorHandler(async (req, res, next) => {
    const userId = req.params.id; 
    console.log(userId);
    const enrollments = await Enrollment.find({ student: userId }).populate('student course');
    if (!enrollments || enrollments.length === 0) {
        return next(new CustomErr('No enrollments found for this user', 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            enrollments
        }
    });
});
exports.createEnrollment = asyncErrorHandler(async (req, res, next) => {
    const { courseId } = req.body;
    const userId = req.user._id;

    const course = await Course.findById(courseId);
    if (!course) {
        return next(new CustomErr('Course not found', 404));
    }

    if (course.status === 'free') {
        // Create enrollment immediately for free courses
        const enrollment = await Enrollment.create({
            student: userId,
            course: courseId,
            paymentStatus: 'completed',
            progress: 0 // Start progress at 0 for new enrollments
        });
        return res.status(201).json({
            status: 'success',
            data: {
                enrollment
            }
        });
    } else {
        // For paid courses, handle your own payment verification here
        // e.g., save the payment request details and return a confirmation message

        // Placeholder for payment initiation logic
        return res.status(200).json({
            status: 'pending',
            message: 'Payment process initiated. Please verify your payment.'
        });
    }
});
exports.deleteEnrollment = asyncErrorHandler(async (req, res, next) => {
    const enrollment = await Enrollment.findByIdAndDelete(req.params.id);

    if (!enrollment) {
        return next(new CustomErr('No enrollment found with that ID', 404));
    }

    res.status(204).json({
        status: 'success',
        data: null
    });
});
exports.getEnrollmentsByCourse = asyncErrorHandler(async (req, res, next) => {
    const courseId = req.params.courseId; // Get course ID from the request parameters

    // Find enrollments for the specified course
    const enrollments = await Enrollment.find({ course: courseId }).populate('student');

    if (enrollments.length === 0) {
        return res.status(404).json({
            status: 'fail',
            message: 'No enrollments found for this course',
        });
    }

    res.status(200).json({
        status: 'success',
        results: enrollments.length,
        data: {
            enrollments,
        },
    });
});
exports.updateProgress = asyncErrorHandler(async (req, res, next) => {
    const enrollmentId = req.params.id; // Get enrollment ID from request parameters
    const { progress } = req.body; // Get the new progress value from request body

    // Validate progress value
    if (progress < 0 || progress > 100) {
        return next(new CustomErr('Progress must be between 0 and 100', 400));
    }

    // Find and update the enrollment progress
    const enrollment = await Enrollment.findByIdAndUpdate(
        enrollmentId,
        { progress },
        { new: true, runValidators: true } // Return the updated document
    ).populate('student course');

    if (!enrollment) {
        return next(new CustomErr('No enrollment found with that ID', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            enrollment,
        },
    });
});
exports.getProgress = asyncErrorHandler(async (req, res, next) => {
    const enrollmentId = req.params.id; // Get enrollment ID from request parameters

    // Find the enrollment and populate the student and course fields
    const enrollment = await Enrollment.findById(enrollmentId).populate('student course');

    if (!enrollment) {
        return next(new CustomErr('No enrollment found with that ID', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            progress: enrollment.progress, // Return the progress value
            course: enrollment.course, // Include course details if needed
            student: enrollment.student // Include student details if needed
        },
    });
});

