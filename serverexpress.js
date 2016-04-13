
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');



var port    =   process.env.PORT || 5353;

app.use(express.static(path.join(__dirname, '/')));

// app.get('/',function(req,res){

// 	res.sendFile(path.join(__dirname + '/index.html'));
// })

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
res.send(200,"0.7");

})

app.post('/predictData',function(req,res){

console.log("received",req.body);
res.send(200,"Thanks");

})

app.listen(port);
console.log('5353 is the port');
