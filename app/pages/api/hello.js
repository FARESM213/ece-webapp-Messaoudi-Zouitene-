const app=require("express").Router();
app.get('/api/hello',(req,res)=>{
  res.json({ name: 'John Doe' });
  
});

module.exports = app