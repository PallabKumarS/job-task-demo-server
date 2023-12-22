var express = require("express");
const createTask = require("../../api/tasks/createTask");
var router = express.Router();

router.post("/tasks", createTask);
module.exports = router;
