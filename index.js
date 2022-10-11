const handles = require('./handle')
var express = require('express');
var app = express();
var PORT = 8080;
app.use('/',handles.serverHandle);
 
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
}) 


