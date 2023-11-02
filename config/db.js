const mongoose = require('mongoose');
const config = require('./config');
 

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.dbUrl );

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error connecting to MongoDB: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;