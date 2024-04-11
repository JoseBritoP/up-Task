import mongoose, { Schema, Types } from "mongoose";
import { User } from "../typescript/types/user";

const userSchema:Schema = new Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    lowercase:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
  },
  confirmed:{
    type:Boolean,
    default:false
  },
})

const User = mongoose.model<User>('User',userSchema);
export default User