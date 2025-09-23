const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainModel = require('../models/captain.model');
const authMiddleware = require('../middlewares/auth.middleware');
//create route

const captainController = require("../controllers/captain.controller");

router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage("First Name must be at least 3 char long"),
    body('password').isLength({ min: 6 }).withMessage("Password must be at least 6 char long"),
    body('vehicle.color').optional().isLength({ min: 3 }).withMessage("Vehicle color must be at least 3 char long"),
    body('vehicle.plate').isLength({ min: 3 }).withMessage("Vehicle plate must be at least 3 char long"),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage("Vehicle capacity must be at least 1"),
    body('vehicle.vehicleType').isIn(['bike', 'car', 'van']).withMessage("Vehicle type must be one of bike, car, van")
], captainController.registerCaptain);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage("Password must be at least 6 char long"),

], captainController.loginCaptain);

router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile);
router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain);

module.exports = router;