console.log("node.js");

const express = require("express");
const app = express();
const PORT = 3000;
const userRouter = require("./routes/user");

// app.use(mylogger);
// app.use(express.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  //   console.log("hello express");
  //   res.send("<h1>こんにちは</h1>");
  //   res.sendStatus(401);
  //   res.status(500).send("エラーです");
  //   res.status(500).json({ msg: "エラーです" });
  res.render("index", { text: "NodejsとExpress" });
});

app.get("/user", (req, res) => {
  res.send("ユーザーです");
});
app.get("/user/info", (req, res) => {
  res.send("ユーザー情報です");
});

// ルーティング

app.use("/user", userRouter);
// app.use("/auth", authRouter);
// app.use("/customer", customerRouter);

app.listen(PORT, () => console.log("サーバー起動"));
