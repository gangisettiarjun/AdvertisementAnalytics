
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


        var ad1 ="";
        var ad2 ="";
        var ad3 ="";
        var ad4 ="";
        var ad5 ="";
        var ad6 ="";

        var promise = $http.get('http://localhost:5353/getPopularAds').success(function(data){

                ad1=data.Ad1;
                console.log(data);  
                ad2=data.Ad2;
                ad3=data.Ad3;
                ad4=data.Ad4;
                ad5=data.Ad5;
                ad6=data.Ad6;
        });
        return  {
            promise : promise,
            getAd1: function() {
                return ad1;
            },
            getAd2: function(){
                return ad2;
            },
            getAd3: function() {
                return ad3;
            },
            getAd4: function(){
                return ad4;
            },
            getAd5: function() {
                return ad5;
            },
            getAd6: function(){
                return ad6;
            }
           
        };

    }
]).service("getSearchAdCountService", ["$http",
    function($http) {


        var resultdata = {};

        var promise = $http.get('http://localhost:5353/getSearchAdCount').success(function(data){

                resultdata=data;
                console.log(data);
        });
        return  {
            promise : promise,
            getCount: function() {
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
                console.log(data);
                console.log("data logged");
                console.log(data.data1);
                console.log(data.data2);
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
]);