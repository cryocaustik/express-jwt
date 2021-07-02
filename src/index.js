const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

app.use(cors());

const port = process.env.PORT;
const app_secret = process.env.APP_SECRET;

app.get("/", (req, res) => {
  let payload = req.body;
  if (!typeof payload === "object" || Object.keys(payload).length === 0) {
    res.status(400).send("no payload found");
  } else {
    let token = jwt.sign(payload, app_secret);
    res.send(token);
  }
});

app.post("/", (req, res) => {
  let payload = req.body;
  if (!typeof payload === "object" || Object.keys(payload).length === 0) {
    res.status(400).send("no payload found");
  } else {
    let token = jwt.sign(payload, app_secret);
    res.send(token);
  }
});

app.listen(port, () => {
  console.log(`listening http://localhost:${port}`);
});
