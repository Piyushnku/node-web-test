const express = require('express')
var app = express()

const port = process.env.PORT || 2000

app.get("/", (req,res) => {
res.send("Hello Piyush")
})

app.get("/bad-request", (req,res) => {
    res.send({
        
        message: "Bad - Request",
        desc: "Unable to process your reguest"
    })
})

app.listen(port)