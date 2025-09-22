const userModel=require('../models/user.model');
const userService=require("../services/user.service")
const {validationResult}=require('express-validator');
const blacklistTokenModel=require('../models/blacklistToken.model');

module.exports.registerUser=async (req,res,next)=>{
    try {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ error: "All fields are required" });
        }
        const {fullname,email,password}=req.body;
        const hashedPassword=await userModel.hashPassword(password);

        const user=await userService.createUser({
            firstname:fullname.firstname,
            lastname:fullname.lastname,
            email,
            password:hashedPassword
        });

        const token=user.generateAuthToken();
        res.status(200).json({
            token,
            user
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }

}

module.exports.loginUser=async(req,res,next)=>{
    try {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ error: "All fields are required" });
        }
        const {email,password}=req.body;
        const user=await userModel.findOne({email}).select('+password');
        if(!user){
            return res.status(401).json({error:"Invalid email or password"});
        }
        const isMatch=await user.comparePassword(password);
        if(!isMatch){
            return res.status(401).json({error:"Invalid email or password"});
        }
        const token=user.generateAuthToken();
        res.cookie('token',token,{
            httpOnly:true,
            secure:process.env.NODE_ENV==='production',
            sameSite:'strict',
            maxAge:24*60*60*1000 //1 day
        });
        res.status(200).json({
            token,
            user
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({error:"Internal server error"});
    }
}

module.exports.getUserProfile=async(req,res,next)=>{
    try {
        return res.status(200).json(req.user);
    } catch (error) {
        return res.status(500).json({error:"Internal server error"});
    }
}

module.exports.logoutUser=async(req,res,next)=>{
    try {
        res.clearCookie('token');
        const token = req.cookies?.token || req.headers?.authorization?.split(' ')[1];
        await blacklistTokenModel.create({token});
        return res.status(200).json({message:"Logged out successfully"});

    } catch (error) {
        return res.status(500).json({error:"Internal server error"});
    }
}
