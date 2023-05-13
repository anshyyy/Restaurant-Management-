const mongoose = require('mongoose');
const {DB_NAME,DB_PASS,DB_USER} = require('./serverConfig');

const connect = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.2xmu2cj.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`);
    } catch (err) {
        console.log(`Error in connecting the database ${err}`);
    }
}

module.exports = connect;