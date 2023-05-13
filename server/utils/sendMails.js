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
        from: `LinkCollect ${USER}`,
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
};