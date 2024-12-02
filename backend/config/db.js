const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = () => {
    const dbUrl = process.env.MONGODB_URL;
    if (!dbUrl) {
        throw new Error("MONGO_DB_URL is not defined in environment variables");
    }

    return mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
};

module.exports = connectDB;