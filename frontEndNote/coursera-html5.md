[course link](https://www.coursera.org/learn/html-css-javascript-for-web-developers/home/welcome)
算是入门笔记，每周更
H5
1.  大概念
HTML structure
CSS style
js behavior

1. WEEK1 HTML
annotates content
defines document structure

3core web technologies:HTML CSS JS

WHATWG和W3C一起出的H5

##HTML
1. element name
<opening tag>content </closing tag>
2. only have opening tag: `<\br>,<hr>`
3. attribute name id = "dd" attribute value
4. value in quote, quote should be closed correctly
5. semantic change 不能自己close自己了,<p/> ----> <p></p>
6. browser render html sequentially(top-bottom)
7. H5 seven models
8. traditional models: block-level element(div): render to begin on new line by default; may contain inline or other block-level element/inline element(span): render on the same line; only contain other inline elements
9. headings 和div+css实现可以看到一样的效果但是作用不一样，seo会依据h1这些tag执行搜索什么的，H1 you should always have it there
10. 有语义的element比如`<h1>`比div这种有更大意义和功能
11. list ul/ol (unorder list/order list) list for navigation 
12. avoid rendering issues:
</>/&/
</>/&amp 如果想使用<>&要输入这些来防止当做html标记解析,
copyright shows the copyright symbol
/nbsp:(想把几个短语放在一起letcure7里讲到, 把这几个字符跟在一个单词后面，单词后面的空格就不能换行)
13.  href  relative links <\a> 是block-level也是inline flow content, H5: a标签可以surround在<div>外面了，点击整个区域都可以跳转
14. target = _bland new tab/new window
15. fragment identifier
href = "#sections" 跳转到当前页的某处（jump to different parts of the same page），sections是某标签的id attribute的value 
`<h1 id = "top">`可以直接跳转到top
SPA single page application
16. image <!--     --> inline element 写上宽高，方便浏览器预留空间，chrome developer tools，network no throttling里可以调别的，就是模拟网速慢的时候


##Week2 CSS
box model css layout
1. an interesting website:  cssszengarden/219
2. user experience of content matters
3. anatomy of a css rule
```
selector {
  property:value;
//declaration
}
p {
color:blue;
font-size:20px;
}
```
4. selector: specifying the element name
class `className{}`
//pound sign, only can use once
id`#idName{}`
html element
we can group selector, separate selector with comma
`div,.class1{}`
这些selector都有后面大括号里的属性
5. combining selector
  1. `p.big{}`(element with class selector)
every p that has class = "big", no space!
  2. `article > p`(direct child selector)
every p that is a **direct** child of article
  3. `article p`(descendent selector)
every p that is inside(at any level) of article
  4. `.class1.class2`（这里也是no space？）
select the element, who both have these two class
6. pseudo-class
```
selector: pseudo-class
:link
:visited
:hover
:active
:nth-child
//link can applied another style
a:link, a:visited{
display:block;
}
a:hover, a:active{
}
header li:nth-child(3){
}
section div:nth-child(odd){
}
section div:nth-child(4):hover{
}
```
7. resolve conflict
  1. simple rule: last declaration wins, (top to bottom, which the bottom declaration wins, external<internal declaration.)
  2. even simple rule: declarations merge(different properties, merge to one)
8. specificity
inner element style>id>classname>numbers of element
```
header.navigation p{}>p.blurb{}
<header class = "navigation">
<p class = "blurb">
```
9. styling text
font-size:2em; twice as large as the font-size before 增长到当前的两倍
一种相对大小的设置，建议设置成绝对的，keep things consistant.
10. box model(important concept)
padding border margin
box-sizing:border-box 才表示整体，不然的话设置的宽高只是说content box,
注意！ 不可以直接放在body里，因为not inherit 不继承，需要再加一个star class：*（universal selector）
```
*{
//修改默认设置需要写在*里
//star means select every element
box-sizing:border-box ;
}
```
11. margin 左右的是相加，上下的是取大的（重叠）
12. 如果文档溢出了：overflow:scroll 加滚动条等方法
13. background: url() no-repeat right center；有很多属性的时候空格分隔就可以
14. float, browser moves the float element out of regular document flow流式布局
15. floats do not have vertical margin collapse
16. position absolute 是对最近的非静态的父级组件说的
absolute positioning is relative to closest ancestor which has positioning set to non-static value
17. @media设备的 (,=or) : basic/large/medium
do not overlap breakpoints
18. responsive design
19. bootstrap col-md-如果挪到手机，会保持原样，因为手机会按一个40%的比例缩放浏览器的东西，如果想按手机真实大小，需要在meta中加入一些viewpoint 描述：initial scale = 1，这样是多少px就是多少了
20. Bootstrap : framwork for developing responsive mobile first projects on the web
21. Grid of bootstrap
```
container
row// creat horizontal group of columns
col-md-4//
```

##Week 3 REAL WEBSITE
1. Make sure what you are supposed to du with yout client.
2. Starting to build a website, design the mock up first not codeing right now
4. 通过之前安装的browser-sync查看网站，端口是3000，安装：`npm install -g browser-sync`
3. http://localhost:3001/，查看browser-sync的设置
进入放网站的文件夹，执行` browser-sync start --server --directory "*"`
>browser sync 配合ngrok可以把本地网页发给别人看，首先去网站目录下打开browser sync，再开一个终端窗口，去ngrok目录下（/Applications）执行./ngrok http 3000
5. 引入字体的时候要加入一个google font的链接，css中也需要加一句
6. 剩下笔记都记在代码里了，估计就不po了。。。

---
因为midterm停课了一周还是两周。。。

##Week 4 Javascript
1. terminal command: sublime *
open all file under the current directory using sublime
2. Javascript: single thread and execute line by line
3. definitions: var, no type
4. function funcname() {
}
you define a function with a function name is very similar that you define a variable and its value is a function
5. var variable = function (){}
no name need, refer the function as a.
the value of the function is assigned to  variable not the return value(意思是用a的时候等于调用该function而不是用这个函数的返回值吧)
6. normal function ： function a () {}
function invokation/function execution : a();
invocation 
7. can defined arguments, argument is optional, no argument is legal for the function who needs arguments
8. global: available everywhere
aka lexical: depend on where it is physically defined. only within this function, no local scope, func can be in a fun and can use the outer function's argument
9. execute context:
function invocation creates a new execute context
its own variable environment
special this object
reference to its outer environment
9. scope chain works: find var level by level out
11. example shows
function is physically defined not where called
12. built-in type of JavaScript
13. object is a collection of name/value pairs
14. primitive type represents a single or a immutable value
single value  not an object
immutable =constant,read -only
15. all primitive:
boolean: true/false
undefined: signifies that no value has ever been set
null: the lack of value, lack of definition 
number: only numeric type in js
(no integer type)
string: ""/''
symbol: new to ES6
16. if (x==undefined) 如果x是undefined，要判断这种请款高就直接这么写
17. undefined, has been declared but no value has been placed at the memory place
not defined, has not been declared.
18. string concatenation
var string = "hello";
string +="world";
19. math operators
undefined/5 
output: NaN(not a number)
20. equality
type coercion
x="4"equal to y=4
21. strict equality
=== type and value both equal
22. all false: false, null, "", 0, NaN, undefined
all true: true, "anystring", 1, -1
boolean();可以判断传进去的东西是t还是f
23. curly brace{}
24. return 后面会自动补齐分号（跟go一样），所以不要在return哪里为了好看重起一行写大括号就可以了
25. for的变量是全局的，（跟我之前看到只有function有local scope的时候理解的一样，不过go和java都是以大括号为作用域，所以两个for都用i没问题，js不行）
26. if we do not set a value when we output it, the out put will be : (default value- )undefined
so we should set a default value:
sideDish = sideDish||"whatever!"
the whatever here is the default value.
27. 或，与运算 运算结果是true的那部分，
false||"hello" 
或运算，一个true，输出true的部分："hello" 
"hello"||"world" 
或运算，两个true，输出第一个true：“hello”
""||false
或运算， 都是false，输出后一个: false
"hello"&&"world" 
与运算， 都是true，输出后一个: "world"
""&&false 
与运算，都false，输出前一项:""
"world"&& false 
与运算，一个false， 输出false项:false
28. object
var company = new Object();
company.name = "fb";
company.ceo.firstname = "hh"; 会报错，因为firstname前面必须是一个已经穿件了的object
在这句前加上company.ceo = new Object();
company["name"]=company.name
company.$stock = 110;
company["stock of  company"] = 110;
属性名可以加空格了

29.  simplier way to create object
```
var facebook = {
  name:"facebook",
  ceo:{
    firstname:"mark",
  }，
  $stock:110
// "stock of it":110也可以，如果想用这种字符串来当做属性名的话
};
```
大括号前最后一项可以不要comma
(王老师补充：js是面向原型的proto，不是object)
30. functions in js are objects
functionName.version ="v1.0"
console.log(functionName) 会输出整个function的代码。。。
31. lecture 46有个变态例子
```
// Functions are First-Class Data Types
// Functions ARE objects
function multiply(x, y) {
    return x * y;
}
multiply.version = "v.1.0.0";
console.log(multiply.version);
// Function factory
function makeMultiplier(multiplier) {
  var myFunc = function (x) {
    return multiplier * x;
  };
  return myFunc;
}
var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));
// Passing functions as arguments
function doOperationOn(x, operation) {
  return operation(x);
}
var result = doOperationOn(5, multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);
```
32. b=a copying or passing 改变新值不影响原值
primitives passed by value ,objects are passed by reference 
33. this
function constructors命名可以大写来表示该function是个constructor
Circle.prototype.getArea=
要放在全局，不要放在里面，放在里面会做重复工作
34. var v = {//=new objectName();
}
invoke function==call function
注意this指代，如果上面的var里又一个函数里有this，可能会指到Window，可以创建self，新变量或者用箭头函数->
35. closures


##Week 4 Javascript
1. DOM 
document object model
2. script在页首的时候会有获取不到html元素的问题，解决方法第一是加一个监听listen for the page: window.onload
第二个方法是吧script放在页尾
console.log(document instanceof HTMLDocument); 
//output true
3. .value only for input element, `.textContent `, 给一个div加一些value，内容，但都是text
`.innerHTML = message;`如果message离含有html元素，比如`<h2>`可以被当成html元素解析出来
4. document.querySelector("#title")
document.querySelector("h1")像CSS里的选择器一样
5. onblur 挡圈元素失去焦点的时候执行方法‘
6. document.querySelector("button").addEvehnListener("click",function)
document.querySelector("button").onclick = function(){
}
this.textContene = "new text";把某元素上原本的文本内容改变成新的
7. document.addEvehnListener（"DOMContentLoader"，function/event handler）这个方法会在css等之前调用，如果在js文件中加入了方法放在这个中，就不需要在html文件中添加引用了
8. URN: Uniform Resourve Name
URI： uniform resource identifier--indentifies resource or location of resure
URL: locater
9. 讲了get和post请求，很基础，总的来说就是get请求，请求内容在url或uri中，post请求在body中
10. Asynchronous, after reveive the instruction, it is ready to receive the next instruction. Execuate more than one instruction at a time by execuated in different process.
The actua execution is done in a separate thread or process
11. 在browser中，除了js engine之外还有很多，其中js engine是synchronize的，但http requesteor 就是asynchronous的
12. ajax用一个特殊object 去找http requestor，还传递过去了js中对应handler的地址用以处理返回的内容 
13. js中的selector
14. ajax：一个生产load gif的网站www.ajaxload.info
15. 餐厅网站后台数据：herokuapp.com，ruby写的

16. CORS:Cross-Origin resource sharing

17. developer-tool -> network ->刷新， 左边会有.json文件点击，右侧的preview会用json的pretty形式显示
（最后ajax部分有点懈怠了，也有别的考试要忙，没有仔细看，课程附的代码里有很详细的例子，有空看差不多lecture62的样子，大概）

##English learning 
1. in no time
2. scaffoding
3. drastic
4. bump up
5. verbosity
6. mitegate
7. bolated
8. minified
9. barebone
10. enpower
11. I will be more than happy to do ...
12. revise
13. budding 初露头角
14. hefty
15. designate
16. field trip
17. kosher
18. rewind
19. adjust to your own pace
20. strech
21. pint--quart
22. hefty
23. semicolon 分号
24. stepping stone