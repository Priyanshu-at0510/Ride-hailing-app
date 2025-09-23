const captainModel = require('../models/captain.model');
const { validationResult } = require('express-validator');
const captainService = require('../services/captain.service');

module.exports. registerCaptain=async(req,res,next)=>{
    try {
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        const {fullname,email,password,vehicle}=req.body;
        const {color,plate,capacity,vehicleType}=vehicle;
        const isCaptainAlreadyExits=await captainModel.findOne({email});
        if(isCaptainAlreadyExits){
            return res.status(400).json({message:'Captain with this email already exists'});
        } 
        const hashedPassword=await captainModel.hashPassword(password);
        const captain=await captainService.createCaptain({
            firstname:fullname.firstname,
            lastname:fullname.lastname,
            email,
            password:hashedPassword,
            color,
            plate,
            capacity,
            vehicleType 
        })
        const token=captain.generateToken();
        res.status(201).json({
            message:'Captain registered successfully',
            captain:{
                id:captain._id,
                fullname:captain.fullname,
                email:captain.email,
                vehicle:captain.vehicle,
                status:captain.status
            },
            token
        });
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}