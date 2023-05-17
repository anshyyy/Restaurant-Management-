const nodemailer = require("nodemailer");
const { EMAIL_USER, EMAIL_PASS, BACKEND_BASE_URL, } = require("../config/serverConfig");
let transporter = nodemailer.createTransport({
  service :"gmail",
  port:587,
  host:'smtp.gmail.com',
  secure:true,
  auth : {
            user : EMAIL_USER,
            pass : EMAIL_PASS
         }
});

module.exports = {
  verifyEmail: async function verifyUserEmail(name, userEmail, token) {
    try {
      let info = await transporter.sendMail({
        from: `Yum Bytes ${EMAIL_USER}`,
        to: userEmail,
        subject: "Email Verification",
        text: "HELLO" + name,
        html: `<h2>HELLO ${name}<h2/>
                      <h3> Thanks for using our services, Please verify your email </h3>
                      <a href="${BACKEND_BASE_URL}user/verify-email?token=${token}"> Verify You </a>
                    `,
      },function(error,result){
        if(error){
         console.log("err",error);
        } else {
          console.log(result);
        }
        transporter.close();}
      );
    } catch (error) {
      console.log("error",error);
    }
  },
  sendMailForVerification:async(user,role)=>{
    try {
      let info = await transporter.sendMail({
        from: `Yum Bytes ${EMAIL_USER}`,
        to: "bcabncanshuman2020@gmail.com",
        subject: "Account Verification",
        text: "HELLO" + user.name,
        html: `<h2>HELLO<h2/>
                      <h3> Hello, This is mail for taking the permission for taking the roll of ${role} at yumbites. </h3>
                      <h3> here is my name : ${user.name} </h3> <br>
                      <h3> here is my email : ${user.email} </h3> <br>
                      <h3> here is my department : ${user.department} </h3> <br>
                      <h3> here is my registration number : ${user.registration_no} </h3> <br>
                      <h3> here is my session : ${user.session} </h3> <br>
                      <a href="${BACKEND_BASE_URL}user/grant-role?userId=${user.id}&role=${role}"> Grant Access </a>
                    `,
      },function(error,result){
        if(error){
         console.log("err",error);
        } else {
          console.log(result);
        }
        transporter.close();}
      );
    } catch (error) {
      console.log("error",error);
    }
  },
  sendMailForVerificationForAdmin:async(user,role)=>{
    try {
      let info = await transporter.sendMail({
        from: `Yum Bytes ${EMAIL_USER}`,
        to: "bcabncanshuman2020@gmail.com",
        subject: "Email Verification",
        text: "HELLO" + user.name,
        html: `<h2>HELLO<h2/>
                      <h3> Hello, This is mail for taking the permission for taking the roll of ${role} at yumbites. </h3>
                      <h3> here is my name : ${user.name} </h3> <br>
                      <h3> here is my aadharCard number : ${user.aadharCard_no} </h3> <br>
                      <a href="${BACKEND_BASE_URL}user/grant-role?userId=${user.id}&role=${role}"> Grant Access </a>
                    `,
      },function(error,result){
        if(error){
         console.log("err",error);
        } else {
          console.log(result);
        }
        transporter.close();}
      );
    } catch (error) {
      console.log("error",error);
    }
  },
  sendMailForVerificationForStaff:async(user,role)=>{
    try {
      let info = await transporter.sendMail({
        from: `Yum Bytes ${EMAIL_USER}`,
        to: "bcabncanshuman2020@gmail.com",
        subject: "Email Verification",
        text: "HELLO" + user.name,
        html: `<h2>HELLO<h2/>
                      <h3> Hello, This is mail for taking the permission for taking the roll of ${role} at yumbites. </h3>
                      <h3> here is my name : ${user.name} </h3> <br>
                      <h3> here is my department : ${user.department} </h3>
                      <h3> here is my aadharCard number : ${user.aadharCard_no} </h3> <br>
                      <a href="${BACKEND_BASE_URL}user/grant-role?userId=${user.id}&role=${role}"> Grant Access </a>
                    `,
      },function(error,result){
        if(error){
         console.log("err",error);
        } else {
          console.log(result);
        }
        transporter.close();}
      );
    } catch (error) {
      console.log("error",error);
    }
  }
};