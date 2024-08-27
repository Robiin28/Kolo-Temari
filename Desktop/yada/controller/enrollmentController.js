const Enrollment = require('../models/EnrollModel');
const Course = require('../models/CourseModel');
const asyncErrorHandler = require('../utils/ErrorHandler');
const CustomErr = require('../utils/CustomErr');
const stripe = require('stripe')('your_stripe_secret_key');

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

exports.createEnrollment = asyncErrorHandler(async (req, res, next) => {
    const { courseId } = req.body;
    const userId = req.user._id; // assuming user is authenticated and their ID is in req.user._id

    const course = await Course.findById(courseId);
    if (!course) {
        return next(new CustomErr('Course not found', 404));
    }

    if (course.status === 'free') {
        // Create enrollment immediately for free courses
        const enrollment = await Enrollment.create({
            student: userId,
            course: courseId,
            paymentStatus: 'completed'
        });
        return res.status(201).json({
            status: 'success',
            data: {
                enrollment
            }
        });
    } else {
        // Initiate payment for paid courses
        const paymentIntent = await stripe.paymentIntents.create({
            amount: course.price * 100, // amount in cents
            currency: 'usd',
            metadata: { courseId, userId }
        });

        res.send({
            clientSecret: paymentIntent.client_secret
        });
    }
});

exports.confirmPayment = asyncErrorHandler(async (req, res, next) => {
    const { paymentIntentId } = req.body;

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    if (paymentIntent.status !== 'succeeded') {
        return next(new CustomErr('Payment failed', 400));
    }

    const { courseId, userId } = paymentIntent.metadata;
    const enrollment = await Enrollment.create({
        student: userId,
        course: courseId,
        paymentStatus: 'completed',
        transactionId: paymentIntentId,
        amountPaid: paymentIntent.amount / 100
    });

    res.status(201).json({
        status: 'success',
        data: {
            enrollment
        }
    });
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
