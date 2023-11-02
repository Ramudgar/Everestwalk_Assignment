// requirements for express application
const express = require("express");
const app = express();
// to read data form the .env file
require("dotenv").config();

// import the required packages for the application to work properly and maintain the efficiency of the application
const cors = require("cors");

// import the database connection file to connect to the database
const connectDB = require("./config/db");
connectDB();

// Middleware to parse incoming JSON data from requests
app.use(express.json());
// to import the config file to get the required information
const config = require("./config/config");

// import the routes from the routes folder to use them in the application for routing
const userRoutes = require("./src/routes/userRoutes");

// Enable Cross-Origin Resource Sharing (CORS) middleware
app.use(cors());

// Here is the code that is used to access the images from the static folder in the server
// so please use this code to fetch images form the server
app.use("/public", express.static(__dirname + "/public"));

// Inject Sub router and apis
app.use("/api/users", userRoutes);

// Start the server
const PORT = config.port;
app.listen(PORT, () => {
  // the first and last part of the console.log is just to make the console.log colorful
  console.log("\x1b[31m", `Server running on port ${PORT}`, "\x1b[0m");
});
