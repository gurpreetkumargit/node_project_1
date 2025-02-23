const express = require("express");
const app = express();
const port = 8080;
const userRouter = require("./routes/user");
const { connectMongoDB } = require("./connection");
const { logResponse } = require("./middlewares");

// mongo connection
connectMongoDB("mongodb://localhost:27017/user_mongo_db");

// Middleware Plugin
app.use(express.urlencoded({ extended: false }));

// log middleware
app.use(logResponse());

// router - api Endpoints
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log("App Listen on: " + port);
});
