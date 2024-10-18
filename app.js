const express = require("express");
const app = express();
const userRouter = require("./routes/users.route");

app.use("/api/user", userRouter);
app.use("/register", (req, res)=>{
  // res.status(200).json({
  // //   // "name": "Md. Abdul Alim",
  // //   // "message": " I am register Page",
  // //   // statusCode: 200,
  // // })
  res.redirect("/login")
});
app.use("/login", (req, res)=>{
  res.send("I am  login page");
});

app.use("/", (req, res) => {
  res.send("I am  home page");
});

app.use((req, res) => {
  res.send("<h1>404 !!!! Not a valid url</h1>");
});
module.exports = app;
