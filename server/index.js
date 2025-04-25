import express from 'express';
import cors from 'cors';
import nodemon from 'nodemon';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import {postSignup,getUsers} from './controllers/user.js'
import {postPlate} from './controllers/name.js'

// import { postSignup } from './controller/user.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
// app.use(cors(
//     {
//         origin : "http://localhost:3000",
//         credentials : true,
//     }
// ));

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    if (conn) {
        console.log("MongoDB Connected");
    }
    else {
        console.log("MongoDB Connection Failed");
    }

};

app.get('/health',(req,res)=>{
    res.json({
        status: "true",
        Message:"server is running"
    })
})

app.post('/user',postSignup)

app.get('/users',getUsers);

app.post('/name',postPlate)

// app.get('*',(req,res)=>{
//     res.json({
//         status: "false",
//         message:"route not found"
//     })
// })

const Port = process.env.Port || 5003;

app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
    connectDB();
    console.log("MongoDB Connected");
})




