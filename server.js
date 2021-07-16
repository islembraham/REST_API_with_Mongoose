const express = require('express')
const connect = require('./config/connect')
const app = express()

app.use(express.json())

app.use("/api/person", require("./routes/person"))

connect();

const port = process.env.PORT || 5000
app.listen(port, err => {
    err
        ? console.log(err)
        : console.log(`the server is running on http://localhost:${port}`)
})