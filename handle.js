const url = require('url')
const qs = require('querystring')
let about = require('./content/about.json')
const fs =require("fs")


module.exports = {
    serverHandle: function (req, res) {
      
            const route = url.parse(req.url)
            const path = route.pathname 
            const params = qs.parse(route.query)
          
            res.writeHead(200, {'Content-Type': 'text/plain'});
        
            if (path === '/hello' && 'name' in params) 
            {
                if (params['name']=="Fares")
                {
                    res.write("Fares wesh bg ");
                }
                else
                {
                    res.write('Hello ' + params['name'])

                }
            } 
            else if (path ==='/hello')
            {
                res.write('Pour utiliser votre name, vous devez entrer "/hello?name= "votre nom" ')
            }
            else if (path === '/about')
            {          
              res.write(JSON.stringify(about))  
            }
            else if (path==="/")
            {
                    res.write('Bonjour Bienvenue')
            }  
            else
            {
                res.write('Error 404')

            }
            res.end();
    } 
  }