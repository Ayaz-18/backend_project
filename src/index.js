import { connect } from "./db/conect.js";
import dotenv from "dotenv";
import { app } from "./app.js";



dotenv.config(); // load .env before using process.env

connect()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`appn runing on port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Database connection failed",err)
})