const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html"); //__dirname: to get the path of the current directory
});


app.listen(3000, function(){
    console.log("Server is running on port 3000");
});