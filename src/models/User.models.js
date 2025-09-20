import mongoose,{Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowecase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowecase:true,
        trim:true
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String,//cloudnary url
        required:true

    },
    coverimage:{
        type:String
    },
    wathchhistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Videos"
        }
    ],
    password:{
        type:String,
        required:[true,"password is required"]

    },
    refreshToken:{
        type:String

    }

    

},{timestamps:true});
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next();
    }
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(this.password,salt);
    this.password=hashedPassword;
    next();
})
userSchema.methods.isspasswordcorrect=async function(password){
    return await bcrypt.compare(password,this.password);
}
userSchema.methods.generateaccesstoken=function(){
    return jwt.sign({id:this._id,
    username:this.username,
    email:this.email,
    fullname:this.fullname,

    },process.env.ACCESS_TOKEN_SECRET,{expiresIn:process.env.ACCESS_TOKEN_EXPIRY});
}
userSchema.methods.refreshtoken=function(){
    return jwt.sign({id:this._id},process.env.REFRESH_TOKEN_SECRET,{expiresIn:process.env.REFRESH_TOKEN_EXPIRY});
}

export const User=mongoose.model("Usee",userSchema);