console.log("node.js");

const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  //   console.log("hello express");
  //   res.send("<h1>こんにちは</h1>");
  //   res.sendStatus(401);
  //   res.status(500).send("エラーです");
  res.status(500).json({ msg: "エラーです" });
});

app.get("/user", (req, res) => {
  res.send("ユーザーです");
});
app.get("/user/info", (req, res) => {
  res.send("ユーザー情報です");
});
app.listen(PORT, () => console.log("サーバー起動"));
