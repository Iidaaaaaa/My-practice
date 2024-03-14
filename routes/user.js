const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("ユーザーです");
});
router.get("/info", (req, res) => {
  res.send("ユーザー情報です");
});

module.exports = router;
