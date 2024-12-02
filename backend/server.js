const express = require('express');
const connectDB = require('./config/db');
const route = require('./route/quizRoute');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

console.log('Attempting to connect to the database...');

connectDB()

    .then(() => {
        console.log("Database connected successfully.");

        app.use(cors());
        app.use(express.json());

        app.get('/', (req, res) => {
            res.send("Welcome to Backend");
        });

        app.use(route);

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}...`);
        });
    })

    .catch(err => {
        console.error("Failed to connect to the database:", err);
        process.exit(1);
    });
