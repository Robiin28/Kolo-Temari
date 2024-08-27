const express = require("express");
const axios = require("axios").default;
const asyncErrorHandler = require('../utils/ErrorHandler');
const CustomErr = require('../utils/CustomErr');
const Payment = require('../models/PaymentModel');

// Chapa API credentials (make sure to set PAYMENT_KEY in your environment variables)
const CHAPA_SECRET_KEY = process.env.PAYMENT_KEY;

let config = {
    headers: {
        Authorization: `Bearer ${CHAPA_SECRET_KEY}`,
    },
};

// Get all payments
exports.getAllPayments = asyncErrorHandler(async (req, res, next) => {
    const payments = await Payment.find();
    res.status(200).json({
        status: 'success',
        results: payments.length,
        data: {
            payments
        }
    });
});

// Initialize payment
exports.pay = asyncErrorHandler(async (req, res, next) => {
    try {
        let tx_ref = `tx-myecommerce12345.${Date.now()}`;
        let result = await axios.post(
            "https://api.chapa.co/v1/transaction/initialize",
            {
                amount: req.body.amount || "300", 
                currency: "ETB",
                email: req.body.email || "aman@gmail.com",
                first_name: req.body.first_name || "Abebe",
                last_name: req.body.last_name || "Bikila",
                tx_ref: tx_ref,
                callback_url: `http://localhost:6000/api/payments/success?tx_ref=${tx_ref}`,
                "customization[title]": req.body.title || "I love",
                "customization[description]": req.body.description || "It is time to pay",
            },
            config
        );
        console.log(result.data);
        res.status(200).json({
            success: true,
            message: 'Payment initialized successfully',
            checkout_url: result.data.data.checkout_url,
        });
    } catch (error) {
        console.error("Error initializing payment:", error.response?.data || error.message);
        res.status(500).json({
            success: false,
            message: 'An error occurred while initializing the payment',
            error: error.response?.data || error.message,
        });
    }
});

// Verify payment
exports.verifyPayment = asyncErrorHandler(async (req, res, next) => {


    console.log("hello");
    try {
     
        let result = await axios.get(
            `https://api.chapa.co/v1/transaction/verify/${req.query.tx_ref}`,
            config
        );



        console.log("Payment verification result:", result.data);
        res.status(200).json({
            success: true,
            message: 'Payment verified successfully',
            data: result.data,
        });
    } catch (error) {
        console.error("Error verifying payment:", error.response?.data || error.message);
        res.status(500).json({
            success: false,
            message: 'An error occurred while verifying the payment',
            error: error.response?.data || error.message,
        });
    }
});

exports.getPayment = asyncErrorHandler(async (req, res, next) => {
    const payment = await Payment.findById(req.params.id);

    if (!payment) {
        return next(new CustomErr('No payment found with that ID', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            payment
        }
    });
});

// Create a new payment
exports.createPayment = asyncErrorHandler(async (req, res, next) => {
    const payment = await Payment.create({
        ...req.body,
        userId: req.user._id
    });
    res.status(201).json({
        status: 'success',
        data: {
            payment
        }
    });
});

// Delete a payment
exports.deletePayment = asyncErrorHandler(async (req, res, next) => {
    const payment = await Payment.findByIdAndDelete(req.params.id);

    if (!payment) {
        return next(new CustomErr('No payment found with that ID', 404));
    }

    res.status(204).json({
        status: 'success',
        data: null
    });
});
