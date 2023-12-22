var express = require("express");
const createTask = require("../../api/tasks/createTask");
const getAllTasks = require("../../api/tasks/getAllTasks");
var router = express.Router();

router.get("/tasks",getAllTasks)
router.post("/tasks", createTask);
module.exports = router;
