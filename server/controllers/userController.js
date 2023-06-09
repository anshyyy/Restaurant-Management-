const User = require('../models/user');
const Department = require('../models/department');
const randomBytes = require("randombytes");
const { verifyEmail, sendMailForVerification,sendMailForVerificationForAdmin,sendMailForVerificationForStaff} = require("../utils/sendMails");
const { BACKEND_BASE_URL, JWT_KEY } = require("../config/serverConfig");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const create = async (req, res) => {
  try {
    const data = req.body;
    console.log("data",data);
    data.username = data.email.split('@')[0];
    data.emailToken = randomBytes(32).toString("hex");
    const role = data.role;
    data.role = 'other';
    const user = await User.create(data);
    //console.log(user.name, user.email, user.emailToken);
    verifyEmail(user.name, user.email, user.emailToken);
    
    if(role==="canteen")sendMailForVerificationForAdmin(user,role)
    if(role==="student")sendMailForVerification(user, role);
    if(role==="staff") sendMailForVerificationForStaff(user,role);
    return res.status(200).json({
      success: true,
      message: "Successfully created a User",
      data: user
    });

  } catch (error) {
    console.log(error);
    return res.status(501).json({
      success: false,
      message: "Not able to create user",
      err: error
    })
  }
}
const grantRole = async (req, res) => {
  try {
    // console.log("herererer",req);
    const userId = req.query.userId;
    const role = req.query.role;
   // console.log(userId,role);
    const user = await User.findById(userId);
    user.role = role;
    await user.save();
    user.password=undefined;
    delete user['emailToken'];
    console.log(user);
    return res.status(200).json({
      success: true,
      message: "Successfully granted the role",
      data: user
    });
  } catch (err) {
    console.log(err);
    return res.status(501).json({
      success: false,
      message: "Not able to grant the role",
      err: err
    })
  }

}
const verifyEmailtoken = async (req, res) => {
  try {
    console.log(req.query);
    const user = await User.findOne({ emailToken: req.query.token });
    //console.log(user);
    if (!user) {
      return res.status(404).json({ success: false, message: "user dont exists" })
    }
    user.emailToken = null;
    user.verified = 1;
    await user.save();
    //   const token = userService.createToken({ userId: response._id, username: response.username });

    //   if (PRODUCTION !== "production") {
    //     return res.redirect(`http://localhost:3000/login?token=${token}`);
    //   }
    //   return res.redirect(`${BACKEND_BASE_URL}/login?token=${token}`);
    return res.status(200).json({
      message: "email verified"
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
const createToken = function (user) {
  try {
    console.log("in user", user, JWT_KEY);
    const result = jwt.sign(user, JWT_KEY, { expiresIn: "1h" });
    return result;
  } catch (error) {
    console.log("Something went wrong in token creation.");
    throw error;
  }
}


const verifyToken = function (token) {
  try {
    const response = jwt.verify(token, JWT_KEY);
    return response;
  } catch (error) {
    console.log("Something went wrong during verification of the token");
    throw error;
  }
}
const checkPassword = async (userInputPassword, encryptedPassword) => {
  try {
    return bcrypt.compareSync(userInputPassword, encryptedPassword);
  } catch (error) {
    console.log("Something went wrong in password comparison");
    throw error;
  }
}
const signIn = async (req, res) => {
  try {
    const email = req.body.email;
    const plainPassword = req.body.password
    //step 1 -> fetch the user
    const user = await User.findOne({ email: email });
    console.log(user);
    // step 2 -> compare the user
    const encryptedPassword = user.password;

    //const newP = bcrypt.hashSync(plainPassword, 12);

    const passwordMatch = await checkPassword(
      plainPassword,
      encryptedPassword
    );

    if (!passwordMatch) {
      console.log("Password dosen't match");
      throw { error: "Incorrect password" };
    }
    console.log(passwordMatch);
    const newJWTtoken = createToken({ userId: user._id, username: user.username });
    return res.status(200).json({
      message: "SUccessfully logged in",
      success: true,
      token: newJWTtoken,
      username: user.username
    })
  } catch (error) {
    console.log("Something went wrong in signIn process");
    return res.status(501).json({
      message: "wrong password",
      success: false,
      err: error,
    })
  }
}
const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username }).populate(
     { 
     path: 'department',
     select: 'name',
     model: Department
    }).lean();
    delete user['password'];
    user.department = user.department.name;
    console.log(user);
    return res.status(201).json({
      message: "Successfully fetched the user",
      data: user,
      success: false,
    })
  } catch (error) {
    console.log(error);
    return res.status(501).json({
      message: "not able to fetch user",
      success: false,
      err: error,
    })
  }
}

module.exports = {
  create,
  verifyEmailtoken,
  signIn,
  getUser,
  grantRole
}