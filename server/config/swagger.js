const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJSDOCS = YAML.load(__dirname+"\\api.yaml");

module.exports = {
    swaggerServe  : swaggerUI.serve,
    swaggerSetup : swaggerUI.setup(swaggerJSDOCS)
}