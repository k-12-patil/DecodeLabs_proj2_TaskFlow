const express = require("express");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Welcome Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Welcome to TaskFlow API"
    });
});

// Routes
app.use("/tasks", taskRoutes);

// Invalid Route
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});