const express=require('express');
const router=express.Router();
const {body}=require('express-validator')
//create route
const userController=require("../controllers/user.controller")
router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage("first Name must be atLeast 3 char long"),
    body('password').isLength({min:6}).withMessage("password must be atlast 6 char long")
],userController.registerUser);


module.exports=router;
