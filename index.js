var express = require("express")
var app = express()
const bodyParser = require('body-parser')

var fs = require("fs")
app.set("view engine", "ejs")
app.set("views", "./views")
app.use(express.static("public"))


app.listen(3000, () => {
    console.log("server is running 3000")
})
require("./libs/mongo-db")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", require("./routers/api"))


module.exports = app