
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mysql= require('mysql');

/*Db connect code
var con = mysql.createConnection({
  host: "localhost",
  user: "jay",
  password: "jay"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});*/



var port    =   process.env.PORT || 5353;

app.use(express.static(path.join(__dirname, '/')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/getCTR',function(req,res){

console.log("requested CTR");
res.status(200).send("0.8");

})


app.get('/getImpVsClicks', function(req,res){

  var data1 = [65, 59, 80, 81, 56, 55, 40 , 30 ,62 ,85 ,32 , 90];
  var data2 = [25, 69, 50, 91, 36, 75, 60 , 40 ,42 ,65 ,52 , 80];
  console.log("received request advclicks");

  var data = {

    "data1" : data1,
    "data2" : data2
  }

  res.status(200).json(data);
})

app.get('/getPopularAds', function(req,res){

        var ad1 ="Cakes";
        var ad2 ="Chocolates";
        var ad3 ="Chicken";
        var ad4 ="Cheers";
        var ad5 ="San jose";
        var ad6 ="California";

  console.log("received request Popular Ads");

  var data = {

    "Ad1" : ad1,
    "Ad2" : ad2,
    "Ad3" : ad3,
    "Ad4" : ad4,
    "Ad5" : ad5,
    "Ad6" : ad6
  }
  
  res.status(200).json(data);
})

app.get('/getSearchAdCount', function(req,res){

        var count1 ="1550";
        var count2 ="1245";
        var count3 ="567";
        var count4 ="987";
        var searchText1 ="San Jose";
        var searchText2 ="Sun Glasses";
        var searchText3 ="Iphone7s";
        var searchText4 ="ThanksGiving";

  console.log("received request Search Ads Count And Text");

  var data = {

    "count1" : count1,
    "count2" : count2,
    "count3" : count3,
    "count4" : count4,
    "searchText1" : searchText1,
    "searchText2" : searchText2,
    "searchText3" : searchText3,
    "searchText4" : searchText4
  }
  
  res.status(200).json(data);
})

app.post('/predictData',function(req,res){

console.log("received",req.body);
res.send(200,"Thanks");

});


app.post('/signin',function(req,res){

console.log("signdetails",req.body);
res.send(200,"Go ahead");

})

app.listen(port);
console.log('5353 is the port');
