1. services
```
var app = angular.module('myapp',[]);

//inject this service as a dependency
app.service('custom', function(){
  this.firstname = "xy";
  this.lastname = "yang";
  this.display = function(){
    return this.firstname+','+lastname;
  };
  
});

app.controller('mycntrl',function($scope,custom,custom2){
  // $scope.resp = custom.display();
  $scope.resp = custom2.details();
});

app.factory('custom2',function(){
  return {
    "firstname":"xy",
    "org":"xyOrg",
    "details":function(){
      return "un="+this.firstname+",org="+this.org
    }
  };
});
//html:
<!DOCTYPE html>
<html>

   <head>
        <link rel="stylesheet" href="style.css">
        
        <script src = "https://code.angularjs.org/1.5.5/angular.min.js"></script>
        <script src = "https://code.angularjs.org/1.5.5/angular-route.min.js"></script>
        <script src="script.js"></script>
    </head>

    <body ng-app="myapp">
        <h1>Hello Plunker!</h1>
        
       <div ng-controller = "mycntrl">
         {{resp}}
       </div>
    </body>

</html>
```

2. provider, service are subset of provider
```
var app = angular.module('myapp',[]);

app.provider('custom',function(){
  this.$get=function(){
    return {
      "firstname":"xy",
      "org":"xyOrg",
      "details":function(){
        return "un="+this.firstname+",org="+this.org
      }
    }
  };
  //controller do not know the phone number, if we give phone here
  this.phone = "0000";
});

app.controller('mycntrl',function($scope,custom){
  // $scope.resp = custom.display();
  $scope.resp = custom.details();
});
```

3. provide, config
```
var app = angular.module('myapp',[]);

app.config(function(customProvider){
  customProvider.setPrefix('Mr.');
});

app.provider('custom',function(){
  this.$get=function(){
    var prefix = "";
    if(prefixVal)
      prefix = prefixVal;
    return {
      "firstname":"xy",
      "org":"xyOrg",
      "details":function(){
        return prefix+","+this.firstname;
      }
    }
  };
  var prefixVal = false;
  this.setPrefix = function(value){
    prefixVal = value
  };
});

app.controller('mycntrl',function($scope,custom){
  // $scope.resp = custom.display();
  $scope.resp = custom.details();
});
//output: Mr.,xy
```

4. event
```
var app = angular.module('myapp',[]);

//$on, listen the event
app.controller('mycntrl',function($scope){
  $scope.$on('custom',function(event,args){
    alert(args.username);
  });
});

//passing parameters to an event
app.controller('mycntrl2',function($scope){
  $scope.eventFn = function(){
    $scope.$emit('custom',{ "username":"xy", "org":"xyOrg",});
  };
});
//html:
 <body ng-app="myapp">
    <h1>Hello Plunker!</h1>     
    <div ng-controller = "mycntrl">
        {{resp}}
        
        <div ng-controller = "mycntrl2">
        <button type="submit" ng-click = "eventFn()">click</button>
        </div>
    </div>       
</body>
```

5. from child to parent using broadcast
```
var app = angular.module('myapp',[]);

app.controller('mycntrl2',function($scope){
  $scope.$on('custom',function(event,args){
    alert(args.username);
  });
});

//from child to parent using broadcast
app.controller('mycntrl',function($scope){
  $scope.eventFn = function(){
    $scope.$broadcast('custom',{ "username":"xy", "org":"xyOrg",});
  };
});
//html:
<body ng-app="myapp">
    <h1>Hello Plunker!</h1>
        
    <div ng-controller = "mycntrl">
        {{resp}}
        <button type="submit" ng-click = "eventFn()">click</button>
        <div ng-controller = "mycntrl2">
        </div>
    </div>
    
</body>
```

6. custom directive, a lot of global scope and local scope, too sleepy to catch up with arun
```
var app = angular.module('myapp',[]);

//create custom directives
app.directive('customDirective',function(){
  return {
    templateUrl:"template.html",
    restrict:"EAC",
    //true. only change one customDirective, without this scope prop, all customDirectives changed
    scope:true
    //tell parent scope, you can use this prop. text binding, so that this directive can operate the controller, change fname...in template.html
    // scope:{
    // fname:'@',
    // lname:'=';
    // fn:'&'
    //},
    //write custom logic about what you wang to execute or not.
    link: function(scope,elem,attrs){

    }
  };
});

app.controller('mycntrl',function($scope){
  $scope.firstname = "xy",
  $scope.lastname = "yang",
  $scope.display = function(){
    alert('he');
  };
});
//html:
<body ng-app="myapp">
    <h1>Hello Plunker!</h1>
    
    <div ng-controller = "mycntrl">
    <!--1. -->
    <custom-directive></custom-directive>
    <!--2. -->
    <div custom-directive = "">
        
    </div>
    <!--3-->
    <div class = "custom-directive"></div>
    </div>
    
</body>
//template.html
<input type="text" ng-model="firstname" /><br/ >
<input type="text" ng-model = "lastname" /><br/ >
<input type="button" value="clickbtn" ng-click="display()" /><br/ >
```