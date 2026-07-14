const express = require("express");
const router = express.Router();

const {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} = require("../controllers/taskController");

const validateTask = require("../middleware/validation");

// GET all tasks
router.get("/", getAllTasks);

// GET task by ID
router.get("/:id", getTaskById);

// POST new task
router.post("/", validateTask, createTask);

// PUT update task
router.put("/:id", validateTask, updateTask);

// DELETE task
router.delete("/:id", deleteTask);

module.exports = router;