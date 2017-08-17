1.  Include angularjs `<script src = "https://code.angularjs.org/1.5.5/angular.min.js"></script>`
2.  `<body ng-app="">`
3. the content typed in input box will show in p tags
    ```
    <head>
        <link rel="stylesheet" href="style.css">
        <script src = "https://code.angularjs.org/1.5.5/angular.min.js"></script>
        <script src="script.js"></script>
    </head>

    <body ng-app="myapp">
        <h1>Hello Plunker!</h1>
        <input type="text" ng-model="username" />
        <p ng-bind="username"></p>
        <p>{{username}}</p>
    </body>
    ```
4. Controller
    - can have multiple controllers:
        ```
        <div ng-controller = "mycntrl">
        </div>
        <div ng-controller = "mycntrl2">
        </div>
        ```
5. Filter
```
//create a module, parameters: application name, requierements
var app = angular.module('myapp',[]);

//create controller, inject dependency
app.controller('mycntrl',function($scope){
$scope.org = "xyOrg";
$scope.a_users = [
    {"username":"xy1","place":"p1"},
    {"username":"xy2","place":"p2"},
    {"username":"xy3","place":"p3"},
    {"username":"xy4","place":"p4"},
    {"username":"xy5","place":"p5"},
    ];
});
//html-with a search table/add filter using '|' (bar)
<body ng-app="myapp">
    <div ng-controller = "mycntrl">
        {{org}}
        <div ng-repeat = "user in a_users">
            {{'Username = '+user.username+',place='+user.place}}
        </div>
        <table border = "1" cellpadding = "5" >
            <tr>
                <th>username</th>
                <th>place</th>
            </tr>
            <tr ng-repeat = "user in a_users | filter:filterBy">
                <td>{{user.username}}</td>
                <td>{{user.place}}</td>
            </tr>
            <tr>
                <td colspan = "2"><input type="text" ng-model = "filterBy.$" /></td>
            </tr>
            <tr>
                <td ><input type="text" ng-model = "filterBy.username" /></td>
                <td ><input type="text" ng-model = "filterBy.place" /></td>
            </tr>
        </table>
    </div>
</body>
```

6. get value and show it on p tag
```
var app = angular.module('myapp',[]);

app.controller('mycntrl',function($scope){
  $scope.org = "xyOrg";
    //get the event object
  $scope.selSport = function($event){
    $scope.fav_sport = $event.target.value;
  };
});
//html
 <div ng-controller = "mycntrl">
    {{org}}  
    <br/>
    <input type="radio" name = "sport" ng-click="selSport($event)" value = "tennis"/> tennis<br/>
    <input type="radio" name = "sport" ng-click="selSport($event)" value = "cricket"/> cricket<br/>
    <input type="radio" name = "sport" ng-click="selSport($event)" value = "baseball"/> baseball<br/>
    <input type="radio" name = "sport" ng-click="selSport($event)" value = "hockey"/> hockey<br/>

    <p>my fav sport: {{fav_sport}}</p>
</div>
```

7. share data between controllers, using rootscope
```
var app = angular.module('myapp',[]);

app.controller('mycntrl',function($scope,$rootScope){
  $scope.org = "xyOrg";
    //get the event object
  $scope.selSport = function($event){
    $scope.fav_sport = $event.target.value;
    $rootScope.fav_sport = $event.target.value;
  };
});

//share data between controllers, using rootscope
app.controller('mycntrl2',function($scope,$rootScope){
  
});
//html:
 <!--eg2-->
    <div ng-controller = "mycntrl">
      {{org}}
      
      
      <br/>
      <input type="radio" name = "sport" ng-click="selSport($event)" value = "tennis"/> tennis<br/>
      <input type="radio" name = "sport" ng-click="selSport($event)" value = "cricket"/> cricket<br/>
      <input type="radio" name = "sport" ng-click="selSport($event)" value = "baseball"/> baseball<br/>
      <input type="radio" name = "sport" ng-click="selSport($event)" value = "hockey"/> hockey<br/>

      <p>my fav sport: {{fav_sport}}</p>
    </div>
    
    <div ng-controller = "mycntrl2">
      <p>my fav sport: {{fav_sport}}</p>
    </div> 
```

8. custom filter
```
var app = angular.module('myapp',[]);

app.controller('mycntrl',function($scope,$rootScope){
  $scope.username = "xyorg";
});

app.filter('customFilter',function(){
  return function(value){
    return value.toUpperCase();
  };
});
//html
 <div ng-controller = "mycntrl">
    {{username | customFilter}}
</div>
```