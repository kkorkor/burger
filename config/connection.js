var mysql = require("mysql")

var connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "Ronaldo07",
    database: "bugers_db"
})

connection.connect(function(err){
    if (err){
        console.error("error",err.stack)
        return
    }
    console.log("connected as id ",connection.threadId)
})
module.exports = connection