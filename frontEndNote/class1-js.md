1. responsive page layout: bootstrap, google+?
2. html5: specify the doc type, html become html5. Put this on the top of html file`<!DOCTYPE html>`
3. **input element** can have many attributions:
    1. type, includes: date, email, password etc and text by default
    4. id of tag, unique identifier
    5. value of tag, 
    6. name of tag
    7. title of a tay
    8. any custom attributions like location, organization
4. cookie: all browser information in client side
5. local storage and session storage. session-temp； local-permanent
6. css file reference should be on the top of page, javascript can be at bottom. better user experience, may need more loading time,
7. dynamic page, we need js
8. loosely-typed language: assign data type automatically
9. typeof varname : we get the type of varname
10. array.push('99'); //add the element at the end of the array
11. array.pop(); //remove the last element
12. array.shift(); //remove the first element
13. array.splice(2,1); //remove a particular element, eg: from index 2, remove 1 element
14. array.indexOf(2); // find the index of given element value
15. create object: 
```
var userObj = {
    "username":"xy";
    "place":"nj";
};
userObj.addr = "India";
for(key in userObj){
    //output
    document.write(userObj[key]);
}
document.write(userObj.place);
```
16. create function
```
function display(username="xy", place="nj"){
    return username+','+place;
}
document.write(display());
document.write(display("xy1","ny"));
```

```
//anonymous function
function(){
    return 'anonymous function';
}
```

```
var fn = function(){
    return 'anonymous function';
}
document.write(fn());
//output anonymous function
document.write(fn);
//output all function body

//anonymous function Can be passed as parameter to another function
function display(fnName){
    return fnName;
}
document.write(display(fn()));
//output anonymous function
```

```
//Self invoking function
(fn = function(){
    return 'anonymous function';
})();
```

```
function user(){
  return {
     "username":"xy",
    "place":"nj",
  };
}
document.write(user().place);
```

17. timeout, interval
```
setTimeout(function(){
  document.write('hello');
},1000);
```

```
setInterval(function(){
  document.write('hello');
},1000);
```

```
var interval_var = setInterval(function(){
  document.write('hello');
},1000);

setTimeout(function(){
  clearInterval(interval_var);
},5000);
```

