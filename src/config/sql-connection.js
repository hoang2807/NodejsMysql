const Sequelize = require("sequelize");
const sequelize = new Sequelize("Nodemy_Tutorial", "root", "thuvienmysql", {
    host: "localhost",
    dialect: "mysql",
    logging: true,
    sync: true,
});

// (async() => {
//     try {
//         await sequelize.authenticate();
//         console.log("Connection has been established successfully.");
//     } catch (error) {
//         console.error("Unable to connect to the database", error);
//     }
// })();

sequelize.sync();
module.exports = sequelize;