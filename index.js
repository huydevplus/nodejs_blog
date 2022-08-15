const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send('<a href="https://dantri.com.vn/">Hello Worlds!</a>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
