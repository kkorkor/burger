var express = require("express")
var bodyparser = require("body-parser")
var port = process.env.port || 8000

var app = express()

app.use(express.static("public"))

app.use(bodyparser.urlencoded({ extended: true}))
app.use(bodyparser.json())
var routes = require("controllers/burgers_controller.js")

app.use(routes)

var exphbs = require("express-handlebars")

app.engine("handlebars",exphbs({ defaultLayout: "main"}))

app.set("view engine","handlebars")

app.listen(port,function(){
    console.log("listen on port",port)
})