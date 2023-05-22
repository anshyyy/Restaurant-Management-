const mongoose = require("mongoose");
const { Schema } = mongoose;
const { SALT } = require("../config/serverConfig");
const bcrypt = require("bcrypt");


const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    username : {
       type:String,
       unique:true
    },
    registration_no : {
     type:String,
     unique:true
    },
    aadharCard_no :{
      type:String,
      unique:true,
    },
    department :{
        type:mongoose.Schema.Types.ObjectId,
        Ref:"Department",
    },
    profilePic: {
      type: String,
    },
    session : {
       type:String,
    },
    role : {
        type:String,
        enum :["admin","staff","student","other","canteen"],
        default :"other",
        required:true
    },
    password: {
      type: String,
    },
    emailToken: {
      type: String,
    },
    verified: {
      type: Number,
      default:0,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  if (!this.password || !this.isModified("password")||!this.isModified("username")) return next();  
  const encryptedPassword = bcrypt.hashSync(this.password, Number(SALT));
  this.password = encryptedPassword;
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;