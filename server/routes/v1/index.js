const express = require('express');
const {create,verifyEmailtoken} = require('../../controllers/userController');

const router = express.Router();


router.post("/user/signup",create);
router.get("/user/verify-email", verifyEmailtoken);


router.get("/",(req,res)=>{
    res.status(200).json({
       message:"Hello world"
    })
})


module.exports = router;