/*
 Application controllers
 Main controllers for the app
 */

angular.module("app.controllers", []).controller("AdminAppCtrl", ["$scope", "$location",
        function($scope, $location) {
            $scope.checkIfOwnPage = function() {

                return _.contains(["/404", "/pages/500", "/pages/login", "/pages/signin", "/pages/signin1", "/pages/signin2", "/pages/signup", "/pages/signup1", "/pages/signup2", "/pages/forgot", "/pages/lock-screen"], $location.path());

            };

            $scope.info = {
                theme_name: "Advertisment Analytics",
                user_name: "Team7"
            };


        }
    ]).controller("NavCtrl", ["$scope",
        function($scope) {

            $scope.navInfo = {
                tasks_number: 5,
                widgets_number: 13
            };

        }
    ]).controller("DashboardCtrl", ["$scope","$http","getCTRService",
        function($scope,$http,getCTRService) {
  
           $scope.ctr=getCTRService.getCTR();

        }
    ]).controller("PredictDataCtrl", ["$scope","$http",
            

            function($scope,$http){

                    $scope.sendPredictData= function(){

                        var customerinfo = {
                            "adtitle" : '',
                            "adtext"  : '',
                            "locations": [],
                            "adtype": '',
                            "searchkeys":[]
                        };


                        console.log("clicked");
                        
                        customerinfo.searchkeys=$scope.searchkeys.split(",");
                    
                        customerinfo.locations=$scope.locations.split(",");

                        customerinfo.adtitle=$scope.adtitle;

                        customerinfo.adtext=$scope.adData;

                        customerinfo.adtype=$scope.adtype;


                        console.log(customerinfo);


                                   var req = {
                                                method: 'POST',
                                                url: 'http://localhost:5353/predictData',
                                                headers: {
                                                  'Content-Type': 'application/json'
                                                },
                                                data: customerinfo  
                                            };

                        var res =   $http(req).                        
                            then(function(response) {
                                        window.location.href='/#/results';
                                  },function(response){
                                    
                                  });
                    };
            }

    ]).controller("ResultsCtrl", ["$scope","$http",
            
            function($scope,$http){

            console.log("welcome to results");

        }
    ]) . controller("SigninCtrl",["$scope","$http",


          function($scope,$http){
            /*Make a call to Signin REST API */

            $scope.signInUser = function(){

            var data2={ "hi " : "fucker"};
  
            console.log("Clicked ");
            $http.post('http://localhost:5353/signin',data2).
                        then(function(response) {
                                console.log("loggedin"+response.data);
                                
                                //window.location.href='/#/dashboard/dashboard';
                          },function(response){
                            
                          });
            };

          }

    ]).controller("popularAdCtrl",["$scope","getPopularAdsService",


    function($scope, getPopularAdsService){

        var popularAds = getPopularAdsService.getPopularAds();
        console.log(popularAds);

        $scope.advertisement1 = popularAds.Ad1;
        $scope.advertisement2 = popularAds.Ad2;
        $scope.advertisement3 = popularAds.Ad3;
        $scope.advertisement4 = popularAds.Ad4;
        $scope.advertisement5 = popularAds.Ad5;
        $scope.advertisement6 = popularAds.Ad6;
        $scope.advertisement7 = popularAds.Ad7;
        $scope.advertisement8 = popularAds.Ad8;
    }

    ]);



/*

 Chart controllers

 Includes controller for :

 https://github.com/rendro/easy-pie-chart - Easypiechart
 Morris charts
 FlotCharts
 http://omnipotent.net/jquery.sparkline/ - Sparkline

*/

angular.module("app.chart.ctrls", []).controller("chartingCtrl", ["$scope",
        function($scope) {
            return $scope.easypie1 = {
                percent: 25,
                options: {
                    animate: {
                        duration: 1e2,
                        enabled: !0
                    },
                    barColor: "#c1bfc0",
                    lineCap: "round",
                    size: 130,
                    lineWidth: 8
                },
                name:"Bounce rate"
            }, $scope.easypie2 = {
                percent: 35,
                options: {
                    animate: {
                        duration: 1e2,
                        enabled: !0
                    },
                    barColor: "#383d43",
                    lineCap: "round",
                    size: 130,
                    lineWidth: 8
                },
                name:"Daily active user activation"
            }, $scope.easypie3 = {
                percent: 87,
                options: {
                    animate: {
                        duration: 1e2,
                        enabled: !0
                    },
                    barColor: "#db5031",
                    lineCap: "round",
                    size: 130,
                    lineWidth: 8
                },
                name:"registration / unique visit"
            },$scope.easypiesmall1 = {
                percent: 25,
                options: {
                    animate: {
                        duration: 1e2,
                        enabled: !0
                    },
                    barColor: "#c1bfc0",
                    lineCap: "round",
                    size: 67,
                    lineWidth: 5
                },
                name:"Bounce rate"
            }, $scope.easypiesmall2 = {
                percent: 35,
                options: {
                    animate: {
                        duration: 1e2,
                        enabled: !0
                    },
                    barColor: "#383d43",
                    lineCap: "round",
                    size: 67,
                    lineWidth: 5
                },
                name:"Daily active user activation"
            }, $scope.easypiesmall3 = {
                percent: 87,
                options: {
                    animate: {
                        duration: 1e2,
                        enabled: !0
                    },
                    barColor: "#db5031",
                    lineCap: "round",
                    size: 67,
                    lineWidth: 5
                },
                name:"registration / unique visit"
            };
        }
    ]).controller("gaugeCtrl", ["$scope",
        function($scope) {
            return $scope.gauge1 = {
                gaugeData: {
                    maxValue: 3e3,
                    animationSpeed: 100,
                    val: 1075
                },
                gaugeOptions: {
                    lines: 12,
                    angle: 0,
                    lineWidth: 0.47,
                    pointer: {
                        length: 0.6,
                        strokeWidth: 0.03,
                        color: "#555555"
                    },
                    limitMax: "false",
                    colorStart: "#c1bfc0",
                    colorStop: "#c1bfc0",
                    strokeColor: "#F5F5F5",
                    generateGradient: !0,
                    percentColors: [
                        [0, "#c1bfc0"],
                        [1, "#c1bfc0"]
                    ]
                }
            }, $scope.gauge2 = {
                gaugeData: {
                    maxValue: 3e3,
                    animationSpeed: 100,
                    val: 1300
                },
                gaugeOptions: {
                    lines: 12,
                    angle: 0,
                    lineWidth: 0.47,
                    pointer: {
                        length: 0.6,
                        strokeWidth: 0.03,
                        color: "#555555"
                    },
                    limitMax: "false",
                    colorStart: "#383d43",
                    colorStop: "#383d43",
                    strokeColor: "#F5F5F5",
                    generateGradient: !0,
                    percentColors: [
                        [0, "#383d43"],
                        [1, "#383d43"]
                    ]
                }
            }, $scope.gauge3 = {
                gaugeData: {
                    maxValue: 3e3,
                    animationSpeed: 100,
                    val: 1500
                },
                gaugeOptions: {
                    lines: 12,
                    angle: 0,
                    lineWidth: 0.47,
                    pointer: {
                        length: 0.6,
                        strokeWidth: 0.03,
                        color: "#555555"
                    },
                    limitMax: "false",
                    colorStart: "#db5031",
                    colorStop: "#db5031",
                    strokeColor: "#F5F5F5",
                    generateGradient: !0,
                    percentColors: [
                        [0, "#db5031"],
                        [1, "#db5031"]
                    ]
                }
            };
        }
    ]).controller("morrisChartCtrl", ["$scope",
        function($scope) {
            return $scope.mainData = [{
                month: "2013-01",
                xbox: 294e3,
                will: 136e3,
                playstation: 244e3
            }, {
                month: "2013-02",
                xbox: 228e3,
                will: 335e3,
                playstation: 127e3
            }, {
                month: "2013-03",
                xbox: 199e3,
                will: 159e3,
                playstation: 13e4
            }, {
                month: "2013-04",
                xbox: 174e3,
                will: 16e4,
                playstation: 82e3
            }, {
                month: "2013-05",
                xbox: 255e3,
                will: 318e3,
                playstation: 82e3
            }, {
                month: "2013-06",
                xbox: 298400,
                will: 401800,
                playstation: 98600
            }, {
                month: "2013-07",
                xbox: 37e4,
                will: 225e3,
                playstation: 159e3
            }, {
                month: "2013-08",
                xbox: 376700,
                will: 303600,
                playstation: 13e4
            }, {
                month: "2013-09",
                xbox: 527800,
                will: 301e3,
                playstation: 119400
            }], $scope.simpleData = [{
                year: "2008",
                value: 20
            }, {
                year: "2009",
                value: 10
            }, {
                year: "2010",
                value: 5
            }, {
                year: "2011",
                value: 5
            }, {
                year: "2012",
                value: 20
            }, {
                year: "2013",
                value: 19
            }], $scope.comboData = [{
                year: "2008",
                a: 20,
                b: 16,
                c: 12
            }, {
                year: "2009",
                a: 10,
                b: 22,
                c: 30
            }, {
                year: "2010",
                a: 5,
                b: 14,
                c: 20
            }, {
                year: "2011",
                a: 5,
                b: 12,
                c: 19
            }, {
                year: "2012",
                a: 20,
                b: 19,
                c: 13
            }, {
                year: "2013",
                a: 28,
                b: 22,
                c: 20
            }], $scope.donutData = [{
                label: "Download Sales",
                value: 12
            }, {
                label: "In-Store Sales",
                value: 30
            }, {
                label: "Mail-Order Sales",
                value: 20
            }, {
                label: "Online Sales",
                value: 19
            }];
        }
    ]).controller("chartjsCtrl", ['$scope',"getImpVsClicks",
        function($scope,getImpVsClicks) {

            $scope.impressionsData=[];

            $scope.impressionsData1=getImpVsClicks.getData1();
            $scope.impressionsData2=getImpVsClicks.getData2();

            $scope.chartjsBar = {

                labels: ["2009", "2010", "2011", "2012", "2013","2014","2015","2016"],
                datasets: [
                    {
                        label: "My First dataset",
                        fillColor: "rgba(56, 61, 67, 0.5)",
                        strokeColor: "rgba(56, 61, 67, 0.5)",
                        highlightFill: "rgba(56, 61, 67, 0.8)",
                        highlightStroke: "rgba(56, 61, 67, 0.8)",
                        data: $scope.impressionsData1
                    },
                    {
                        label: "My Second dataset",
                        fillColor: "rgba(183,28,28,0.8)",
                        strokeColor: "rgba(183,28,28,0.8)",
                        highlightFill: "rgba(183,28,28,0.8)",
                        highlightStroke: "rgba(183,28,28,0.8)",
                        data: $scope.impressionsData2
                    }
                ]
                };

            console.log($scope.chartjsBar);
            return $scope.chartjsBar;
        }
    ]).controller("flotChartCtrl", ["$scope","getMonthData",
        function($scope,getMonthData) {
            var areaChart, barChart, lineChart1;

            return lineChart1 = {}, lineChart1.data1 = getMonthData.getData1(), lineChart1.data2 = getMonthData.getData2(), $scope.line1 = {}, $scope.line1.data = [{
                data: lineChart1.data1,
                label: "Past Month",
                lines: {
                    fill: !0
                }
            }, {
                data: lineChart1.data2,
                label: "Current Month",
                lines: {
                    fill: !1
                }
            }], $scope.line1.options = {
                series: {
                    lines: {
                        show: !0,
                        fill: !1,
                        lineWidth: 3,
                        fillColor: {
                            colors: [{
                                opacity: 0.3
                            }, {
                                opacity: 0.3
                            }]
                        }
                    },
                    points: {
                        show: !0,
                        lineWidth: 3,
                        fill: !0,
                        fillColor: "#ffffff",
                        symbol: "circle",
                        radius: 5
                    },
                    shadowSize: 0

                },
                colors: ["#c1bfc0", "#B71C1C"],
                tooltip: !0,
                tooltipOpts: {
                    defaultTheme: !1
                },
                grid: {
                    hoverable: !0,
                    clickable: !0,
                    tickColor: "#f9f9f9",
                    borderWidth: 1,
                    borderColor: "#eeeeee"
                },
                xaxis: {
                    ticks: [
                        [1, "Boots UK"],
                        [2, "HgCapital"],
                        [3, "Espares"],
                        [4, "Smith"],
                        [5, "RealVNC"],
                        [6, "Google"],
                        [7, "Bee Craft"],
                        [8, "Fenners"],
                        [9, "Quarry"],
                        [10, "Cambridge"],
                        [11, "Britannia"],
                        [12, "Polytechnic."]
                    ]
                }
            }, areaChart = {}, areaChart.data1 = [
                [2007, 15],
                [2008, 20],
                [2009, 10],
                [2010, 5],
                [2011, 5],
                [2012, 20],
                [2013, 28]
            ], areaChart.data2 = [
                [2007, 15],
                [2008, 16],
                [2009, 22],
                [2010, 14],
                [2011, 12],
                [2012, 19],
                [2013, 22]
            ], $scope.area = {}, $scope.area.data = [{
                data: areaChart.data1,
                label: "Ad impressions",
                lines: {
                    fill: !0
                }
            }, {
                data: areaChart.data2,
                label: "Ad Clicks",
                points: {
                    show: !0
                },
                yaxis: 2
            }], $scope.area.options = {
                series: {
                    lines: {
                        lineWidth: 3,
                        show: !0,
                        fill: !1
                    },
                    points: {
                        show: !0,
                        lineWidth: 3,
                        fill: !0,
                        fillColor: "#ffffff",
                        symbol: "circle",
                        radius: 5
                    },
                    shadowSize: 0
                },
                grid: {
                    hoverable: !0,
                    clickable: !0,
                    tickColor: "#f9f9f9",
                    borderWidth: 1,
                    borderColor: "#eeeeee"
                },
                colors: ["#c1bfc0", "#db5031"],
                tooltip: !0,
                tooltipOpts: {
                    defaultTheme: !1
                },
                xaxis: {
                    mode: "time"
                },
                yaxes: [{}, {
                    position: "right"
                }]
            }, barChart = {}, barChart.data1 = [
                ["Jan", 20],
                [2009, 10],
                [2010, 5],
                [2011, 5],
                [2012, 20],
                [2013, 28]
            ], barChart.data2 = [
                ["Jan", 16],
                [2009, 22],
                [2010, 14],
                [2011, 12],
                [2012, 19],
                [2013, 22]
            ], barChart.data3 = [
                [2008, 12],
                [2009, 30],
                [2010, 20],
                [2011, 19],
                [2012, 13],
                [2013, 20]
            ], $scope.barChart = {}, $scope.barChart.data = [{
                label: "Ad Clicks",
                data: barChart.data1
            }, {
                label: "Ad Impressions",
                data: barChart.data2
            }], $scope.barChart.options = {
                series: {
                    stack: !0,
                    bars: {
                        show: !0,
                        fill: 1,
                        barWidth: 0.3,
                        align: "center",
                        horizontal: !1,
                        order: 1
                    }
                },
                grid: {
                    hoverable: !0,
                    borderWidth: 1,
                    borderColor: "#eeeeee"
                },
                tooltip: !0,
                tooltipOpts: {
                    defaultTheme: !1
                },
                colors: ["#006600", "#db5031", "#fef9d9"]
            }, $scope.pieChart = {}, $scope.pieChart.data = [{
                label: "Download Sales",
                data: 12
            }, {
                label: "In-Store Sales",
                data: 30
            }, {
                label: "Mail-Order Sales",
                data: 20
            }, {
                label: "Online Sales",
                data: 19
            }], $scope.pieChart.options = {
                series: {
                    pie: {
                        show: !0
                    }
                },
                legend: {
                    show: !0
                },
                grid: {
                    hoverable: !0,
                    clickable: !0
                },
                colors: ["#383d43", "#db5031", "#fef9d9","#503f3c"],
                tooltip: !0,
                tooltipOpts: {
                    content: "%p.0%, %s",
                    defaultTheme: !1
                }
            }, $scope.donutChart = {}, $scope.donutChart.data = [{
                label: "Download Sales",
                data: 12
            }, {
                label: "In-Store Sales",
                data: 30
            }, {
                label: "Mail-Order Sales",
                data: 20
            }, {
                label: "Online Sales",
                data: 19
            }], $scope.donutChart.options = {
                series: {
                    pie: {
                        show: !0,
                        innerRadius: 0.5
                    }
                },
                legend: {
                    show: !0
                },
                grid: {
                    hoverable: !0,
                    clickable: !0
                },
                colors: ["#383d43", "#db5031", "#c1bfc0","#503f3c"],
                tooltip: !0,
                tooltipOpts: {
                    content: "%p.0%, %s",
                    defaultTheme: !1
                }
            }, $scope.donutChart2 = {}, $scope.donutChart2.data = [{
                label: "Download Sales",
                data: 12
            }, {
                label: "In-Store Sales",
                data: 30
            }, {
                label: "Mail-Order Sales",
                data: 20
            }, {
                label: "Online Sales",
                data: 19
            }, {
                label: "Direct Sales",
                data: 15
            }], $scope.donutChart2.options = {
                series: {
                    pie: {
                        show: !0,
                        innerRadius: 0.5
                    }
                },
                legend: {
                    show: !1
                },
                grid: {
                    hoverable: !0,
                    clickable: !0
                },
                colors: ["#2693E9", "#F5862C", "#43B040", "#619CC4", "#6D90C5"],
                tooltip: !0,
                tooltipOpts: {
                    content: "%p.0%, %s",
                    defaultTheme: !1
                }
            };
        }
    ]).controller("flotChartCtrl.realtime", ["$scope",
        function() {}
    ]).controller("sparklineCtrl", ["$scope","getSearchAdCountService",
        function($scope,getSearchAdCountService) {
             
           // $scope.simpleChart2info ={};

           $scope.count = getSearchAdCountService.getAdsWithCount();
        console.log($scope.count);

             $scope.simpleChart2info = {
                sparkData: [3, 1, 2, 3, 5, 3, 4, 2],
                sparkOptions: {
                    type: "bar",
                    barColor: "#FFFFFF",
                    width: "100px",
                    height: "30px"
                }
            };

            return $scope.simpleChart2info;
        }
    ]);
           


    



/*
 App tasks controllers
 Main task controllers (includes saving tasks into localStorage)
 */

angular.module("app.task", []).factory("taskStorage", function() {

    /**************************
     Saves and loads tasks from the localStorage
     **************************/

    var DEMO_TASKS, STORAGE_ID;
    return STORAGE_ID = "tasks",
        DEMO_TASKS = '[ ' +
            '{"title": "Call customer X", "completed": true}, ' +
            '{"title": "Review marketing system", "completed": true}, ' +
            '{"title": "Do the twist!", "completed": false}, ' +
            '{"title": "Watch over the mars scheme", "completed": false}, ' +
            '{"title": "Complete proposal for spaceship", "completed": false}, ' +
            '{"title": "Do inventory of everything", "completed": false} ]', {
        get: function() {
            return JSON.parse(localStorage.getItem(STORAGE_ID) || DEMO_TASKS);
        },
        put: function(tasks) {
            return localStorage.setItem(STORAGE_ID, JSON.stringify(tasks));
        }
    };
}).controller("taskCtrl", ["$scope", "taskStorage", "filterFilter", "$rootScope", "loggit",
        function($scope, taskStorage, filterFilter, $rootScope, loggit) {
            var tasks;
            return tasks = $scope.tasks = taskStorage.get(),
                $scope.newTask = "",
                $scope.countTasksLeft = filterFilter(tasks, {
                    completed: !1
                }).length, $scope.editedTask = null, $scope.statusFilter = {
                completed: !1
            }, $scope.filter = function(filterType) {
                switch (filterType) {
                    case "all":
                        $scope.statusFilter = "";
                        break;
                    case "active":
                        $scope.statusFilter = {
                            completed: !1
                        };
                        break;
                    case "completed":
                        $scope.statusFilter = {
                            completed: !0
                        };
                        break;
                }
            }, $scope.add = function() {
                var newTask;
                return newTask = $scope.newTask.trim(), 0 !== newTask.length ? (tasks.push({
                    title: newTask,
                    completed: !1
                }), loggit.logSuccess('New task added : "' + newTask + '"'), taskStorage.put(tasks), $scope.newTask = "", $scope.countTasksLeft++) : void 0;
            }, $scope.edit = function(task) {
                $scope.editedTask = task;
            }, $scope.doneEditing = function(task) {
                return $scope.editedTask = null, task.title = task.title.trim(), task.title ? loggit.log("Task was updated") : $scope.remove(task), taskStorage.put(tasks);
            }, $scope.remove = function(task) {
                var index;
                return $scope.countTasksLeft -= task.completed ? 0 : 1, index = $scope.tasks.indexOf(task), $scope.tasks.splice(index, 1), taskStorage.put(tasks), loggit.logError("Task was removed");
            }, $scope.completed = function(task) {
                return $scope.countTasksLeft += task.completed ? -1 : 1, taskStorage.put(tasks), task.completed ? $scope.countTasksLeft > 0 ? loggit.log(1 === $scope.countTasksLeft ? "Only " + $scope.countTasksLeft + " task left" : "Well done! Only " + $scope.countTasksLeft + " tasks left") : loggit.logSuccess("Yay!! All tasks are done :)") : void 0;
            }, $scope.clearCompleted = function() {
                return $scope.tasks = tasks = tasks.filter(function(val) {
                    return !val.completed;
                }), taskStorage.put(tasks);
            }, $scope.markAll = function(completed) {
                return tasks.forEach(function(task) {
                    task.completed = completed;
                }), $scope.countTasksLeft = completed ? 0 : tasks.length, taskStorage.put(tasks), completed ? loggit.logSuccess("Yay!! All tasks are done :)") : void 0;
            }, $scope.$watch("countTasksLeft == 0", function(val) {
                $scope.allChecked = val;
            }), $scope.$watch("countTasksLeft", function(newVal) {
                $rootScope.$broadcast("taskRemaining:changed", newVal);
            });
        }
    ]);



/*
 App Form validations
 Validator functions for form elements (signIn,signUp and custom forms)
 */

angular.module("app.form.validation", []).controller("wizardFormCtrl", ["$scope",
        function($scope) {
            return $scope.wizard = {
                firstName: "some name",
                lastName: "",
                email: "",
                password: "",
                age: "",
                address: ""
            }, $scope.isValidateStep1 = function() {
                return void 0;
            }, $scope.finishedWizard = function() {
                return void 0;
            };
        }
    ]).controller("formConstraintsCtrl", ["$scope",
        function($scope) {
            var original;
            return $scope.form = {
                required: "",
                minlength: "",
                maxlength: "",
                length_rage: "",
                type_something: "",
                confirm_type: "",
                foo: "",
                email: "",
                url: "",
                num: "",
                minVal: "",
                maxVal: "",
                valRange: "",
                pattern: ""
            }, original = angular.copy($scope.form), $scope.revert = function() {
                return $scope.form = angular.copy(original), $scope.form_constraints.$setPristine();
            }, $scope.canRevert = function() {
                return !angular.equals($scope.form, original) || !$scope.form_constraints.$pristine;
            }, $scope.canSubmit = function() {
                return $scope.form_constraints.$valid && !angular.equals($scope.form, original);
            };
        }
    ]).controller("signinCtrl", ["$scope",
        function($scope) {
            var original;
            return $scope.user = {
                email: "",
                password: ""
            }, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function() {
                return $scope.user = angular.copy(original), $scope.form_signin.$setPristine();
            }, $scope.canRevert = function() {
                return !angular.equals($scope.user, original) || !$scope.form_signin.$pristine;
            }, $scope.canSubmit = function() {
                return $scope.form_signin.$valid && !angular.equals($scope.user, original);
            }, $scope.submitForm = function() {
                return $scope.showInfoOnSubmit = !0, $scope.revert();
            };
        }
    ]).controller("signupCtrl", ["$scope",
        function($scope) {
            var original;
            return $scope.user = {
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                age: ""
            }, $scope.showInfoOnSubmit = !1, original = angular.copy($scope.user), $scope.revert = function() {
                return $scope.user = angular.copy(original), $scope.form_signup.$setPristine(), $scope.form_signup.confirmPassword.$setPristine();
            }, $scope.canRevert = function() {
                return !angular.equals($scope.user, original) || !$scope.form_signup.$pristine;
            }, $scope.canSubmit = function() {
                return $scope.form_signup.$valid && !angular.equals($scope.user, original);
            }, $scope.submitForm = function() {
                return $scope.showInfoOnSubmit = !0, $scope.revert();
            };
        }
    ]).directive("validateEquals", [
        function() {
            return {
                require: "ngModel",
                link: function(scope, ele, attrs, ngModelCtrl) {
                    var validateEqual;
                    return validateEqual = function(value) {
                        var valid;
                        return valid = value === scope.$eval(attrs.validateEquals), ngModelCtrl.$setValidity("equal", valid), "function" == typeof valid ? valid({
                            value: void 0
                        }) : void 0;
                    }, ngModelCtrl.$parsers.push(validateEqual), ngModelCtrl.$formatters.push(validateEqual), scope.$watch(attrs.validateEquals, function(newValue, oldValue) {
                        return newValue !== oldValue ? ngModelCtrl.$setViewValue(ngModelCtrl.$ViewValue) : void 0;
                    });
                }
            };
        }
    ]);



/*
 App Form Ui Controls
 Controllers for form Ui components
 */

angular.module("app.ui.form.ctrls", []).controller("TagsDemoCtrl", ["$scope",
        function($scope) {
            $scope.tags = ["foo", "bar","fuker"];
        }
    ]).controller("DatepickerDemoCtrl", ["$scope",
        function($scope) {
            return $scope.today = function() {
                $scope.dt = new Date();
            }, $scope.today(), $scope.showWeeks = !0, $scope.toggleWeeks = function() {
                $scope.showWeeks = !$scope.showWeeks;
            }, $scope.clear = function() {
                $scope.dt = null;
            }, $scope.disabled = function(date, mode) {
                return "day" === mode && (0 === date.getDay() || 6 === date.getDay());
            }, $scope.toggleMin = function() {
                var _ref;
                $scope.minDate = null !== (_ref = $scope.minDate) ? _ref : {
                    "null": new Date()
                };
            }, $scope.toggleMin(), $scope.open = function($event) {
                return $event.preventDefault(), $event.stopPropagation(), $scope.opened = !0;
            }, $scope.dateOptions = {
                "year-format": "'yy'",
                "starting-day": 1
            }, $scope.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "shortDate"], $scope.format = $scope.formats[0];
        }
    ]).controller("TimepickerDemoCtrl", ["$scope",
        function($scope) {
            return $scope.mytime = new Date(), $scope.hstep = 1, $scope.mstep = 15, $scope.options = {
                hstep: [1, 2, 3],
                mstep: [1, 5, 10, 15, 25, 30]
            }, $scope.ismeridian = !0, $scope.toggleMode = function() {
                $scope.ismeridian = !$scope.ismeridian;
            }, $scope.update = function() {
                var d;
                return d = new Date(), d.setHours(14), d.setMinutes(0), $scope.mytime = d;
            }, $scope.changed = function() {
                return void 0;
            }, $scope.clear = function() {
                $scope.mytime = null;
            };
        }
    ]).controller("TypeaheadCtrl", ["$scope",
        function($scope) {
            return $scope.selected = void 0, $scope.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
        }
    ]).controller("RatingDemoCtrl", ["$scope",
        function($scope) {
            return $scope.rate = 7, $scope.max = 10, $scope.isReadonly = !1, $scope.hoveringOver = function(value) {
                return $scope.overStar = value, $scope.percent = 100 * (value / $scope.max);
            }, $scope.ratingStates = [{
                stateOn: "glyphicon-ok-sign",
                stateOff: "glyphicon-ok-circle"
            }, {
                stateOn: "glyphicon-star",
                stateOff: "glyphicon-star-empty"
            }, {
                stateOn: "glyphicon-heart",
                stateOff: "glyphicon-ban-circle"
            }, {
                stateOn: "glyphicon-heart"
            }, {
                stateOff: "glyphicon-off"
            }];
        }
    ]);



/*
 App Tables
 Controller for dynamic and other tables
 */

angular.module("app.tables", []).controller("tableCtrl", ["$scope", "$filter",
    function($scope, $filter) {
        var init;
        return $scope.stores = [{
            name: "Nijiya Market",
            price: "$$",
            sales: 292,
            rating: 4
        }, {
            name: "Eat On Monday Truck",
            price: "$",
            sales: 119,
            rating: 4.3
        }, {
            name: "Tea Era",
            price: "$",
            sales: 874,
            rating: 4
        }, {
            name: "Rogers Deli",
            price: "$",
            sales: 347,
            rating: 4.2
        }, {
            name: "MoBowl",
            price: "$$$",
            sales: 24,
            rating: 4.6
        }, {
            name: "The Milk Pail Market",
            price: "$",
            sales: 543,
            rating: 4.5
        }, {
            name: "Nob Hill Foods",
            price: "$$",
            sales: 874,
            rating: 4
        }, {
            name: "Scratch",
            price: "$$$",
            sales: 643,
            rating: 3.6
        }, {
            name: "Gochi Japanese Fusion Tapas",
            price: "$$$",
            sales: 56,
            rating: 4.1
        }, {
            name: "Cost Plus World Market",
            price: "$$",
            sales: 79,
            rating: 4
        }, {
            name: "Bumble Bee Health Foods",
            price: "$$",
            sales: 43,
            rating: 4.3
        }, {
            name: "Costco",
            price: "$$",
            sales: 219,
            rating: 3.6
        }, {
            name: "Red Rock Coffee Co",
            price: "$",
            sales: 765,
            rating: 4.1
        }, {
            name: "99 Ranch Market",
            price: "$",
            sales: 181,
            rating: 3.4
        }, {
            name: "Mi Pueblo Food Center",
            price: "$",
            sales: 78,
            rating: 4
        }, {
            name: "Cucina Venti",
            price: "$$",
            sales: 163,
            rating: 3.3
        }, {
            name: "Sufi Coffee Shop",
            price: "$",
            sales: 113,
            rating: 3.3
        }, {
            name: "Dana Street Roasting",
            price: "$",
            sales: 316,
            rating: 4.1
        }, {
            name: "Pearl Cafe",
            price: "$",
            sales: 173,
            rating: 3.4
        }, {
            name: "Posh Bagel",
            price: "$",
            sales: 140,
            rating: 4
        }, {
            name: "Artisan Wine Depot",
            price: "$$",
            sales: 26,
            rating: 4.1
        }, {
            name: "Hong Kong Chinese Bakery",
            price: "$",
            sales: 182,
            rating: 3.4
        }, {
            name: "Starbucks",
            price: "$$",
            sales: 97,
            rating: 3.7
        }, {
            name: "Tapioca Express",
            price: "$",
            sales: 301,
            rating: 3
        }, {
            name: "House of Bagels",
            price: "$",
            sales: 82,
            rating: 4.4
        }], $scope.searchKeywords = "", $scope.filteredStores = [], $scope.row = "", $scope.select = function(page) {
            var end, start;
            return start = (page - 1) * $scope.numPerPage, end = start + $scope.numPerPage, $scope.currentPageStores = $scope.filteredStores.slice(start, end);
        }, $scope.onFilterChange = function() {
            return $scope.select(1), $scope.currentPage = 1, $scope.row = "";
        }, $scope.onNumPerPageChange = function() {
            return $scope.select(1), $scope.currentPage = 1;
        }, $scope.onOrderChange = function() {
            return $scope.select(1), $scope.currentPage = 1;
        }, $scope.search = function() {
            return $scope.filteredStores = $filter("filter")($scope.stores, $scope.searchKeywords), $scope.onFilterChange();
        }, $scope.order = function(rowName) {
            return $scope.row !== rowName ? ($scope.row = rowName, $scope.filteredStores = $filter("orderBy")($scope.stores, rowName), $scope.onOrderChange()) : void 0;
        }, $scope.numPerPageOpt = [3, 5, 10, 20], $scope.numPerPage = $scope.numPerPageOpt[2], $scope.currentPage = 1, $scope.currentPageStores = [], (init = function() {
            return $scope.search(), $scope.select($scope.currentPage);
        }), $scope.search();
    }
]);

/*
 App Ui Controllers
 Provides general controllers for the app
 */

angular.module("app.ui.ctrls", []).controller("NotifyCtrl", ["$scope", "loggit",
    function($scope, loggit) {
        $scope.notify = function(type) {
            switch (type) {
                case "info":
                    return loggit.log("Hello! This is an alert of the info importance level.");
                case "success":
                    return loggit.logSuccess("Great! You did something successfully.");
                case "warning":
                    return loggit.logWarning("Warning! Something that happened that is not critical but important.");
                case "error":
                    return loggit.logError("Error! Something went terribly wrong and needs your attention.");
            }
        };
    }
]).controller("AlertDemoCtrl", ["$scope",
    function($scope) {
        $scope.alerts = [{
            type: "success",
            msg: "Great! You did something successfully."
        }, {
            type: "info",
            msg: "Hello! This is an alert of the info importance level."
        }, {
            type: "warning",
            msg: "Warning! Something that happened that is not critical but important."
        }, {
            type: "danger",
            msg: "Error! Something went terribly wrong and needs your attention."
        }];

        $scope.addAlert = function() {
            $scope.alerts.push({msg: 'Another alert!'});
        };

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };
    }
]).controller("ProgressDemoCtrl", ["$scope",
    function($scope) {
        $scope.max = 200;

        $scope.random = function() {
            var value = Math.floor((Math.random() * 100) + 1);
            var type;

            if (value < 25) {
                type = 'success';
            } else if (value < 50) {
                type = 'info';
            } else if (value < 75) {
                type = 'warning';
            } else {
                type = 'danger';
            }

            $scope.showWarning = (type === 'danger' || type === 'warning');

            $scope.dynamic = value;
            $scope.type = type;
        };
        $scope.random();

        $scope.randomStacked = function() {
            $scope.stacked = [];
            var types = ['success', 'info', 'warning', 'danger'];

            for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
                var index = Math.floor((Math.random() * 4));
                $scope.stacked.push({
                    value: Math.floor((Math.random() * 30) + 1),
                    type: types[index]
                });
            }
        };
        $scope.randomStacked();
    }
]).controller("AccordionDemoCtrl", ["$scope",
    function($scope) {
        return $scope.oneAtATime = !0, $scope.groups = [{
            title: "First Group Header",
            content: "First Group Body"
        }, {
            title: "Second Group Header",
            content: "Second Group Body"
        }, {
            title: "Third Group Header",
            content: "Third Group Body"
        }], $scope.items = ["Item 1", "Item 2", "Item 3"], $scope.status = {
            isFirstOpen: !0,
            isFirstOpen1: !0,
            isFirstOpen2: !0,
            isFirstOpen3: !0,
            isFirstOpen4: !0,
            isFirstOpen5: !0,
            isFirstOpen6: !0
        }, $scope.addItem = function() {
            var newItemNo;
            newItemNo = $scope.items.length + 1;
            $scope.items.push("Item " + newItemNo);
        };
    }
]).controller("CollapseDemoCtrl", ["$scope",
    function($scope) {
        $scope.isCollapsed = !1;
    }
]).controller("ModalDemoCtrl", ["$scope", "$modal", "$log",
    function($scope, $modal, $log) {
        $scope.items = ['item1', 'item2', 'item3'];

        $scope.open = function (size) {

            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
    }
]).controller("ModalInstanceCtrl", ["$scope", "$modalInstance", "items",
    function($scope, $modalInstance, items) {
        $scope.items = items;
        $scope.selected = {
            item: $scope.items[0]
        };

        $scope.ok = function () {
            $modalInstance.close($scope.selected.item);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }
]).controller("PaginationDemoCtrl", ["$scope",
    function($scope) {
        $scope.totalItems = 64;
        $scope.currentPage = 4;

        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function() {
            console.log('Page changed to: ' + $scope.currentPage);
        };

        $scope.maxSize = 5;
        $scope.bigTotalItems = 175;
        $scope.bigCurrentPage = 1;
    }
]).controller("MapDemoCtrl", ["$scope", "$http", "$interval",
    function($scope, $http, $interval) {
        var i, markers;
        for (markers = [], i = 0; 8 > i;){
            markers[i] = new google.maps.Marker({
                title: "Marker: " + i
            });
            i++;
        }
        $scope.GenerateMapMarkers = function() {
            var d, lat, lng, loc, numMarkers;
            for (d = new Date(), $scope.date = d.toLocaleString(), numMarkers = Math.floor(4 * Math.random()) + 4, i = 0; numMarkers > i;){
                lat = 38.73 + Math.random() / 100;
                lng = -9.14 + Math.random() / 100;
                loc = new google.maps.LatLng(lat, lng);
                markers[i].setPosition(loc);
                markers[i].setMap($scope.map);
                i++;
            }
        }; $interval($scope.GenerateMapMarkers, 2e3);
    }
]).controller("TreeDemoCtrl", ["$scope",
    function($scope) {
        // Parameters

        $scope.list = [{
            "id": 1,
            "title": "1. dragon-breath",
            "items": []
        }, {
            "id": 2,
            "title": "2. moiré-vision",
            "items": [{
                "id": 21,
                "title": "2.1. tofu-animation",
                "items": [{
                    "id": 211,
                    "title": "2.1.1. spooky-giraffe",
                    "items": []
                }, {
                    "id": 212,
                    "title": "2.1.2. bubble-burst",
                    "items": []
                }]
            }, {
                "id": 22,
                "title": "2.2. barehand-atomsplitting",
                "items": []
            }]
        }, {
            "id": 3,
            "title": "3. unicorn-zapper",
            "items": []
        }, {
            "id": 4,
            "title": "4. romantic-transclusion",
            "items": []
        }];

        $scope.callbacks = {
        };

        $scope.remove = function(scope) {
            scope.remove();
        };

        $scope.toggle = function(scope) {
            scope.toggle();
        };

        $scope.newSubItem = function(scope) {
            var nodeData = scope.$modelValue;
            nodeData.items.push({
                id: nodeData.id * 10 + nodeData.items.length,
                title: nodeData.title + '.' + (nodeData.items.length + 1),
                items: []
            });
        };
    }
]);

