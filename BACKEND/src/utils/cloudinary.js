import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs'


cloudinary.config({ 
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloud_name: "doubpsp9q",
//   api_key: process.env.CLOUDINARY_API_KEY,
  api_key: "718428216941339",
//   api_secret:  process.env.CLOUDINARY_API_SECRET
  api_secret: "4_jbo9QF5j42ogVf-laaPh4y-zE"

}); 


const uploadOnCloudinary = async (localFilePath)=>{
    try {
        if (!localFilePath) return null ;
        // upload the file on cloudinary 
      const response =  await  cloudinary.uploader.upload(localFilePath, {
            resource_type : "auto"
        })
        // file has been uploaded succesfully 
        console.log("file is uploaded on cloudinary ", response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath)
        //
        return null ;
    }
}


   export { uploadOnCloudinary }