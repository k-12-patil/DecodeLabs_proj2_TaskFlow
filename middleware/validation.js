module.exports = (req, res, next) => {

    const { name, description } = req.body;

    if (!name || !description) {

        return res.status(400).json({
            success: false,
            message: "Name and Description are required"
        });

    }

    if (name.length < 3) {

        return res.status(400).json({
            success: false,
            message: "Task name should be at least 3 characters"
        });

    }

    next();

};