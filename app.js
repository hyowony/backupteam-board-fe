const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const port = 3000;

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/home", (req, res) => {
  res.send(" <h1>홈페이지입니다.<h1>");
});

app.get("/login", (req, res) => {
  res.send("로그인 페이지입니다.");
});

app.get("/profile", (req, res) => {
  res.send(" 프로필 페이지입니다.");
});

app.listen(port, () => {
  console.log(port, "서버 정상 작동중");
});
//ㅇㄹㅇ
