const express = require('express')
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")
require('dotenv').config()

const app = express()
app.use(bodyParser.json())
const port = 8000
const app_secret = process.env.APP_SECRET



app.get("/", (req, res) => {
  let payload = req.body
  if(!payload) res.send("no payload found")

  res.send(jwt.sign(payload, app_secret))
})

app.post("/", (req, res) => {
  let payload = req.body
  res.send(jwt.sign(payload, app_secret))
})

app.listen(port, () => {
  console.log(`listening http://localhost:${port}`)
})