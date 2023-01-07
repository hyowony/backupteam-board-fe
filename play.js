const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

app.use(express.json());
app.use(cookieParser);

// const user = [
//   { name: "사담", id: "doka", password: "1234" },
//   { name: "담사리", id: "mas2", password: "1345" },
//   { name: "푸누둔", id: "dw2", password: "1111" },
// ];

app.get("/", (req, res) => {
  res.send("연습장입니다.");
});

// app.post("/login", (req, res) => {
//   res.send("로그인 입니다");

//   const userId = req.body.id;
//   const password = req.body.password;

//   let user;
//   for (i = 0; I < users.length; i++) {
//     if (userId === user[i].id && password === users[i].password) {
//       user = users[i];
//     }
//   }
//   if (!user) {
//     return res.send("userId", user.id);
//     res.send("로그인process");
//   }
// });

app.listen(port, () => {
  console.log("서버 작동중");
});
