const Cart = require('../models/CartModel');
const Course = require('../models/CourseModel');
const CustomErr = require('../utils/CustomErr');
const asyncErrorHandler = require('../utils/ErrorHandler');

// Add course to cart
exports.addToCart = asyncErrorHandler(async (req, res, next) => {
    const { courseId } = req.body; // courseId should be in the request body

    if (!courseId) {
        return next(new CustomErr('Course ID is required', 400));
    }

    const course = await Course.findById(courseId);
    if (!course) {
        return next(new CustomErr('Course not found', 404));
    }

    let cart = await Cart.findOne({ userId: req.user._id });

    if (!cart) {
        cart = await Cart.create({
            userId: req.user._id,
            items: [{ courseId, name: course.name, price: course.price }]
        });
    } else {
        const courseExists = cart.items.some(item => item.courseId.equals(courseId));
        
        if (!courseExists) {
            cart.items.push({ courseId, name: course.name, price: course.price });
            await cart.save();
        }
    }

    res.status(200).json({
        status: 'success',
        data: {
            cart
        }
    });
});

// Get user's cart
exports.getCart = asyncErrorHandler(async (req, res, next) => {
    const cart = await Cart.findOne({ userId: req.user._id }).populate('items.courseId');

    if (!cart) {
        return next(new CustomErr('No cart found for this user', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            cart
        }
    });
});

// Remove course from cart
exports.removeFromCart = asyncErrorHandler(async (req, res, next) => {
    const { courseId } = req.params; // courseId should be in the request parameters

    if (!courseId) {
        return next(new CustomErr('Course ID is required', 400));
    }

    let cart = await Cart.findOne({ userId: req.user._id });

    if (!cart) {
        return next(new CustomErr('No cart found for this user', 404));
    }

    cart.items = cart.items.filter(item => !item.courseId.equals(courseId));
    await cart.save();

    res.status(200).json({
        status: 'success',
        data: {
            cart
        }
    });
});
