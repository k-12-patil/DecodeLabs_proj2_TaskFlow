const tasks = require("../data/tasks.json");

// GET ALL TASKS
exports.getAllTasks = (req, res) => {
    res.status(200).json({
        success: true,
        count: tasks.length,
        data: tasks
    });
};

// GET TASK BY ID
exports.getTaskById = (req, res) => {

    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    res.status(200).json({
        success: true,
        data: task
    });
};

// CREATE TASK
exports.createTask = (req, res) => {

    const { name, description } = req.body;

    const newTask = {
        id: tasks.length + 1,
        name,
        description
    };

    tasks.push(newTask);

    res.status(201).json({
        success: true,
        message: "Task created successfully",
        data: newTask
    });
};

// UPDATE TASK
exports.updateTask = (req, res) => {

    const id = Number(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    task.name = req.body.name;
    task.description = req.body.description;

    res.status(200).json({
        success: true,
        message: "Task updated successfully",
        data: task
    });
};

// DELETE TASK
exports.deleteTask = (req, res) => {

    const id = Number(req.params.id);

    const index = tasks.findIndex(task => task.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Task not found"
        });
    }

    const deletedTask = tasks.splice(index, 1);

    res.status(200).json({
        success: true,
        message: "Task deleted successfully",
        data: deletedTask
    });
};