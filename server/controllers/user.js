
import User from '../models/User.js';


const postSignup =async (req,res)=>{
    const {name,email,phone,address} = req.body;

    if(!name || !email || !phone || !address){
        return res.status(400).json({
            status: "false",
            message:"Please fill all the fields"
        })
    }

    try {
        const newUser = new User({ name, email, phone, address });
        const savedUser = await newUser.save();

        return res.json({
            status: "true",
            data: savedUser,
            message: "User Created Successfully",
        });
        
    } catch (error) {
        return res.json({
            status: "false",
            message: error.message
        });
    }
   
}

const getUsers = async (req, res) => {
    try {
        const users = await User.find(); 
        res.json({
            status: "true",
            message: "Users fetched successfully",
            data: users
        });
    } catch (error) {
        res.json({
            status: "false",
            message: error.message
        });
    }
}

export {postSignup, getUsers};
    