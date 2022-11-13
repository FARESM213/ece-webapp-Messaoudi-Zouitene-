const handles = require('./handle')
var express = require('express');
const bodyParser = require("body-parser");

var PORT = 8000;
var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.use(handles);
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
}) 


