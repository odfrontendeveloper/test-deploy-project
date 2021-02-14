const express = require("express")
const app = express()
app.get('/', (req, res) => {
    res.send({
        title: 'Hello world!'
    })
})
app.listen(3000, err => err ? console.log(err) : console.log('App started at port 3000!'))