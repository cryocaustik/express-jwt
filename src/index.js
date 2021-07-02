const express = require('express')
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser")
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())

const allowedDomains = process.env.ALLOWED_DOMAINS.split(",")
app.use(cors())

const port = 8000
const app_secret = process.env.APP_SECRET



app.get("/", (req, res) => {
  let payload = req.body
  if(!payload) res.send("no payload found")

  res.send(jwt.sign(payload, app_secret))
})

app.post("/", (req, res) => {
  let payload = req.body
  let jwt = jwt.sign(payload, app_secret)
  res.send(jwt)
})

app.listen(port, () => {
  console.log(`listening http://localhost:${port}`)
})
