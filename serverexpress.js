
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');



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

  var data = [65, 59, 80, 81, 56, 55, 40 , 30 ,62 ,85 ,32 , 90];
  console.log("received request advclicks");
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
