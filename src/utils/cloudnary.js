import { v2 as cloudinary} from "cloudinary";
import fs from "fs"
 cloudinary.config({ 
        cloud_name: process.env.CLOUD_NAME || 'ddtll4pxj', 
        api_key: process.env.CLOUD_API_KEY || '624221433792158', 
        api_secret:process.env.CLOUD_API_SECRET // Click 'View API Keys' above to copy your API secret
    });
    const uploadonClousnary=async(localfilepath)=>{
        try{
            if(!localfilepath)return null
            const response=await cloudinary.uploader.upload(localfilepath,{
                resource_type:auto
            });
            console.log("file is succesfully uploaded on cloudnary",response.url);

            fs.unlink(localfilepath);
            return response;
        }
        catch(error){
            fs.unlinkSync(localfilepath)
            console.log("some error occured",error);
            return null
        }
    }
    export {uploadonClousnary}