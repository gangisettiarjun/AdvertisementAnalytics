
var express = require('express');
var app = express();
var path = require('path');


var port    =   process.env.PORT || 1337;

app.use(express.static(path.join(__dirname, '/')));

app.get('/',function(req,res){

	res.sendFile(path.join(__dirname + '/index.html'));
})


app.listen(port);
console.log('1337 is the port');
