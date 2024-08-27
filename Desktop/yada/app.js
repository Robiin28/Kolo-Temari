const express = require('express');
const morgan = require('morgan');
const authRouter = require('./routes/authRouter');
const courseRouter = require('./routes/courseRoute');
const lessonRouter = require('./routes/lessonRoute');
const reviewRouter = require('./routes/reviewRoute');
const notificationRouter = require('./routes/notificationRoute');
const paymentRouter = require('./routes/paymentRoute');
const submissionRouter = require('./routes/submissionRoute');
const enrollmentRouter = require('./routes/enrollmentRoute');
const globalErrorHandler = require('./controller/errController');
const CustomErr = require('./utils/CustomErr');
const cors =require('cors');


const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true // Include this if you need to send cookies or authentication headers
}));

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('./public'));

// Custom Middleware for adding request timestamp
app.use((req, res, next) => {
    req.requestedAt = new Date().toISOString();
    next();
});

// Define routes
app.use('/api/auth', authRouter);  // Authentication related routes
app.use('/api/courses', courseRouter);  // Courses related routes
app.use('/api/courses/:courseId/enroll', enrollmentRouter);  // Enrollment routes for specific course
app.use('/api/courses/:courseId/lessons', lessonRouter);  // Lessons related routes for specific course
app.use('/api/lessons/:lessonId/reviews', reviewRouter);  // Reviews related routes for specific lesson
app.use('/api/notifications', notificationRouter);  // User notifications
app.use('/api/payments', paymentRouter);  // Payment related routes
app.use('/api/submissions', submissionRouter);  // Submissions related routes

// Handle all undefined routes
app.all('*', (req, res, next) => {
    const err = new CustomErr(`Can't find ${req.originalUrl} on the server`, 404);
    next(err);
});

// Global Error Handler
app.use(globalErrorHandler);

module.exports = app;
