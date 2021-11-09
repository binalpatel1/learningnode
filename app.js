

const express = require('express');
const  app = express();
const router =require("./controller/routes");
const mongoURI = require("./config/mongoKey"); //connect mongodb
const mongoose = require("mongoose");
const data = require("./modal/data.js");

mongoose.connect(mongoURI ,{useNewUrlParser:true,useUnifiedTopology :true}, (err)=>console.log("connected"));


app.use(express.urlencoded({extended: true}));//parser data
app.use('/static', express.static(__dirname + "/static"));
//starting templenting engine
// what is js.template engine helps to create
// html template with minimul code also it can inject
// data in to html templent at client side and produce
// the final html .each templet engine used diffrent languages to
//  define html templet inject data
//  at run time the template engine replace virables in temlate file with actule values,
//  and transform the template in html file sent to the client ,this help to easly make html page.
//

app.set ("view engine", "ejs");
app.set ("views", __dirname + "/views");

app.use('/account', router);

app.get("/all",async(req,res)=>{
//var d = await data.findOne ({username="prince"});
await data.findOneAndUpdate({username :"prince"},{$set:{age: 44}});
res.send("update");
});




app.get("/:name",async(req,res)=>
{//parameter passing on route localhost:3000/prince then it scrin print name or it empty
//var name = req.params.name;
 //if (name){
  //res.render('index.ejs', {name: name});//in html file u can print data in h2 tag
//}else {
 await data({
  username : req.params.name,
}).save();
  res.render('index.ejs');
//}
//
 });

//
// app.get("/contact",(req,res)=>{
//
//   res.render('contact')
// });





//ex if i have globle varables
//var auth =false;{function myMiddleware(req,res,next){if(auth){console.log("authenticated");}else{  console.log("not authenticated");}  next();//PEPOLE USALL forget next//app.use(myMiddleware);




//[1st learn: app.get('/',(req,res)=>{
//  res.sendFile(__dirname + "/index.html");//send file on home root so we use sendfile not send only
// });
//   app.get('/contact', (req,res)=>{
//   res.send("thanks for contacting us");
// });]




//2nd step for get data from form in html
// [app.get('/submit',(req,res)=>{
// //get data submited
// console.log(req.query);
// const {data, email} = req.query;
// console.log(data);
// console.log(email);
// res.send("submited")
//
// });]



//3 learning post data  from form using parsrr
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
