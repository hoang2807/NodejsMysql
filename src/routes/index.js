const route = require("express").Router();

const UserRoute = require("./user");

route.use(UserRoute);

module.exports = route;