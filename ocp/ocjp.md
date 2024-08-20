# OCJP

## 1. 搭建jdk11

- 点击包/jdk-11_windows-x64_bin.exe开始安装11版本jdk，本机安装在D:\JAVA\jdk-11
- 打开IDEA，进入到Project Structure界面(Crtl+Alt+Shift+S)
- 点击SDKs -> + -> add JDK...  选择D:\JAVA\jdk-11
- 点击Modules，新建模块，正常java项目就好
- 创建好后点击右边区域 Dependencies 选择11版本jdk
- 点击Sources -> Language level，选择11的语言版本
- apply OK就好

## 2. 局部变量的推断

java11开始支持类似于js的方式 比如：var定义变量

底层是根据变量最终赋的值决定类型的 编译器最终也会把var替换成最终的类型

```java
int i=10;
String name="";
var a=10;	->	int a=10;
var b="abc";
```

注：

- 变量必须要赋值 如果没有赋值 则编译报错 无法推断

```java
var a; //编译报错
```

- 类的成员变量也是不能写var

```java
class Test{
    var name="张三"; //不支持
}
```

- var是可以和lambda表达式结合使用的

```java
Compartor c = (Object o1,Object o2)-> o1.属性-o2.属性;
Compartor c = (var o1,var o2)-> o1.属性-o2.属性;
Compartor c = (o1,o2)-> o1.属性-o2.属性;
Compartor c = (var o1,Object o2)-> o1.属性-o2.属性; //错误的
```

- var不能当作方法的形参

```java
public void test(var a){}	//不支持
```

- var不能当做方法的返回值

```java
public var test(){}  //不支持 	
```

