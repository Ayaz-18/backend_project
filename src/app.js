import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
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
//
// Importing routes
import { router as userRouter } from "./utils/routes/user.routes.js";
// Using routes
app.use("/api/v1/users", userRouter);




export {app}