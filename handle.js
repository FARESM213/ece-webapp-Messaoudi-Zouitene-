const url = require('url')
const qs = require('querystring')
const about = require('./content/about.json')

const app=require("express").Router();

module.exports = {

    serverHandle: function (req, res) {
      
            const route = url.parse(req.url)
            const path = route.pathname 
            const params = qs.parse(route.query)
            res.writeHead(200, {'Content-Type': 'text/plain'});

           /* app.use('/', function (req, res) {
                
                console.log('ertyuiol');
                res.send('Bonjour Bienvenue')
            
              })
            
            app.get('/about', (req, res) => {

                res.write(JSON.stringify(about))  
               // res.send('Bonjour Bienvenue')

            })*/
              
              
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
            res.end();
    } 

  }