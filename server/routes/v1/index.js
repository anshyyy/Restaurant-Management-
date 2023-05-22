const express = require('express');
const {create,getUser,verifyEmailtoken,signIn,grantRole} = require('../../controllers/userController');
const Department = require('../../models/department')
const {createFood,updateFood,getAllFood,deleteFood,getFood,findByCategory,searchFoodItems} = require('../../controllers/foodController');
const {createFeedBack,updateFeedBack,deleteFeedBack,getFeedBack} = require('../../controllers/feebBackController');
const {createOrder,getPendingOrders,completeOrder} = require("../../controllers/orderController");
const upload = require('../../config/multer');
const cloudinary = require('../../config/cloudinary');
const fs = require('fs');
const router = express.Router();

//route for granting the desired role 
router.get("/user/grant-role",grantRole);
router.get("/user/verify-email",verifyEmailtoken);

router.post("/user/signup",create);
router.post("/user/signin",signIn);
router.get("/user/:username",getUser);
router.post("/upload-images",upload.array('image'),async (req,res)=>{
     try {
         const uploader = async(path) => await cloudinary.uploads(path,"Images");
         const urls = []
         const files = req.files;
         console.log(req.files);
         for(const file of files){
            console.log(file);
            const {path} = file;
            const newPath = await uploader(path);
            urls.push(newPath.url);
            fs.unlinkSync(path);
         }
         return res.status(200).json({
            success:true,
            data : urls,
            message : "Successfully uploaded images"
         })
        } catch(error){
              console.log(error);
              return res.status(500).json({
                success:false,
                err:error,
                message : "Not able to upload images"
             })
        }
});


// example api for testing
router.get("/",(req,res)=>{
    res.status(200).json({
       message:"Hello world"
    })
});

//this route is getting all the department
router.get("/department",async (req,res)=>{
    return res.status(200).json({
        data : await Department.find()
    })
});


//food routes 

// this route will fetch food realted to typed query
router.get("/food",searchFoodItems);
router.post("/food",createFood);
router.delete("/food/:id",deleteFood);
router.patch("/food/:item",updateFood);
router.get("/food-all",getAllFood);
router.get("/food-by-category/:categoryId",findByCategory);

//this will fetch a specific query
router.get("/food/:id",getFood);

//feedback routes
router.post("/feedback",createFeedBack);
router.delete('/feedback/:id',deleteFeedBack)
router.patch('/feedback/:id',updateFeedBack);
router.get("/feedback/:foodId",getFeedBack)


//order routes
router.post("/order/:userId",createOrder);
router.get("/order/:userId",getPendingOrders);
router.get("/order-update/:id",completeOrder);


module.exports = router;