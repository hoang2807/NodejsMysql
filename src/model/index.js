const User = require("./user");
// const Employee = require("./employee");
const Task = require("./task");

User.hasMany(Task, { foreignKey: { name: "UserId" }, as: "tasks" });
Task.belongsTo(User, { foreignKey: { name: "userId" } });
module.exports = {
    User,
    Task,
};