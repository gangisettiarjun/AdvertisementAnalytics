
/**************************
 App ui Services

 loggit - Creates a logit type message for all logging

 **************************/

angular.module("app.ui.services", []).factory("loggit", [
    function() {
        var logIt;
        return toastr.options = {
            closeButton: !0,
            positionClass: "toast-top-right",
            timeOut: "3000"
        }, logIt = function(message, type) {
            return toastr[type](message);
        }, {
            log: function(message) {
                logIt(message, "info");
            },
            logWarning: function(message) {
                logIt(message, "warning");
            },
            logSuccess: function(message) {
                logIt(message, "success");
            },
            logError: function(message) {
                logIt(message, "error");
            }
        };
    }
]).factory("getCTRService", ["$http",
    function($http) {


        var finalData ="";

        var promise = $http.get('http://localhost:5353/getCTR').success(function(data){

                finalData=data;
        });
        return  {
            promise : promise,
            getCTR: function() {
                return finalData;
            }
           
        };

    }
]).service("getPopularAdsService", ["$http",
    function($http) {


        var popularAds = {};

        var promise = $http.get('http://localhost:5353/getPopularAds').success(function(data){ 
                popularAds=data;
                
        });
        return  {
            promise : promise,
            getPopularAds : function(){
                return popularAds;
            }
           
        };

    }
]).service("getSearchAdCountService", ["$http",
    function($http) {


        var resultdata = {};

        var promise = $http.get('http://localhost:5353/getSearchAdCount').success(function(data){

                
                console.log(data);
                resultdata.count1=data[0].count;
                resultdata.searchText1=data[0].searchKeyText;
                resultdata.count2=data[1].count;
                resultdata.searchText2=data[1].searchKeyText;
                resultdata.count3=data[2].count;
                resultdata.searchText3=data[2].searchKeyText;
                resultdata.count4=data[3].count;
                resultdata.searchText4=data[3].searchKeyText;
            
        });
        return  {
            promise : promise,
            getAdsWithCount: function() {
                return resultdata;
            }
           
        };

    }
]).service("getImpVsClicks", ["$http",
    function($http) {

        var data1=[];
        var data2=[];

        var promise = $http.get('http://localhost:5353/getImpVsClicks').success(function(data){

                data1=data.data1;
                data2=data.data2;

        });
        return  {
            promise : promise,
            getData1: function() {
                return data1;
            },
            getData2: function(){
                return data2;
            }
           
        };
    }
]).service("getMonthData",["$http",

    function($http) {

        var data1=[];
        var data2=[];

        var promise = $http.get('http://localhost:5353/getMonthData').success(function(data){

                data1=data.data1;
                data2=data.data2;
                console.log("promise fulfilled");
                console.log(data);

        });
        return  {
            promise : promise,
            getData1: function() {
                return data1;
            },
            getData2: function(){
                return data2;
            }
           
        };
    }



]);




