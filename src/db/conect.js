import mongoose from "mongoose";
import { db_name } from "../constants.js";


const connect=async()=>{

    try {
        const connect_res=await mongoose.connect(`${process.env.MONGO_URI}/${db_name}`)
        console.log("MongoDB connected successfully");
        
    } catch (error) {
        console.log("Mongoose connection error:", error);
        process.exit(1);
        
    }
}
export {connect}