const jwt = require("jsonwebtoken");

const jwtConfig = {
  secretKey: "YoUrSeCrEtKeY", // 원하는 시크릿 ㅍ키
  options: {
    algorithm: "HS256", // 해싱 알고리즘
    expiresIn: "1m", // 토큰 유효 기간
    issuer: "noggong", // 발행자
  },
};

// 토큰을 암호화한다.
// console.log("JWT 토큰 : ", jwt.sign({name: "우준호", id: "noggong"}, jwtConfig.secretKey, jwtConfig.options))

// 토큰을 복호화 한다 => 토큰이 문제 없는지 확인하고, 유저 정보를 가져온다.
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi7Jqw7KSA7Zi4IiwiaWQiOiJub2dnb25nIiwiaWF0IjoxNjcyNjYwMjkwLCJleHAiOjE2NzI2NjAzNTAsImlzcyI6Im5vZ2dvbmcifQ.O7bRFGOX8vXkgbaTIUPUI4RcO7_xZeaI8yIMGYS4WxI";
const userDecode = jwt.decode(token, jwtConfig.secretKey);
console.log("userDecode : ", userDecode);
const userVerify = jwt.verify(token, jwtConfig.secretKey);
console.log("userVerify : ", userVerify);
