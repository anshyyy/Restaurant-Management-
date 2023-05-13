const User = require('../models/user');
const randomBytes = require("randombytes");
const {verifyEmail} = require("../utils/sendMails");
const {BACKEND_BASE_URL} = require("../config/serverConfig");

const create = async (req,res)=> {
        try {

            const data = req.body;
            console.log(data);
            data.username = data.email.split('@')[0];
            data.emailToken = randomBytes(32).toString("hex");
            const user = await User.create(data);
            verifyEmail(user.name, user.email, user.emailToken);
            return res.status(200).json({
                success:true,
                message:"Successfully created a User",
                data:user
            });
            
        } catch (error) {
            console.log(error);
            return res.status(501).json({
                success:false,
                message:"Not able to create user",
                err:error
            })
        }
}

const verifyEmailtoken = async (req, res) => {
    try {
      const user = await User.findOne({ emailToken: token });
      if (!user) {
        console.log("User dosent exist");
        console.log(error);           
      throw error;
      }
      var data = {
        emailToken: null,
        verified: 1,
      };
      await User.findOneAndUpdate({ emailToken: token }, data);
    //   const token = userService.createToken({ userId: response._id, username: response.username });
  
    //   if (PRODUCTION !== "production") {
    //     return res.redirect(`http://localhost:3000/login?token=${token}`);
    //   }
    //   return res.redirect(`${BACKEND_BASE_URL}/login?token=${token}`);
    return res.status(200).json({
        message:"email verified"
    })
    } catch (error) {
      return res.status(500).json({
        message: "Not able to verify the email",
        err: error,
        success: false,
        data: {},
      });
    }
  };



module.exports = {
    create,
    verifyEmailtoken
}