
const express = require('express');
const  app = express();
const router =require("./controller/routes");


app.use(express.urlencoded({extended: true}));
app.use('/static', express.static(__dirname + "/static"));
app.use('/account', router);

app.get('/:name?',(req,res)=>{
var name = req.params.name;
if (name){
  res.send(name);
}else {
res.send("empty");  
}

});


//ex if i have globle varables
//var auth =false;{function myMiddleware(req,res,next){if(auth){console.log("authenticated");}else{  console.log("not authenticated");}  next();//PEPOLE USALL forget next//app.use(myMiddleware);

// app.get('/',(req,res)=>{
//  res.sendFile(__dirname + "/index.html");//send file on home root so we use sendfile not send only
// });
//   app.get('/contact', (req,res)=>{
//   res.send("thanks for contacting us");
// });
// app.get('/submit',(req,res)=>{
// //get data submited
// console.log(req.query);
// const {data, email} = req.query;
// console.log(data);
// console.log(email);
// res.send("submited")
//
// });
// app.post("/submit",(req,res)=>{
//   //post data submited example so the data came frome the body so we gonna
//   // use req.body not qury
//   const {data, email} = req.body;//data didnt get by pers so getting errore we have to requre body parse now
//   console.log(data);
//   console.log(email);
//
//  if(data){
//    console.log("data is availble");
//  }
//  else {
// console.log("data is not") ;
//  }
//
//
// });

  const PORT = process.env.PORT|| 3000;
  app.listen(PORT,()=>console.log('Started At ${PORT}'));
//app level middlewere
//specefic middleware
//when you got lot off data we want understand whre they camming frome so u
//have to parse that data(encoded data hoy) so tene middleware kai sako
