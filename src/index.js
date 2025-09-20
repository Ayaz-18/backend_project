import express from "express";
import { connect } from "./db/conect.js";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";


dotenv.config(); // load .env before using process.env

const app=express();
app.use(cors(
    {
        origin: process.env.CLIENT_URL,
        credentials: true
    }
));
app.use(express.json({limit:'16kb'}));
app.use(cookieParser());
app.use(express.urlencoded({extended:true,limit:'16kb'}));
app.use(express.static('public'));



connect()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`appn runing on port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Database connection failed",err)
})