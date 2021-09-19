const express = require("express");
const app = express();
const port = 3001;
var bodyParser = require("body-parser");
app.use(bodyParser.json());

var cors = require("cors");
app.use(cors());

app.post("/pattern", (req, res) => {
  console.log(req.body);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
