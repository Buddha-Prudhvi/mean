const mongoose = require('mongoose');
const RegisterSchema = new mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
            type:String,
            require:true
        },
    Email:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    password:{
        type:String
    },
    dob:{
        type: String
    }
    
})

const Register = mongoose.model('register',RegisterSchema);
module.exports = Register;
