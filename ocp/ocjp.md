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

## 3. 集合新的API

早期创建集合 通过new ArrayList(); add()存储数据
在JDK9之后开始支持通过List.of()	Set.of()	创建集合添加元素
缺点：是不可变集合

## 4. 流的新的API

流：

- 串行流：类似于单线程 无论存储多少数据 都是通过一个线程 进行处理(过滤 遍历 收集器...) 所以最终存储数据的顺序和获取数据的顺序是一致的
- 并行流：类似于多线程 相当于把流的元素分成很多个数据块，并且就可以通过不同的线程对这些数据块 进行分别处理 所以最终存储的数据的顺序 和获取顺序都是不同的

流中的常用方法：

- iterate(初值,迭代方式x->x+2)：流的静态方法 配置迭代方式
- limit(int)：流的普通方法 迭代次数
- Arrays.stream(数组)：将数组的元素存储流中
- of()：流的静态方法 Stream.of(?,?,?)
- dropWhile：
- takeWhile：
