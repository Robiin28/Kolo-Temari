const express = require('express');
const paymentController = require('../controller/paymentController');
const authController = require('../controller/authController');
const router = express.Router();

// Protect all routes after this middleware (uncomment if authentication is required)
// router.use(authController.protect);

router.route('/')
    .get(paymentController.getAllPayments)  // Get all payments
    .post(
        // Restrict the `pay` route to specific roles like 'student' and 'instructor' if needed
        // authController.restrictTo('student', 'instructor'),
        paymentController.pay                 // Initialize payment
    );

router.route('/:id')
    .get(paymentController.getPayment)      // Get a payment by ID
    .delete(
        authController.restrictTo('admin'),  // Only 'admin' can delete payments
        paymentController.deletePayment      // Delete a payment by ID
    );

// Add this route for payment verification
router.route('/success')
    .get(paymentController.verifyPayment);  // Verify payment based on `tx_ref`

module.exports = router;
