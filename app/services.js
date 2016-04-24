
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
]).factory("getCTRService", ["$http","$rootScope",
    function($http,$rootScope) {
        return  {
            getData: function() {
                return $http.get('http://localhost:5353/getCTR').then(function(response){ //wrap it inside another promise using then
                            return response.data;  //only return friends 
                        });
            }
           
        };
    }
]).factory("getImpVsClicks", ["$http",
    function($http) {
        return  {
            getData: function() {
                return $http.get('http://localhost:5353/getImpVsClicks').then(function(response){ //wrap it inside another promise using then
                            return response.data;  //only return friends 
                        });
            }
           
        };
    }
]);