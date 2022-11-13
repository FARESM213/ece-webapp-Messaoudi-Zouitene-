const url = require('url')
const qs = require('querystring')
const about = require('./content/about.json')
const app=require("express").Router();
const { v4: uuidv4 } = require('uuid');

let users=
  [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
      
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net"
    }
  ];

let db = {
    articles: [
      {
        id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
        title: 'My article',
        content: 'Content of the article.',
        date: '04/10/2022',
        author: 'Liz Gringer'
      },
      // ...
    ],
    comments: [
      {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        timestamp: 1664835049,
        content: 'Content of the comment.',
        articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
        author: 'Bob McLaren'
      },
      {
        id: '9b1dfb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        timestamp: 1664835049,
        content: 'Content of the commentdh eh ceh che ehc eh.',
        articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
        author: 'Bob McLaren'
      },
      // ...
    ]
  }






app.get('/use',(req,res)=>{
  res.json(users);
});
app.get("/use/:useID", (req, res) => {
    res.json(users.find(user=> user.id == req.params.useID));
})



app.get('/hello',(req,res)=>{
    res.send("Bpnjour, pour avoir un effet perso tappez /hello/name= suivit de votre pronom ( tout ca apres le localhost )\n"+
    "Tappez /about pour decouvir le fichier JSON");
});

app.get('/',(req,res)=>{
    res.send("Bonjour Bienvenue'");
});



app.get('/about',(req,res)=>{
    res.send(JSON.stringify(about))  
});

app.get('/hello/name=:username', (req, res) => {
    var name=req.params.username.toString()
    if(name==="Fares"){  
        res.send(" Fafiso le bg ");
    }
    else {
        res.send(" Hello "+ name);
    }
  })

  /***************** ARTICLES ******************/
  app.get("/help", (req, res) => {

    res.send("Pour acceder a tout les arcticles de la base de donné, entrez la route /articles \n"
    +" Afin de chercher un articles selon son ID : /articles/ suivi de l'ID de ce dernier \n"+
    "Pour pouvoir post un article vous devrez vous munir de postman et entre /articles, verifiez vos resultats directement"+
    "le browser par la suite"+
    "Vous pouvez chercher les commentaires de cet articles grace a /article/l'id de votre article/comments "+
    "ou encore /article/l'id de votre article/comments/l'id de votre comment \n"+
    " Enfin le post des commentaires est identique a selon d'un article");
  });
app.get("/articles", (req, res) => {

    res.send(db.articles);
  });

  app.post("/articles", (req, res) => {

    console.log(req.body);
    db.articles.push({...req.body,id : uuidv4()});
    res.send('POST SUCCED ');

  });

  app.get("/articles/:articleId", (req, res) => {
    res.send(db.articles.find((article) => article.id === req.params.articleId));
  })
    
  /***************** Comments  ******************/
  
  app.get("/articles/:articleId/comments", (req, res) => {

    const comments = [];
    for (var i = 0; i < db.comments.length; i++) {
      if (req.params.articleId === db.comments[i].articleId) {
        comments.push(db.comments[i]);
      }
    }
    res.send(comments);

  });

  app.post("/articles/:articleId/comments", (req, res) => {

    console.log(req.body);
    db.comments.push({...req.body,id : uuidv4(), timestamp : Date.now()})
    res.send("POST SUCCED");

  });

  app.get("")

  app.get("/articles/:articleId/comments/:commentId", (req, res) => {

    const resultat = [];
  
    for (var i = 0; i < db.comment.length; i++) 
    {

      if ((req.params.commentId === db.comment[i].id)&&(req.params.articleId===db.comments[i].articleId)) 
      {
        resultat.push(db.comment[i]);
      }

    }
    res.send(resultat);

    });



module.exports = app