# 理论

javascript:是主要用来完成客户端的页面交互	
html css:只能完成静态页面

交互效果：
	客户端交互：不需要通过网络，本地也能完成
	服务器交互：需要依赖网络实现数据传输

javascript的组成
	语法：书写代码的规则和方式
	DOM：提供访问和操作网页内容的方法和接口
	 BOM：提供了与浏览器交互的方法和接口

程序运行的时候会出现两种错误
	语法错误，编译错误
	程序错误：只有在程序运行时才会发现

```js
<script>代码写在这里</script>
<script src="地址"></script> 	<!-- 引入js文件 -->
```

# 语法

> 语法：书写代码的规则和方式

## 变量

变量：在内存中开辟一段存储数据的空间
内存：在系统中临时存储数据的设备
硬盘：在系统中永久存储数据的设备

var 关键字：有标色，有功能，且由官方命名的符号,在内存中开辟空间
num 标识符：由开发时临时取的标识符
js的分号";"可以省略不写，但是建议养成良好的习惯

```js
var num;
num = 12; //= 赋值号：把符号右侧的数据放入到左侧变量中
```

#### 变量的声明方式

```js
//1 先声明后赋值
//2 声明同时赋值
var num1 = 12;
//3 一次声明多个变量且赋值
var num2, num3, num4 = 15; //只有num4有值

//局部变量:声明变量的大括号中有效	全局变量:全部有效
var	全局变量声明
let	局部变量声明
const	常量声明
```

#### 数据类型

> 变量的两种特性：数据值、数据类型

六大数据类型

- number	数字类型
- string    字符串类型
- undefined    未定义
- null    空类型
- boolean    判断类型
- object    对象类型

js的特殊值

- undefined
- null
- NaN    无法用数字表示的number类型

## 基础语法

#### 运算符

```js
= 赋值
== 只比数据值
=== 比较数值和类型
!= 只比较值是否不相等
!== 比较值和类型是否有一个不相等
|| 或者
&& 与
条件?true:false	三目运算
```

#### 数组

```js
//第一种定义方法
let arrr = new Array();
arr[0] = 98;
arr[1] == 97;
//第二种定义方法
let arr2 = [];
let arr3 = [98,97,96];
```

#### Set

> set中的每个元素都是唯一的

```js
//创建空集合
let mySet = new Set();
//使用数组初始化集合
let anotherSet = new Set([1,2,3,3,4]);//其中重复的值会被去除
```

#### 分支结构

if分支

```js
if(条件){
    执行体
}else if(条件){
    执行体
}else{
    执行体
}
```

switch分支

```js
switch(a){
    case '符合a的值':
        执行体
        break;
    case '符合a的值':
        执行体
        break;
        ...
    default:
    	全部case都不符合最后执行此
}
```

#### 循环结构

> break;	终止循环
> continue;	跳过此次循环执行下一次循环
>
> 冒泡排序口诀：外层循环N-1，内层循环N - i - 1

**while循环**

```js
while(循环条件){
    循环体
    //a++
}
```

**for循环**

嵌套循环从内往外执行

```js
for(表达式1;表达式2;表达式3){循环体结构}                          
//循环算法（将一段代码执行指定的次数）
//		表达式1:一般作为循环变量赋初始值
//		表达式2:循环继续的条件,即能判断真假的条件,一般作为关系表达式
//		表达式3:用于循环变量的改变,可做加减法
```

**foreach循环**

```js
Array.forEach(function(value,index,array){
    //value:当前元素
    //index:当前元素的索引，可省略
    //array:输出原数组，可省略
})
//或者也可以直接用箭头函数
Array.forEach((value,index,array)=>{
    
})
```

#### 函数

> 使用函数：函数名(实参);
> 	实参多于形参,多余的实参无用;
> 	形参多于实参,多余的形参显示未定义(undefined).
>
> 函数的参数没有限制,但是返回只能有一个

函数的声明

```js
function 函数名(形参){
    函数体
    return 返回值;
}
```

匿名函数

```js
var 函数名 = function(形参){
    函数体
    return 返回值;
}
```

箭头函数

> 注意：箭头函数中不能使用this，因为箭头函数有一个自己的this

```js
//没有参数的时候一定要写一个()，只有一个参数可以没有括号，两个参数要用括号括起来
var 函数名 = () =>{
    函数体
}
```

#### 类和对象

> 类是具有相同的属性和方法的集合
> 是一种抽象的，并不实际存在的，表示一种事物共有特征的描述
>
> 对象是类中具体一个实例
> 是一种具体的，实际存在的，类中的某一个个体	
>
> 类用于创建对象的模版，而对象则是类的实例化

**创建对象**

字面式对象

```js
var 对象={
    key1:value1,
    key2:value2
}；//声明字面式对象
对象.属性=	,对象.方法(){}	//给对象添加属性和方法
```

通过object类创建对象

```js
//Object类是所有类的父类
var obj = new Object();
```

**创建类**

```js
//constructor() 是类的构造方法（默认方法），用于传递参数，返回实例对象。通过new命令实例化生成对象的时候，自动调用该方法，如果没有显式定义，类内部自动创建一个constructor()
//super() 用于访问父类对象上的属性，调用对象的父类上的函数不论是普通函数还是构造函数
class car{
    constructor(){}
    super();
}
```

例：

```js
class Father{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    sum(){
        console.log(this.x + this.y);
    }
}
```

```js
class Son extends Father{
    constructor(x,y){
        super(x,y);//调用父类中的构造函数
    }
}
var son = new Son(1,2);
son.sum();//3
```

注意：

​		1.就近原则：实例化子类输出一个方法，优先看子类有没有这个方法，如果子类有，就优先执行子类中的方法，子类没有则去父类查找这个方法
​		2.this的指向：constructor里面的this指向的是创建的实例对象。方法里面的this指向的是方法的调用者。箭头函数中不能使用this
​		3.子类通过super调用父类的构造方法，并且super必须在子类this之前

## 类型转换

> typeof()	获取变量的数据类型

##### 非number转换为number

```js
Number()
	碰到非字符显示NaN，不好用不建议使用。此方法常常被系统默认调用
parseInt()
	从第一个字符开始解析每个字符，直至遇见一个非数字值字符为止
parseFloat()
	从第一个字符开始解析每个字符，直至遇见一个非数字值字符为止或者第二个小数点为止
    该方法不能做到对number进行取整
```

##### 非字符串转换为字符串

```js
//一般建议使用第一种String进行转换，toString可能会导致程序错误
String()
.toStrinng()

//Uncaught TypeError: Cannot read properties of undefined (reading 'toString')
undefined.toString()
```

##### 非boolean转换为boolean

> 除了以下五种均为true

```js
document.writeln(Boolean(0));//false
document.writeln(Boolean(""));//false
document.writeln(Boolean(undefined));//false
document.writeln(Boolean(null));//false
document.writeln(Boolean(NaN));//false
```

## 常用方法

```js
多行注释	/*	*/
单行注释	//
前台显示	alert("弹窗");
后台显示	console.log('内容');
弹出输入框	var 变量接受输入内容 = prompt("弹窗输入提示");
页面刷新	location.reload()
```

##### 数字

````js
.toFixed([保留小数的位数])
	设置小数位数，四舍五入
isNaN([number])
	判断一个number是否为NaN(有效数字)
Math.random();
	随机生成[0-1)之间的小数
    i-n之间的随机数：(Math.random()*(n+1)) + i
````

##### 字母

```js
.toUpperCase()
	所有字母转大写
.toLowerCase()
	所有字母转小写
```

##### 空格

```js
.trim()
	去前后空格
.trimLeft()
	去前空格
.trimRight()
	去后空格
```

##### 字符串

```js
.split("[分隔点]")
	分隔字符串，返回一个数组，不包括分隔点。
    如果没有参数只有""每个字符串都分隔，没有""返回一个长度为1的数组
.length()
	查看字符串长度    
.reverse()
	颠倒字符串
//截取字符串    
.substring([首位下标],[末尾下标])
	截取字符串，前闭后开，会自动调整前后位，但不能接受负数
    如果只有一个参数，从参数截取到最后一位
.slice([首位下标],[末尾下标])
	截取字符串或/数组，与substring相似
.substr([首位下标],[个数])
	截取字符串/数组，从首位下标开始截取指定个数
//查找字符串
.indexOf("[需要查找的单词]",[index])
	只有第一个参数：查找字符串，输出需要查找的单词下标位置   
    两个参数：从index下标位置开始查找单词下标
.lastIndexOf("[需要查找的字符串]")
	从后往前找
.charAt([index])
	查找指定下标位置的字符
    
String.fromCharCode([Unicode]...)
	将Unicode码转换为对应字符返回（A-Z:65-90,a-z:97-122）
.charCodeAt(index)  
	将字符转换为Unicode码返回，index为字符串中字符的下标
```

##### 数组

```js
.concat([arr1],[arr2])
	合并数组。需先创建一个空数组接收合并后的数据。
    var a=[];var a=a.concat([arr1],[arr2])
.join("[分隔符]")
    数组转换成字符串，将所有数组成员穿插分隔符返还字符串，没有参数默认逗号分隔
.includes(arr)
	判断数组是否包含arr
//删除与添加
var a=['a','b','c']    
.push('[value1]','[value2]'...)
	a.push('d','e','f');向a添加数据
.pop()
	删除最后一个数组元素，返回删除的元素
.unshift('[value1]','[value2]'...)
	前增加：a.unshift('d','e','f');按顺序将数据添加到数组前面
.shift()
	删除第一个数组元素，返回删除的元素
.splic([index],[number],[value])
	删除与插入：返回包含删除元素的数组
     只有第一个参数：删除index下标位置开始到数组末尾所有元素
     只有前两个参数：删除index下标位置开始后面number个元素
     三个参数都有：在前面的基础上并在index位置插入value
     提示：只插入的话可以：var b = a.splic(1,0,"apple");//a=['a','value','b','c']

.map
const newArray = oldArray.map((element, index, array) => {
    // 对 element 进行处理并返回新的值
    //element：当前遍历的数组元素
    //index：当前元素的索引位置，可选
    //array：原始数组，可选
});
	对数组中的每个元素执行某个操作，然后返回一个新的数组
例：
let nums = [2,4,6,8,7];
let newNums = nums.map(function(val){
            return val*3;
        })// 输出: [6, 12, 18, 24, 21]
精简语法：newNums = nums.map(n => n*3);

.filter
const newArray = oldArray.filter((element, index, array) => {
    // 返回一个布尔值，决定元素是否包含在新数组中
});
	用于创建一个新数组，其中包含原数组中满足特定条件的元素
例子:
let nums = [2,4,7,5,8,10];
 newNums = nums.filter(n=>{
          return n%2 == 0;
       })// 输出: [2, 4, 8, 10]
精简语法：let newNums = nums.filter(n => n%2==0);
//链式调用
let newNums = nums.filter(n => n%2 != 0).map(n => n*3); // 输出: [21, 15]
```

##### Set

```js
mySet.add([value]);
	向集合中添加元素，如果元素已存在，则不会重复添加
mySet.delete([value]);
	删除集合中的指定元素，如果元素不存在，则不会有任何操作
mySet.has([value]);
	检测该元素是否存在于集合中，返回布尔
mySet.size
	获取集合中的元素数量
mySet.clear()
	清空集合
Array.from(set);
	将set转换为数组返回
```

## 扩展

### 模版字符串

> 是一种字符串字面量，使用反引号（``)来标识，可以包含动态的部分，即在运行时表达式的值可以嵌入其中
>
> 表达式写在${}内，在模版字符串中如果需要使用反引号，可以使用反斜杠（\）转义它

```js
const name = 'Alice';
const age = 25;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
//Hello, my name is Alice and I am 25 years old.
```

模版字符串也可以用于多行字符串，以为它们保留了内部的空格和换行符

```js
const multiLine = `This is a multi-line
string using a template
literal.`;
/*
This is a multi-line
string using a template
literal.
*/
```

### localStorage

> 以键值对的方式永久储存数据在本地
> 在浏览器中查看：打开该地址，f12进入开发者模式->Application->Storage->Local storage

```js
//存取都需要json格式数据
.setItem(key,value)
	存数据
.getItem(key) 
	取数据
.removeItem(key)
	移除某项数据
.clear()
	清除所有值
```

### JSON

> json是一种轻量级的数据交换格式，在语法上与创建JavaScript对象代码相同
>
> 语法规则：
> 		数据为 键/值 对
> 		数据由逗号分隔
> 		大括号保存对象
> 		方括号保存数组

```js
//JSON实例
{"sites":[
    {"name":"Runoob", "url":"www.runoob.com"}, 
    {"name":"Google", "url":"www.google.com"},
    {"name":"Taobao", "url":"www.taobao.com"}
]}
```

```js
.stringify();
	把对象(数组，set，类)转为json字符串
.parse();
	把json字符串解析转换为js对象(数组，set，类)
```

# DOM

> 概念：
>
> ​	Dom：”文档对象模型“，是html的编程接口，提供访问和操作网页内容的方法和接口
> ​	节点：
> ​			元素节点：HTML标签
> ​			文本节点：标签之间的纯文本
> ​			属性节点：元素节点的属性
> ​			注释节点：注释的文本
> ​	事件：某些组件被执行了某些操作（如单击，双击，键盘按下，鼠标移动等）后，触发某些代码的执行

## Dom元素

> 问题：js文件的导入或者书写在html前面会出现获取不到DOM元素的情况
> 原因：html文件是从上而下扫的，浏览器先识别到js代码便会如此
> 解决方法
>
> - 一是将js文件的导入书写放在文件末尾
> - 二是在js代码中获取Dom元素步骤写在window.onload（窗口加载完成后的事件）中

```js
window.onload=()=>{
 	document.getElementByld();
    ...
}
```

#### 获取到Dom元素

> 以下方法均是**document**开头

```js
.write();
	向文档写入HTML表达式或js代码

.querySelect("css样式选择器");
	返回带有指定的css样式选择器获取到的节点
.querySelectAll("css样式选择器;
	返回带有指定的css样式选择器获取到的节点列表
.getElementByld("id名");
	返回带有指定id的元素
.getElementByName("name名");
	返回带有指定name名的所有元素的节点列表
.getElementsTagName；
	返回包含带有指定标签名称的所有元素的节点列表
.getElementsByClassName("类名");
	包含带有指定类名的所有元素的节点列表
```

#### Dom元素的操作

> 以下方法均是  **元素**  开头

~~~js
.getAttrlbute("[属性名]");
	获取到指定的属性值
.setAttrilbute("[属性名]","[属性值]");
	给元素赋值
    
//三者区别：innerText用于获取和设置HTML元素的可见文本，只会包含文本内容没有HTML标签。适用于大多数HTML元素，如div,span,p	
//innerHtml可以获取或设置元素的整个HTML内容，包括所有的HTML标签、子标签和文本
//value用于获取或设置表单元素的值，主要用于输入相关的HTML元素，如input,textarea,select   
.innerText;
	设置或返回元素标签中间的文本值
    //document.getElementByld("form").lnnerText;
    //document.getElementByld("form").lnnerText=需要设置放在元素标签中间的文本值
.lnnerHTML;
	设置或返回元素标签中间的html标签
    //同上
    //document.getElementByld("form").lnnerhtml+=需要增加的html值
.value;
	获取到表单元素的值
    
.style
	设置页面元素的样式
	//document.getElementByld("id名").style.backgroundColor = "black";
.className
	获取或设置html元素的class属性
    //document.getElementByld("id名").className;	返回类名
    //document.getElementByld("id名").className = "类名";	设置类名
~~~

## 节点

#### 获取到节点

> 以下方法均是  **元素**  开头

```js
.parentNode
	返回元素节点的父节点
    
.childNodes
.children
	返回元素节点的子节点集合，使用下标访问到具体节点，前者包含空白节点(回车、空格、制表符)

.fistChild
.firstElementChild
	返回元素节点的第一个子节点,前者可能会获取到空节点，不建议使用

.lastChild
.lastElementChild
	返回元素节点的最后一个子节点,前者可能会获取到空节点，不建议使用

.nextSibling
.nextElementSibling
	返回下一个兄弟节点，前者可能会获取到空节点，不建议使用
    
.previousSibing
.previousElementSibling
	返回上一个兄弟节点，前者可能会获取到空节点，不建议使用
```

#### 节点的操作

```sj
document.createElement("[标签名]");
document.createTextNode("[文本值]");
	创建一个节点或文本,给节点赋属性直接点属性名或者用setAttrilbute
	//let B = document.createElement("input");
	//B.type="submit";
	//B.setAttrilbute("name","submit");
	
A.appendChild(B);
	向节点A的子节点列表的末尾添加新的子节点B
C.insertBefore(A,B);
	将节点A插入节点B之前，C为B的父节点
	
A.cloneNode(boole);
	克隆节点A，参数为是否克隆子节点。
	//var clone = document.getElementById("my-element").cloneNode(true);
	
A.removeChild(B);
	//删除指定节点中的子节点，A为父节点，B为要删除的节点，返回B节点。
	//删除后的节点B虽然不在文档树中了，但其实它还在内存中，可以随时再次被添加到别的位置。
A.remove();
	//删除指定节点A
	//document.getElementById("my-element").remove();
	
A.replaceChild(newNode,oldNode);
	//替换节点，A为父节点，newNode为新节点，oldNode为老节点
	//1.当 oldnode 被替换时，所有与之相关的属性内容都将被移除。
	//2.newnode 必须先被建立。
```

## js事件

### 常用事件

##### 点击事件：

- onclick：单击事件
- ondblclick：双击事件

##### 焦点事件

- onblur：失去焦点
- onfocus:元素获得焦点

##### 加载事件

- onload：一张页面或一幅图像完成加载

##### 鼠标事件

- onmousedown 鼠标按钮被按下。
- onmouseup 鼠标按键被松开。
- onmousemove 鼠标被移动。
- onmouseover 鼠标移到某元素之上。
- onmouseout 鼠标从某元素移开。

##### 键盘事件

- onkeydown 某个键盘按键被按下。
- onkeyup 某个键盘按键被松开。
- onkeypress 某个键盘按键被按下并松开。

##### 选择和改变事件

- onchange 域的内容被改变。
- onselect 文本被选中。

##### 表单事件

- onsubmit 确认按钮被点击。
- onreset 重置按钮被点击。

### 事件的注册

> 什么是事件的注册（绑定）？
> 其实就是告诉浏览器，当事件响应后要执行哪些操作代码
>
> 注册事件分两种方式
> 	静态注册事件：
> 	动态注册事件

##### 静态注册事件

> 通过html标签的事件属性直接赋予事件响应后的代码，即在html标签中通过将方法以属性值赋值给事件方法

```js
function sayHello(){
    alert("hello js!");
}
//注册事件的第一种方式，直接在标签中使用事件句柄
//将sayHello函数注册到按钮上，等待click事件发生之后
<input type="button" value="hello" onclick="sayHello()"/>
```

##### 动态注册事件

> 先通过js代码得到标签的dom对象，然后再通过dom对象.事件名=function(){}
>
> 动态注册基本步骤：
> 		获取标签对象
> 		标签对象.事件名=function(){}

```js
function dynamic(){}
var btnobj1 = document.getElementById("mybtn1");
btnobj1.onclick = dynamic;//千万别加小括号，否者在扫到这段代码时直接调用执行函数了

var btnobj2 = document.getElementById("mybtn2");
//匿名函数。该函数在页面打开时只是注册上，不会被调用，在click事件发生后才会调用
btnobj2.onclick = function(){}
//箭头函数
btnobj2.onclick = () => {}
```

