const express = require('express');
const cartController = require('../controller/cartController');
const authController = require('../controller/authController');

const router = express.Router();

router.use(authController.protect);

router.route('/my')
    .get(cartController.getCart)   // Get the user's cart
    .post(cartController.addToCart); // Add a course to the cart

router.route('/:courseId')
    .delete(cartController.removeFromCart); // Remove a course from the cart

module.exports = router;
