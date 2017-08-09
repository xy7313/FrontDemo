// Code goes here

var app = angular.module('myapp',['ngRoute']);

//inject ...to config function
//any services called ...Provider
app.config(function($routeProvider){
  //one parament, the url pattern you want to route
  $routeProvider.when('/',{
    'template':'<h1>hi im h1</h1>'
  })
  .when('/profile',{
    templateUrl:'profile.html'
  })
  .when('/users',{
    templateUrl:'users.html',
    controller:'userController'
  })
  .when('/users/:id',{
    templateUrl:'userx_detail.html',
    controller:'userDetailController'
  });
});


app.controller('userController',function($scope,$rootScope,$sce){
  $scope.users = [
   {"username":"xy1","place":"p1"},
    {"username":"xy2","place":"p2"},
    {"username":"xy3","place":"p3"},
    {"username":"xy4","place":"p4"},
    {"username":"xy5","place":"p5"}
  ];
  //make users array available in next detail controller
  $rootScope.users=$scope.users;
  
});

app.controller('userDetailController',function($scope,$routeParams,$rootScope,$location){
  $scope.user_info = $rootScope.users[$routeParams.id];
  $scope.goback= function(){
    $location.path('/users');
  };
});


