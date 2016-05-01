
  var express = require('express');
  var app = express();
  var path = require('path');
  var bodyParser = require('body-parser');
  var mysql= require('mysql');

  var dbQueries=require('./dbqueries/dbqueries.json');


  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "adnalytics_master"
  });

  con.connect(function(err){
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });



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

    console.log("received request advclicks");

    var data1 = [];
    var data2 = [];

    console.log(typeof dbQueries.adVsClicks);
    con.query(dbQueries.adVsClicks, function(err,queryResp){


      console.log("Response from db");

      for(var i=0;i<queryResp.length;i++){
        data1.push(queryResp[i].Ad_Impressions);
        data2.push(queryResp[i].Ads_Clicked);
      }

      var data = {

        "data1" : data1,
        "data2" : data2
      }

      res.status(200).json(data);

    });


    

    
  })

  app.get('/getPopularAds', function(req,res){

    var popularAds = {
      "Ad1" : '',
      "Ad2" : '',
      "Ad3" : '',
      "Ad4" : '',
      "Ad5" : '',
      "Ad6" : '',
      "Ad7" : '',
      "Ad8" : ''
    };

   console.log("received request Popular Ads");
   con.query(dbQueries.popularads, function(err,queryResp){

      console.log("Response from db");
      console.log(queryResp);

      var counter=0;

      for(var pAd in popularAds){

        popularAds[pAd]=queryResp[counter++].Ad_Key_Text;
      }

      res.status(200).json(popularAds);

   });
    
  })

  app.get('/getSearchAdCount', function(req,res){

    console.log("received request Search Ads Count And Text");

    var responseData = [];

    

    con.query(dbQueries.popularAdCount, function(err,queryResp){

      console.log("Response from db");
      console.log(queryResp);

      for(var i=0;i<queryResp.length;i++){

        var adWithCount = {
          "count" : '',
          "searchKeyText" : ''
        };

        adWithCount.count=queryResp[i].Count;
        adWithCount.searchKeyText=queryResp[i].Search_Key_Text;
        responseData.push(adWithCount);
        
      }

      res.status(200).json(responseData);

   });

  })

  app.post('/predictData',function(req,res){

  console.log("received",req.body);

  // var searchkeys = req.param("searchkeys");
  // var adtitle = req.param("adtitle");
  // var adtext = req.param("adData");
  // var locations = req.param("locations");
  // var adtype = req.param("adtype");

  // console.log("searchkeys is : "+searchkeys);
  // console.log("adtitle is : "+adtitle);


  res.send(200,"Thanks");

  });

  app.get('/getMonthData',function(req,res){



  var data1 = [
                  [1, 65],
                  [2, 20],
                  [3, 14],
                  [4, 10],
                  [5, 10],
                  [6, 20],
                  [7, 28],
                  [8, 26],
                  [9, 22],
                  [10, 23],
                  [11, 24] ]

  var data2 = [
                  [1, 9],
                  [2, 15],
                  [3, 17],
                  [4, 21],
                  [5, 16],
                  [6, 15],
                  [7, 13],
                  [8, 15],
                  [9, 29],
                  [10, 21],
                  [11, 29]
              ]

  

  con.query(dbQueries.trendingAds.pastMonth, function(err,pastMonthResp){


      

      for(var i=0;i<pastMonthResp.length;i++){
        data1[i][1]=pastMonthResp[i].No_of_Clicks;
      }

      console.log(data1);

      con.query(dbQueries.trendingAds.currentMonth, function(err,currentMonthResp){

        console.log(currentMonthResp);

        for(var i=0;i<currentMonthResp.length;i++){
        data2[i][1]=currentMonthResp[i].No_of_Clicks;
        }


      })

      var responseData = {
        "data1" : data1,
        "data2" : data2
      }

      res.status(200).json(responseData);

   });

  })

  app.post('/signin',function(req,res){

  console.log("signdetails",req.body);
  res.send(200,"Go ahead");

  })

  app.listen(port);
  console.log('5353 is the port');
