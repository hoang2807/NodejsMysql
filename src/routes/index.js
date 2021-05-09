const route = require("express").Router();

const UserRoute = require("./user");
const TaskRoute = require("./task");
route.use(UserRoute);
route.use(TaskRoute);
module.exports = route;