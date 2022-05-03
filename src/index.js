const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

app.use(cors());

const port = process.env.PORT;

app.get("/", (req, res) => {
  try {
    let data = req.body;
    if (!typeof data === "object" || Object.keys(data).length === 0) {
      res.status(400).send("no payload found");
    } else {
      let token = jwt.sign(data.payload, data.secret);
      res.send(token);
    }
  } catch (error) {
    res.sendStatus(400);
  }
});

app.post("/", (req, res) => {
  try {
    let data = req.body;
    if (!typeof data === "object" || Object.keys(data).length === 0) {
      res.status(400).send("no payload found");
    } else {
      let token = jwt.sign(data.payload, data.secret);
      res.send(token);
    }
  } catch (error) {
    res.sendStatus(400);
  }
});

app.listen(port, () => {
  console.log(`listening http://localhost:${port}`);
});
