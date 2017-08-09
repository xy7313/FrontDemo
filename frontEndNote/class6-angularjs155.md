1. timeout/interval
```
var app = angular.module('myapp',[]);
app.controller('mycntrl',function($scope,$interval,$timeout){
  $timeout(function(){
    alert('timeout');
    
  },3000);
});

```

2. promise in angular (neet to create a file called data.json)
```
var app = angular.module('myapp',[]);
app.controller('mycntrl',function($scope,$http){
  //return promise
  $http.get('data.json').then(function(data){
    console.log(data);
  },
  function(err){
    console.log();
  });
});
```

3. show the response of http request in table like last class:
```
var app = angular.module('myapp',[]);
app.controller('mycntrl',function($scope,$http){
  //return promise
  $http.get('data.json').then(function(resp){
    $scope.user_data = resp.data;
  },
  function(err){
    console.log();
  });
});
//html
<div ng-controller = "mycntrl">
    a table
    <table border = "1" cellpadding = "5" >
        <tr>
            <th>username</th>
            <th>place</th>
        </tr>
        <tr ng-repeat = "user in user_data">
            <td>{{user.username}}</td>
            <td>{{user.place}}</td>
        </tr>
    </table>
</div>
```

4. digest cycle ??
angular listen to all changes in the page, and update. if part of view changed, a digest cycle triggered. we can fire a digest cycle in a htmlElement.onclick function. 
```
var app = angular.module('myapp',[]);
app.controller('mycntrl',function($scope,$http){
  $scope.$watch('username',function(newVal,oldVal){
    console.log('new:'+newVal+',old:'+oldVal);
  });
});

//html:
 <div ng-controller = "mycntrl">
    <input type="text" ng-model="username" />
    <p ng-bind="username"></p>
    <p>{{username}}</p>
</div>
```

5. routing
    - include: `<script src = "https://code.angularjs.org/1.5.5/angular-route.min.js"></script>`

        ```
        // Code goes here,remember to create profile.html and users.html

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
            });
        });


        app.controller('userController',function($scope){
            $scope.users = [
            {"username":"xy1","place":"p1"},
                {"username":"xy2","place":"p2"},
                {"username":"xy3","place":"p3"},
                {"username":"xy4","place":"p4"},
                {"username":"xy5","place":"p5"}
            ];
        });

        //users.html
        <div ng-repeat="user in users track by $index">
            {{user.username+','+user.place}}
            <!--check index : right click view user, click inspect-->
            <a href="#/users/{{$index}}">view user</a> <br />
        </div>
        ```
6. The last example is routing continued     
```
// There might be some problem in these code

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
```