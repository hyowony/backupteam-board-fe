const express = require("express");
const port = 4000;

const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/html/home.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/html/login.html");
});
app.get("/articles/:id", (req, res) => {
  res.sendFile(__dirname + "/html/detail.html");
});
app.listen(port, () => {
  console.log(port, "서버연결");
});
