const User = require("./user");
// const Employee = require("./employee");
const Task = require("./task");

User.hasMany(Task, { foreignKey: { name: "UserId" } });
Task.belongsTo(User, { foreignKey: { name: "UserId" } });
module.exports = {
    User,
    Task,
};