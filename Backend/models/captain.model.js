const mongoose = require('mongoose');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');    

const captainSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minLength:[3,'First name must be at least 3 characters long'],
            trim:true
        },
        lastname:{
            type:String,
            required:false,
            trim:true       
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Please fill a valid email address']
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    phone:{
        type:String,
        required:false,
        trim:true
    },
    socketId:{
        type:String,
        default:null
    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required:false,
            minLength:[3,'Vehicle color must be at least 3 characters long'],
        },
        plate:{
            type:String,
            required:true,
            minLength:[3,'Vehicle plate must be at least 3 characters long'],
        },
        capacity:{
            type:Number,
            required:true,
            min:[1,'Vehicle capacity must be at least 1']
        },
        vehicleType:{
            type:String,
            enum:['car','motorcycle','auto'],
            required:true
        }
    },
    location:{
        lat:{
            type:Number,
            default:0
        },
        lng:{
            type:Number,
            default:0
        }
    }
})

//hash password before saving
captainSchema.statics.hashPassword=async function(password){
    return await bycrypt.hash(password,10);
}
captainSchema.methods.generateToken=function(){
    const token= jwt.sign({_id:this._id},process.env.JWT_SECRET,{expiresIn:'7d'});
    return token;
}
captainSchema.methods.comparePassword=async function(password){
    return await bycrypt.compare(password,this.password);
}

const captainModel=mongoose.model('captain',captainSchema);
module.exports=captainModel;
