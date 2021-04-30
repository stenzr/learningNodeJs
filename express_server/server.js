const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res){
    res.send("<H1>Contact Me:");
});

app.listen(3000, function(){
    console.log("\nServer started on port 3000\n")
});