
##Javascript 

#### 1. Object

1. Objects are containers for named value.
2. Object defination
    - Most simplest way: `var user = {“name”:xy", “age”:18};`
    - Using new keyword: `var user = new Object(); user.name = "xy";`
    - Using object constructor: `function user(name, age, phone) { this.name = name; ...} `, `var user1 = new user("xy"...);`
    - Notice here: If you try to call the user() without the new keyword. It returns *undefined*, because the user() is not returning anything, previously it was the new keywords which was returning you the object.
3. Objects are addressed by reference. See an example:`var user = {“name”: “Arun”, “age”:30}; var user1 = user;`  User1 is not a copy of user, it is the user itself, so any changes to user1 will reflect user.
4. Object Properties


#### 2. Object Properties
1. `var name = user.name;`
2. `var name = user[“name”]`
3. `for (key in user) { alert(key + “ ”+ user[key]); }`
4. `delete user.name;` //remove name property from user object
5.  functions as prop:
```
var user = { 
    “firstname” : “Arun”, 
    “lastname” : “gopan", 
    “fullname” : function () { 
        return this.firstname + “ “+this.lastname;
        } 
}  
user.fullname(); 
```

#### 3. Prototype
1. Every JavaScript function has a prototype property
2. Primarily for inheritance
3. Methods and properties added to function’s prototype property will be available to all instances of that function
4. An example: `var user = new Object();` user Inherit from the Object.prototype.
5. Adding new properties to existing prototype: `user.prototype.fullname = function() { return this.firstname + “,“+this.lastname};`

#### 4. Math
1. Math.min()/Math.max()
2. Math.round(4.5) //output:5, round to the nearest integer value
3. Math.ceil(); //round up
4. Math.floor() //round down

#### 5. Array
1. Arrays are also special type of objects, Arrays uses numbered indexes and object uses named indexes
2. arr.length
3. arr.push();
4. arr[arr.length]="aa";
5. arr.shift() //remove the first element of an array
6. arr.pop() //remove the last element of an array
7. delete arr[1];
8. arr.splice(2,1); //from index 2. remove 1 element
9. arr.splice(arr.indexOf("aElement"));

#### 6. String
1. Can use single / double quotes to enclose the string.
2. str.length
3. escape the string, eg: `var username = “arungopan\”gopakumar”;`
4. `str.indexOf("oneElement");`
5. `test_str.match(“Arun”) ` //Used to find an occurrence of a substring in a string.
6. Both indexOf and match are case sensitive
7. `str.toUpperCase(); /str.toLowerCase();`
8. `str.replace(new RegExp(',', 'g'), ''); `, `str.replace(‘username’, ‘Arun’);`
9. `str.substring(0,5);`

#### 7. Date
2. `var date_str = new Date();`//Created using new Date();
2. `date_str.getFullYear();` // return current year
3. `date_str.setFullYear(2010)` // set year
4. `date_str.getDay();` // return current day 
5. `data_str.setDate(10);`
6. `date_str.setDate(date_str.getDate() + 2);` //Adding 2 days to the current day
7. `date_str.setFullYear(date_str.getFullYear() + 2);` //Adding 2 years to the current year

#### 8. HTML DOM(document object model)
1. getElementById, document.getElementsByTagName, getElementsByClassName
2. Changing content: .innerHTML
3. Changing Attributes: .className
4. Changing Style: .style
5. Event binding: onclick
6. EventListeners: `document.getElementById("‘my_div’").addEventListener(“click”, test_fn);`, `removeEventListener(“click”, test_fn);`
7. `window.onload = function(){...}` make sure to load DOM element first
8. Popup boxes: alert, confirm box, prompt box


#### 3. promise
1. 
```
let promise = doSomething(); 
promise.then(successCallback, failureCallback);
//or
doSomething().then(successCallback failureCallback);
```
2. 
```
doSomething()
.then(result => doSomethingElse(result))
.then(newResult => doThirdThing(newResult))
.then(finalResult => {
  console.log(`Got the final result: ${finalResult}`);
})
.catch(failureCallback);
```

3. 
```
let myFirstPromise = new Promise((resolve, reject) => {
     setTimeout(function(){
    resolve("Success!"); // Yay! Everything went well!
  }, 250);
});
myFirstPromise.then((successMessage) => {
  console.log("Yay! " + successMessage);
}, failureCallback);
```