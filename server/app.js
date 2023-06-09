const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const {swaggerServe,swaggerSetup } = require("./config/swagger");
const {PORT} = require('./config/serverConfig');
const connect = require('./config/database');
const ApiRoutes = require("./routes/index");



const setUpandStartServer = async ()=>{
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);
    app.use("/api-docs",swaggerServe,swaggerSetup)
    await connect();

    app.listen(PORT, async ()=>{
        
        console.log(`Server started at ${PORT}....`)
    })

}

setUpandStartServer();