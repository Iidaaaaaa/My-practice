console.log("node.js");

const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log("サーバー起動"));
