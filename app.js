const express = require("express");

const app =express();

//ex if i have globle varables
var auth =false;
function myMiddleware(req,res,next){
  if(auth){
  console.log("authenticated");

  }else{
  console.log("not authenticated");
  }

  next();//PEPOLE USALL forget next
}
//app.use(myMiddleware);

app.get('/', myMiddleware ,(req,res)=>{

res.send("Middleware");
});
  app.get('/contact', (req,res)=>{
  res.send("thanks for contacting us");
});

  const PORT = process.env.PORT|| 3000;
  app.listen(PORT,()=>console.log('Started At ${PORT}'));
//app level middlewere
//specefic middleware
//when you got lot off data we want understand whre they camming frome so u
//have to parse that data(encoded data hoy) so tene middleware kai sako
