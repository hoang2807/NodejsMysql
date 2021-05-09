const { User } = require("../model");
const { Op } = require("sequelize");
const { Task } = require("../model");
exports.getUser = async({ limit = 5, page = 1, key = "" }) => {
    try {
        const listUser = await User.findAll({
            where: {
                // name: key,
                name: {
                    [Op.substring]: key,
                },
            },
            limit: Number(limit),
            offset: Number((page - 1) * limit),
            include: [{ model: Task }],
        });

        return listUser;
    } catch (error) {}
};

exports.createUser = async(body) => {
    try {
        const newUser = await User.create({
            name: body.name,
            age: body.age,
            address: body.address,
        });
        return newUser;
    } catch (error) {}
};
exports.updateUser = async(body) => {
    try {
        const { id, name, age, address } = body;
        //cach 1: tim truoc roi update
        // const user = await User.findByPk(id);
        // user.name = name;
        // user.age = user;
        // user.address = address;

        // await user.save();
        // return user;
        //cach 2:
        const result = await User.update({ name, age, address }, { where: { id } });
        return result;
    } catch (error) {}
};
exports.deleteUser = async(userId) => {
    try {
        const result = await User.destroy({ where: { id: userId } });
        return result;
    } catch (error) {}
};