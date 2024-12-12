const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//user schema
const userSchema = new mongoose.Schema({
    fullname:{
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'Firstname must be at least 3 characters long'],
        },
        lastname: {
            type: String,
            minlength: [3, 'Lastname must be at least 3 characters long'],
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be at least 3 characters long'],
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    }
})

//generate auth token
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
}

//compare password
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

//hash password
userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

//create a user model
const userModel = mongoose.model('user', userSchema);
module.exports = userModel;