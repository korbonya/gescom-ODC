import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: String,
    phone: {
        type: String,
        unique: true
    },
    profile_url: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }
}, {timestamps:true})

const User = mongoose.model('User', UserSchema)

export default User


