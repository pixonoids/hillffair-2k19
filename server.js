//Requiring Modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./userSchema.js');
//Creating Server using express()
var app = express();

//use method for static files
app.use(express.static(__dirname));

//Connecting to mongodb loaclhost database
mongoose.connect(process.env.MONGODB_URI||"mongodb://localhost:27017/hillffair" ,{ useNewUrlParser: true });
//Using Body parser for middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({strict:false}));

//Routing
app.get('/register',function (req,res){
  console.log("okay");
  res.sendFile(__dirname+"/register.html");
});

app.get('/registerPage',function (req,res){
  console.log("okay");
  res.sendFile(__dirname+"/registerPage.html");
});

app.get('/events',function (req,res){
  console.log("okay");
  res.sendFile(__dirname+"/events.html");
});

app.get('/',function (req,res){
  console.log("okay");
  res.sendFile(__dirname+"/home.html");
});
app.get('/team',function (req,res){
  console.log("okay");
  res.sendFile(__dirname+"/team.html");
});
app.get('/lookback',function (req,res){
  console.log("okay");
  res.sendFile(__dirname+"/lookback.html");
});
app.get('/sponsors',function (req,res){
  console.log("okay");
  res.sendFile(__dirname+"/sponsors.html");
});
//Post Method
app.post('/adduser',function(req, res){
    var data = req.body;
      var user=new User(data);
      console.log(user);
      user.save(function(err,user,numAffected){
      if(err){
            console.log(err);
            res.send('500');
          }
       else{
        console.log("added",user);
        res.send(user);
       }
});
});

// Listening to port-number
app.listen(3000,function(){
    console.log("localhost at 3000");
});
