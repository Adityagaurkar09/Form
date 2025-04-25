import { model,Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }, 
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});

const User = model("User",userSchema);
export default User;