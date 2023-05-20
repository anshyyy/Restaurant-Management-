const cloudinary = require('cloudinary');
const {CLOUDINARY_API_SECRET,CLOUDINARY_NAME,CLOUDINARY_API_KEY} = require('../config/serverConfig');


cloudinary.config({
   cloud_name : CLOUDINARY_NAME,
   api_key:CLOUDINARY_API_KEY,
   api_secret:CLOUDINARY_API_SECRET
})

exports.uploads = (file,folder)=> {
    console.log("here");
     return new Promise(resolve => {
        cloudinary.uploader.upload(file,(result)=>{
            resolve({
                url : result.url,
                id : result.public_id
            })
        }, {
            resource_type : "auto",
            folder:folder
        })
     })
}

