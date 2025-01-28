import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

export default mongoose.model('users',UserSchema)