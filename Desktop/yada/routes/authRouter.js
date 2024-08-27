const express = require('express');
const authController = require('./../controller/authController');
const userController = require('../controller/userController');

const router = express.Router();

router.route('/signup')
    .post(authController.signup);

router.route('/validate') 
    .post(authController.validateEmail);

router.route('/validateNow') 
    .post(authController.validateNow);

router.route('/login') 
    .post(authController.login);

router.route('/forgotPassword')
    .get(authController.forgotPassword);

router.route('/resetPassword/:token')
    .patch(authController.resetPassword);

// Protect all routes after this middleware
// router.use(authController.protect);

// Add route for getting user details (restricted to admin users)
router.route('/users')
    .get(
        // authController.restrictTo('admin'),
         userController.getUsers);
router.route('/users/:role')
         .get(
            // authController.restrictTo('admin'), 
            userController.getUsersByRole);
router.route('/updatePassword')
    .patch(userController.updatePassword);

router.route('/updateMe')
    .patch(userController.updateMe);

router.route('/deleteMe')
    .delete(userController.deleteMe);
router.route('/deleteUser/:id')
.delete(userController.deleteUser);
module.exports = router;
