const dotenv = require("dotenv");
dotenv.config();


module.exports = {
    PORT : process.env.PORT,
    DB_USER:process.env.DB_USER,
    DB_NAME:process.env.DB_NAME,
    DB_PASS:process.env.DB_PASS,
    SALT:process.env.SALT,
    BACKEND_BASE_URL:process.env.BACKEND_BASE_URL,
    EMAIL_USER:process.env.EMAIL_USER,
    EMAIL_PASS:process.env.EMAIL_PASS,
    JWT_KEY:process.env.JWT_KEY
}