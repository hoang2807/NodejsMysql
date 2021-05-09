const task = require("express").Router();
const { TaskController } = require("../controller");
task.get("/task", async(req, res) => {
    const query = req.query;
    const data = await TaskController.getTask(query);
    res.json({
        data,
    });
});

task.post("/task", async(req, res) => {
    const body = req.body;
    console.log(body);
    const data = await TaskController.createTask(body);
    res.json({
        data,
    });
});

task.put("/task", async(req, res) => {
    const body = req.body;
    const data = await TaskController.updateTask(body);
    res.json({
        data,
    });
});

task.delete("/task/:taskId", async(req, res) => {
    const TaskId = req.params.taskId;
    const data = await TaskController.deleteTask(TaskId);
    res.json({
        data,
    });
});

module.exports = task;