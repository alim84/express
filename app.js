const express = require("express");
const app = express();
const userRouter = require("./routes/users.route");

app.use("/api/user", userRouter);
app.use("/register", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/register.html");
  // res.status(200).json({
  // //   // "name": "Md. Abdul Alim",
  // //   // "message": " I am register Page",
  // //   // statusCode: 200,
  // // })
  // res.redirect("/login");
});
app.get("/login", (req, res) => {
  res.cookie("name", "Alim");
  res.end();
});

app.use("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res) => {
  res.send("<h1>404 !!!! Not a valid url</h1>");
});
module.exports = app;
