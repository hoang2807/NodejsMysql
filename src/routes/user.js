const route = require("express").Router();
const { UserController } = require("../controller");
route.get("/user", async(req, res) => {
    const query = req.query;
    const data = await UserController.getUser(query);
    res.json({
        data,
    });
});

route.post("/user", async(req, res) => {
    const body = req.body;
    console.log(body);
    const data = await UserController.createUser(body);
    res.json({
        data,
    });
});

route.put("/user", async(req, res) => {
    const body = req.body;
    const data = await UserController.updateUser(body);
    res.json({
        data,
    });
});

route.delete("/user/:userId", async(req, res) => {
    const userId = req.params.userId;
    const data = await UserController.deleteUser(userId);
    res.json({
        data,
    });
});

module.exports = route;