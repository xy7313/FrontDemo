#### Qs
1. promise 

#### notes
18. 
```
var fn = function(){
  setTimeout(function(){
    return 'called';
  },3000);
};

var resp = fn();

document.write(resp);
//output: undefined
```

```
var fn = function(){
  var promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        //resolve('called');
        reject('err');
        
      },3000);
  });
  return promise;
};

var resp = fn();

document.write(resp);

resp.then(function(data){
  document.write(data);
},
function(err){
  document.write(err);
});
```

19. clousure: inner function can access outer function variable.
```
//before:
var fn = function(){
  var cntr = 0;
  var inc = function(){
    cntr++;
    return cntr;
  };
  return inc();
};

var resp = fn();

document.write(fn()+'<br/ >');
document.write(fn()+'<br/ >');
document.write(fn()+'<br/ >');
output:1,1,1
```

```
//after
var fn = function(){
  var cntr = 0;
  var inc = function(){
    cntr++;
    return cntr;
  };
  return inc;
};

var resp = fn();

document.write(resp()+'<br/ >');
document.write(resp()+'<br/ >');
document.write(resp()+'<br/ >');
//output: 1,2,3
```

```
//return more than one func
var fn = function(){
  var cntr = 0;
  
  var inc = function(){
    cntr++;
    return cntr;
  };
  
  var reset = function(){
    return cntr=0;
  };
  
  return {
    'inc':inc,
    'reset':reset
  };
};

var resp = fn();
document.write(resp.inc()+'<br/ >');
document.write(resp.inc()+'<br/ >');
document.write(resp.inc()+'<br/ >');
```

20. js operate html
```
//js manipulate dom, js should load after html, at the buttom of html
//or use this onload function in the top of js file to make sure the js code is executed

window.onload = function(){
  var elem = document.getElementById('div');
  elem.innerHTML = 'div3';
  
  var elems = document.getElementsByTagName('div');
  elems[0].innerHTML = 'div1';
  
  //retrieve custom attribute using query selector
  var elem4 = document.querySelector('div[username="4"]');
  elem4.innerHTML = '4~';
}
```

21. js event handling
```
window.onload = function(){
  document.getElementById('btn').onclick = function(){
    alert('hi');
  };
}
```

```
//change div content using input text
window.onload = function(){
  document.getElementById('btn').onclick = function(){
    alert('hi');
    var content = document.getElementById("txtbx").value;
    document.getElementById('div').innerHTML = content;
  };
};
```

```
window.onload = function(){
  document.getElementById('btn').onclick = function(){
   var newContent = '<h2>hi</h2>';
   //beforebegin
   //afterbegin
   //beforeend end of the element content
   //afterend
  document.getElementById('div').insertAdjacentHTML('beforeend',newContent);
  };
};
```

22. event listener
```
//two kinds: element listener, event listener
window.onload = function(){
  document.getElementById('btn').addEventListener('click',function(){
    alert('hi');
  });
};
```

```
window.onload = function(){
  function eventFn(){
    alert('hi');
  }
  document.getElementById('btn').addEventListener('click',eventFn);
  document.getElementById('btn2').addEventListener('click',function(){
    document.getElementById('btn').removeEventListener('click',eventFn);
  });
};
//click: alert, remove->click: no alert
```

#### practice - shift input to output box and keep the order
- v1
```
window.onload = function(){
  var input = document.getElementById('input');
  var output = document.getElementById('output');
  var interval = 1000;
  
  console.log(input.value);
  var ori = input.value;

  
  var decrease = function(cntr){
    var inc = function(){
      cntr--;
      return cntr;
    };
    var reset = function(){
      return cntr= ori.length;
    };
    return {
      'inc':inc,
      'reset':reset
    };
  };
  var de = decrease(ori.length);
  
  
  var increase = function(cntr){
    var inc = function(){
      cntr++;
      return cntr;
    };
    var reset = function(){
      return cntr= 0;
    };
    return {
      'inc':inc,
      'reset':reset
    };
  };
  var incre = increase(0);
  
  
  document.getElementById('btn1').onclick = function(){
    var interval_var = setInterval(function(){
      var now = de.inc();
      input.value = ori.substring(0,now);
      output.value = ori.substring(now,ori.length);
    },interval);

    setTimeout(function(){
      clearInterval(interval_var);
    },interval*ori.length);
  };
  
  
  document.getElementById('btn2').onclick = function(){
    
  };
  
  
  document.getElementById('btn3').onclick = function(){
    var interval_var = setInterval(function(){
      var now = incre.inc();
      input.value = ori.substring(0,now);
      output.value = ori.substring(now,ori.length);
    },interval);

    setTimeout(function(){
      clearInterval(interval_var);
    },interval*ori.length);
  };


};

```

- v2
```
//shift input to output box and keep the order

window.onload = function(){
  
  var INTERVAL = 1000;
  
  document.getElementById('btn1').onclick = function(){
    var input = document.getElementById('input');
    var output = document.getElementById('output');
    var ori = input.value;
    var decrease = function(cntr){
      var inc = function(){
        cntr--;
        return cntr;
      };
      return inc;
    };
    var de = decrease(ori.length);
  
    var interval_var = setInterval(function(){
      var now = de();
      input.value = ori.substring(0,now);
      output.value = ori.substring(now,ori.length);
    },INTERVAL);

    setTimeout(function(){
      clearInterval(interval_var);
    },INTERVAL*ori.length);
  };
  
  
  document.getElementById('btn2').onclick = function(){
    
  };
  
  
  document.getElementById('btn3').onclick = function(){
    var input = document.getElementById('input');
    var output = document.getElementById('output');
    var ori = output.value;
    var increase = function(cntr){
      var inc = function(){
        cntr++;
        return cntr;
      };
      return inc;
    };
    var incre = increase(0);
  
    var interval_var = setInterval(function(){
      var now = incre();
      input.value = ori.substring(0,now);
      output.value = ori.substring(now,ori.length);
    },INTERVAL);

    setTimeout(function(){
      clearInterval(interval_var);
    },INTERVAL*ori.length);
  };

};
```

- v3
```
//shift input to output box and keep the order

window.onload = function(){
  
  var INTERVAL = 1000;
  var paused ;
  var interval_var;
  var de;
  var incre;
  var leftc;
  var timer;
  var inputText;
  var outputText;
  var remain;
  
  document.paused = false;
  document.leftc= true;
  
   function Timer(callback, delay) {
        var timerId, start, remaining = delay;
        this.pause = function() {
            window.clearTimeout(timerId);
            remaining -= new Date() - start;
            return remaining;
        };
        this.resume = function() {
            start = new Date();
            window.clearTimeout(timerId);
            timerId = window.setTimeout(callback, remaining);
        };
        this.resume();
    }
    
  document.getElementById('btn1').onclick = function(){
    var input = document.getElementById('input');
    var output = document.getElementById('output');
    document.inputText = input.value;
    var decrease = function(cntr){
      var inc = function(){
        cntr--;
        return cntr;
      };
      return inc;
    };
    document.de = decrease(document.inputText.length);
  
    document.interval_var = setInterval(function(){
      var now = document.de();
      input.value = document.inputText.substring(0,now);
      output.value = document.inputText.substring(now,document.inputText.length);
    },INTERVAL);

    document.timer = new Timer(function(){
      clearInterval(document.interval_var);
      document.leftc=false;
    },INTERVAL*(document.inputText.length+1));
  };
  
  document.getElementById('btn2').onclick = function(){
    if(document.paused){
      document.timer.resume();
      document.interval_var = setInterval(function(){
        if(!document.leftc && document.remain>=0){
          console.log( document.remain>0);
          var now = document.incre();
          input.value = document.outputText.substring(0,now);
          output.value = document.outputText.substring(now,document.outputText.length);
          if(document.remain<=0){
            document.leftc=false;
          }
        }else if(document.leftc && document.remain>=0){
          var now = document.de();
          input.value = document.inputText.substring(0,now);
          output.value = document.inputText.substring(now,document.inputText.length);
          if(document.remain<=0){
            document.leftc=true;
          }
        }
      },INTERVAL);
      document.paused = false;
    } else{
      document.remain = document.timer.pause();
      clearInterval(document.interval_var);
      console.log(document.remain);
      document.paused = true;
    }
  };

  
  document.getElementById('btn3').onclick = function(){
    var input = document.getElementById('input');
    var output = document.getElementById('output');
    document.outputText = output.value;
    var increase = function(cntr){
      var inc = function(){
        cntr++;
        return cntr;
      };
      return inc;
    };
    document.incre = increase(0);
  
   document.interval_var = setInterval(function(){
      var now = document.incre();
      input.value = document.outputText.substring(0,now);
      output.value = document.outputText.substring(now,document.outputText.length);
    },INTERVAL);

    document.timer = new Timer(function(){
      clearInterval(document.interval_var);
      document.leftc=true;
    },INTERVAL*(document.outputText.length+1));
  };

};
```

- html:
```
<body>
    <h1>Hello Plunker!</h1>
    <div id = "div">
      shift
    </div>
    <br/> 
    <input type="text" id = "input" value = "default"/>
    <input type="text" id = "output"/><br/>
    <input type="button"  id="btn1" value=">>" />
    <input type="button"  id="btn2" value="||" />
    <input type="button"  id="btn3" value="<<" /> 
  </body>
```

#### another assignment
var str = "fffffaabbbbccccuuuuu"
return [u,f,c,b,a];