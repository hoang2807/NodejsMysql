const task = require("express").Router();
const { UserController } = require("../controller");
task.get("/task", async(req, res) => {
    const query = req.query;
    const data = await UserController.getUser(query);
    res.json({
        data,
    });
});

task.post("/task", async(req, res) => {
    const body = req.body;
    console.log(body);
    const data = await UserController.createUser(body);
    res.json({
        data,
    });
});

task.put("/task", async(req, res) => {
    const body = req.body;
    const data = await UserController.updateUser(body);
    res.json({
        data,
    });
});

task.delete("/task/:taskId", async(req, res) => {
    const userId = req.params.userId;
    const data = await UserController.deleteUser(userId);
    res.json({
        data,
    });
});

module.exports = task;