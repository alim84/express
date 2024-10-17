const express = require("express");
const app = express();
const userRouter = require("./routes/users.route");

app.use("/api/user", userRouter);

app.use("/", (req, res) => {
  res.send("I am a get request at home");
});

app.use((req, res) => {
  res.send("<h1>404 !!!! Not a valid url</h1>");
});
module.exports = app;
