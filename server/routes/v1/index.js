const express = require('express');
const {create,getUser,verifyEmailtoken,signIn,grantRole} = require('../../controllers/userController');
const Department = require('../../models/department')

const router = express.Router();

//route for granting the desired role 
router.get("/user/grant-role",grantRole);
router.post("/user/signup",create);
router.post("/user/signin",signIn);
router.get("/user/verify-email",verifyEmailtoken);
router.get("/user/:username",getUser);
router.get("/",(req,res)=>{
    res.status(200).json({
       message:"Hello world"
    })
});


router.get("/department",async (req,res)=>{
    return res.status(200).json({
        data : await Department.find()
    })
});


module.exports = router;