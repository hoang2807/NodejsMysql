const { Op } = require("sequelize");
const { Task } = require("../model");
exportsTask = async({ limit = 5, page = 1, key = "" }) => {
    try {
        const listTask = await Task.findAll({
            where: {
                name: {
                    [Op.substring]: key,
                },
            },
            limit: Number(limit),
            offset: Number((page - 1) * limit),
        });

        return listTask;
    } catch (error) {}
};

exports.createTask = async(body) => {
    try {
        const newTask = await Task.create({
            content = body.content,
            status = body.status
        });
        return newTask;
    } catch (error) {}
};
exports.updateTask = async(body) => {
    try {
        const { id, content, status } = body;
        const result = await Task.update({ content, status }, { where: { id } });
        return result;
    } catch (error) {}
};
exports.deleteTask = async(TaskId) => {
    try {
        const result = await Task.destroy({ where: { id: TaskId } });
        return result;
    } catch (error) {}
};