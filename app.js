require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

// extra security

const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

// db connection
const connectDB = require("./db/connect.js");

// routers

// error handlers
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const authenticateUser = require("./middleware/authentication.js").default;

// extra packages
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("jobs api");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server is running at port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
