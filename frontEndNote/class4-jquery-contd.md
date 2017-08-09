1. append before and end div(using box to see)
```
var content = '<h3> new h3 </h3>';
jQuery('#div').append(content);
jQuery('#div').prepend(content);
jQuery('#div').before(content);
jQuery('#div').end(content);

jQuery('#div').click(function(){
  jQuery(this).after(content);
});
```

2. children and parents
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
    <link rel="stylesheet" href="style.css" />
    <script data-require="jquery@*" data-semver="3.1.1" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <style type="text/css" >
      div {
        border:1px solid black;
        padding: 10px;
      }
    </style>
  </head>

  <body>
    <h1>Basic plunk!</h1>
    <div id = "div1">
      1.hello div~
       <div >
         2. hello div~
        <div>
            3. hello div~
            <p id = "para">page</p>
        </div>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>

```
```
//js at the bottom of body
jQuery('#para').click(function(){
  jQuery(this).parent().css({'border':'1px solid red'});
});

jQuery('#para').click(function(){
  jQuery(this).parentsUntil('#div1').css({'border':'1px solid red'});
});

jQuery('#div1').click(function(){
  jQuery(this).children().css({'border':'1px solid red'});
});

jQuery('#div1').click(function(){
  jQuery(this).find('p').css({'border':'1px solid red'});
});
```

3. sibling, prev, next
```
jQuery('#div').click(function(){
  jQuery(this).prev().css({'border':'1px solid green'});
});

// jQuery(this).prevA().
// jQuery(this).siblings().
//jQuery(this).nextAll().
```

4. fade, hide
```
jQuery('#div').click(function(){
  jQuery(this).hide();
});

jQuery('#btn').click(function(){
  // jQuery('div').slideToggle();
  jQuery('div').fadeToggle();
});
//html:
 <div id = "div">
    test
</div>
<br/>
<input type="button"  id="btn" value="click" />
```

5. Event handling: stop Propagation, so that para show para, not it's parent div
```
jQuery('#para2').click(function(e){
  e.stopPropagation();
  alert("para");
});

jQuery('#div').click(function(e){
  alert("div");
});

//html:
<div id = "div">
    <p id = "para2">another page</p> <br/>
    test   
</div>
```

6.  e.preventDefault(); when we want to click a link, we can prevent the default action

7. ajax in jQuery to handle request
```
//not complete code
jQuery('#btn').click(function(){
  jQuery.ajax({
    'type':'GET',
    'url':'www.google.com',
    'data':{'username':'xy'},
    'success': function(data){
      jQuery('').html(data);
    },
    'error':function(){
      alert('wrong');
    }
  });
});
```