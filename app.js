const express = require("express");
require('dotenv').config();
const cors = require('cors');
// const { testConnection } = require('./config/database');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test database connection
// testConnection();

// Routes
const homeRoute = require("./routes/home-routes");
const arrayRoute = require("./routes/array-routes");
const authRoute = require("./routes/auth-routes");

app.use("/", homeRoute);
app.use("/api/auth", authRoute);
app.use("/api/array", arrayRoute);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

const port = 3000; // Fixed port to 3000
app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
    console.log(`📊 Database: MySQL (connection disabled for now)`);
    console.log(`🔐 Authentication: JWT`);
});
