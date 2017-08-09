1. **new** keyword
```
function user(username,place){
  this.username = username;
  this.place = place;
  this.phone = "12321"
}

var user0 = user("xy","NJ");
var user1 = new user("xy","NJ");

document.write(user0);
//undifined
document.write(user1.place);
//NJ
```

2. proto: every object have an additional property proto. any object and any variable inherited from prototype
```
var username = "xy";
document.write(username.toUpperCase());

var userObj1 = {
  "place":'NJ',
};
Object.prototype.format_loc = function(){
  return 'location value';
};

var user2 = {};
document.write(userObj1.format_loc());
document.write(user2.format_loc());
```

3. using prototype to override the function
```
Array.prototype.duplicate = function(){
  return this.concat(this);
};
```

4. bind user to mainUser: chain prototype 

//parent class, child class
```
function mainUser(org_val,orgplace){
  this.org = org_val;
  this.org_place = orgplace;
}

mainUser.prototype.newProp = "New value";

function user(username,place){
  mainUser.call(this,"new org","ny");
  // or:  mainUser.apply(this,["new org","ny"]);
  this.username = username;
  this.place = place;
  this.phone = "12321"
}

//!!add one level
user.prototype = Object.create(mainUser.prototype);
user.prototype.constructor  = user;

var user1 = new user("xy","nj");

document.write(user1.org+','+user1.org_place);
//output:undefined, solution: add //mainUser.call(this); inside user
```

5. request handling: GET, storage: (inspection, application, local storage)
```
//new a data.html first
document.getElementById('1').onclick = function(){
  var http = new XMLHttpRequest();
  http.onreadystatechange = function(){
    localStorage.data_from_server = http.responseText;      
    console.log(http.responseText);
    document.getElementById('div').innerHTML = http.responseText;
  };
  http.open('GET','data.html');
  http.send();
};
```

6. jquery
```
jQuery()
$()
```

```
//event binding, like a trigger, as window.onload()
jQuery(document).ready(function(){
  jQuery('#h1_tag').html('new content');
  //only change the last <p>
  jQuery('p:last').html('new content');
  jQuery('p:nth(3)').html('new content');
  jQuery('p[id^="p_"]').css({"color":"red","background-color":"yello"});
  jQuery('p:contains("5th")').html('new content');
});
```

```
jQuery("#p_3").click(function(){
 jQuery(this).html('helloooo').css({'color':'yellow'});
});
```

```
jQuery(document).on({
  click:function(){
    jQuery(this).css({'background-color':'red'});
  },
  'mouseenter':function(){
    jQuery(this).css({'background-color':'green'});
  }
},'#p_5');
```
