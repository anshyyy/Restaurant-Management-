const mongoose = require("mongoose");
const { Schema } = mongoose;
const { SALT } = require("../config");
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
       required:true,
       unique:true
    },
    registration_no : {
     type:String
    },
    department :{
        type:mongoose.Schema.Types.ObjectId,
        Ref:"Department"
    },
    profilePic: {
      type: String,
    },
    session : {
       type:String,
    },
    role : {
        type:String,
        enum :["user","staff","other","owner"],
        default :"user"
    },
    password: {
      type: String,
    },
    isPublic : {
      type:Boolean,
      default : true
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