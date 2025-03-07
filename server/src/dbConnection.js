require('dotenv').config(); // Ensure environment variables are loaded
const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI; // Ensure this matches your .env variable

    if (!MONGO_URI) {
      throw new Error("MONGO_URI is not defined. Check your .env file.");
    }

    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit the process on failure
  }
};

module.exports = connectDB;
