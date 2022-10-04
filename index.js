const http = require('http')
const handles = require('./handle')
const server = http.createServer(handles.serverHandle);
server.listen(8080)

/*
// Define a string constant concatenating strings
const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>Ece Lab 2 </title>' +
' <style> '+
'@keyframes rainbow { '+
'  0%   {background-color:purple; left:0px; top:0px;} '+
'  25%  {background-color:blue; left:200px; top:0px;} '+
' 50%  {background-color:green; left:200px; top:200px;} '+
    '  75%  {background-color:yellow; left:0px; top:200px;} '+
    ' 100% {background-color:red; left:0px; top:0px;} '+
    ' } '+
  
    '.animation1 { '+
    '  width: 200px; '+
    '  height: 200px; '+
    '  background-color: black; '+
    '   position: relative; '+
    '   animation: rainbow 3s linear infinite alternate; '+
    ' } '+


'</style> '+
'    </head>' + 
'    <body>' +
        '<h1> Messaoudi Fares, Zouitene Lydia </h1> '+
'       <div class="animation1">'+
'<h3 style=" color : white ;"  style="text-align:center" >Test Lab3 </h3> '+

'</div>'+
'    </body>' +
'</html>'

/*

const serverHandle = function (req, res) {
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(content);
    res.end();
  }
    const server = http.createServer(serverHandle);
    server.listen(8080)

*/
