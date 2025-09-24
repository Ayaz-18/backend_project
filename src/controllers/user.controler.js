import { asyncholder } from "../utils/Asyncholder.js";
const registor=asyncholder(async(req,res)=>{
    res.status(200).json({
        message:"User registered successfully",
        
    })
})
export {registor}