const express = require('express');
const {create,getUser,verifyEmailtoken,signIn,grantRole} = require('../../controllers/userController');
const Department = require('../../models/department')
const {createFood,updateFood,getAllFood,deleteFood,getFood} = require('../../controllers/foodController');

const router = express.Router();

//route for granting the desired role 
router.get("/user/grant-role",grantRole);
router.post("/user/signup",create);
router.post("/user/signin",signIn);
router.get("/user/verify-email",verifyEmailtoken);
router.get("/user/:username",getUser);


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
router.post("/food",createFood);
router.delete("/food/:id",deleteFood);
router.patch("/food/:item",updateFood);
router.get("/food-all",getAllFood);
router.get("/food/:id",getFood);


module.exports = router;