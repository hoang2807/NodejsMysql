const sequelize = require("../config/sql-connection");
const { DataTypes } = require("sequelize");

const Employee = sequelize.define("Employee", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
    },
    address: {
        type: DataTypes.STRING,
    },
    salary: {
        type: DataTypes.INTEGER,
    },
});

module.exports = Employee;