import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    nameUser:{
        type: String,
        trim: true,
        required: true
    },
    email:{
        type: String,
        trim: true,
        required: true
    },
    password:{
        type: String,
        trim: true,
        required: true
    },
    photo:{
        type: String,
        trim: true
    },

})

const User = mongoose.model('User', UserSchema)

export default  User